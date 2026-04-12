// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";

contract EchoProgressModule is AccessControl {
    /**
     * @dev Constants.
     */
    bytes32 public constant PROGRESS_CONTROLLER_ROLE = keccak256("PROGRESS_CONTROLLER_ROLE");

    uint256 private constant BASE_XP = 42;
    uint256 private constant SCALE = 1e18;
    uint256 private constant SQRT_SCALE = 1e9; // sqrt(1e18)

    /**
     * @dev Struct s_EchoProgress.
     */
    struct s_EchoProgress {
        uint256 xp;
        uint256 level;
    }

    /**
     * @dev Mappings.
     */
    mapping(uint256 => s_EchoProgress) private progresses;

    /**
     * @dev Events.
     */
    event XpAdded(uint256 indexed echoId, uint256 xpBefore, uint256 amount, uint256 xpAfter);
    event LevelUp(uint256 indexed echoId, uint256 newLevel);

    /**
     * @dev Constructor.
     */
    constructor(address _owner) {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `_owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, _owner);
        _grantRole(PROGRESS_CONTROLLER_ROLE, _owner);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function getEchoProgress(uint256 _echoId) external view returns (s_EchoProgress memory) {
        return progresses[_echoId];
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function addXp(uint256 _echoId, uint256 _amount) external onlyRole(PROGRESS_CONTROLLER_ROLE) {
        uint256 previous = progresses[_echoId].xp;
        uint256 previousLevel = progresses[_echoId].level;
        uint256 next = previous + _amount;
        uint256 nextLevel = _levelFromXp(next);

        progresses[_echoId] = s_EchoProgress({xp: next, level: nextLevel});

        emit XpAdded(_echoId, previous, _amount, next);
        if (nextLevel > previousLevel) emit LevelUp(_echoId, nextLevel);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function _levelFromXp(uint256 _xp) internal pure returns (uint256) {
        if (_xp == 0) return 0;

        uint256 scaled = Math.mulDiv(_xp, SCALE, BASE_XP);
        return Math.sqrt(scaled) / SQRT_SCALE;
    }
}
