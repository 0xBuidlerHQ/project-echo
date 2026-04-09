// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

import {EchoGenesis} from "@echo/EchoGenesis.sol";
import {EchoFactory} from "@echo/EchoFactory.sol";
import {UseEchoAccount} from "@hooks/UseEchoAccount.sol";

/**
 * @title EchoLifeCycleModule
 */
contract EchoLifeCycleModule is UseEchoAccount, AccessControl {
    /**
     * @dev Struct s_EchoLifeCycle.
     */
    struct s_EchoLifeCycle {
        uint256 lastPetAt;
    }

    /**
     * @dev Constants.
     */
    uint256 public constant MAX_PET_INTERVAL = 24 hours;

    /**
     * @dev Mappings.
     */
    mapping(uint256 => s_EchoLifeCycle) private lifecycles;

    /**
     * @dev Events.
     */
    event EchoPetted(uint256 indexed echoId, uint256 petAt);

    /**
     * @dev Errors.
     */
    error EchoIsDead(uint256);

    /**
     * @dev Constructor.
     */
    constructor(address _owner, EchoFactory _echoFactory) UseEchoAccount(_echoFactory) {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `_owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, _owner);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function getEchoLifecycle(uint256 _echoId) external view returns (s_EchoLifeCycle memory) {
        return lifecycles[_echoId];
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function timeBeforeDeath(uint256 _echoId) external view returns (uint256) {
        uint256 referenceEpoch = _getReferenceEpoch(_echoId);
        if (referenceEpoch == 0) return 0;

        uint256 deadline = referenceEpoch + MAX_PET_INTERVAL;
        if (deadline <= block.timestamp) return 0;

        return deadline - block.timestamp;
    }

    /**
     * @dev
     */
    function isAlive(uint256 _echoId) public view returns (bool) {
        uint256 referenceEpoch = _getReferenceEpoch(_echoId);
        if (referenceEpoch == 0) return false;

        return referenceEpoch + MAX_PET_INTERVAL >= block.timestamp;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function pet(uint256 _echoId) external onlyEchoAccount(_echoId) {
        s_EchoLifeCycle storage lifecycle = lifecycles[_echoId];

        if (!isAlive(_echoId)) revert EchoIsDead(_echoId);

        lifecycle.lastPetAt = block.timestamp;

        emit EchoPetted(_echoId, block.timestamp);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function _getReferenceEpoch(uint256 _echoId) internal view returns (uint256 referenceEpoch) {
        referenceEpoch = lifecycles[_echoId].lastPetAt;
        if (referenceEpoch != 0) return referenceEpoch;

        EchoGenesis echoGenesis = echoFactory.echoGenesis();
        referenceEpoch = echoGenesis.getEchoGenesis(_echoId).birthEpoch;
    }
}
