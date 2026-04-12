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
        bool hasBeenPetted;
        uint256 lastPettedCycle;
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
    error EchoAlreadyPettedForCurrentCycle(uint256);
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
    function timeBeforeDeath(uint256 _echoId) public view returns (uint256) {
        uint256 deadline = _getCurrentDeadline(_echoId);
        if (deadline == 0) return 0;
        if (deadline <= block.timestamp) return 0;

        return deadline - block.timestamp;
    }

    /**
     * @dev
     */
    function isAlive(uint256 _echoId) public view returns (bool) {
        uint256 birthEpoch = _getBirthEpoch(_echoId);
        if (birthEpoch == 0) return false;

        s_EchoLifeCycle memory lifecycle = lifecycles[_echoId];
        uint256 currentCycle = _getCycleAt(birthEpoch, block.timestamp);
        if (!lifecycle.hasBeenPetted) return currentCycle == 0;

        return currentCycle <= lifecycle.lastPettedCycle + 1;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function pet(uint256 _echoId) external onlyEchoAccount(_echoId) {
        s_EchoLifeCycle storage lifecycle = lifecycles[_echoId];
        uint256 birthEpoch = _getBirthEpoch(_echoId);
        uint256 currentCycle = _getCycleAt(birthEpoch, block.timestamp);

        if (!isAlive(_echoId)) revert EchoIsDead(_echoId);
        if (lifecycle.hasBeenPetted && lifecycle.lastPettedCycle == currentCycle) {
            revert EchoAlreadyPettedForCurrentCycle(_echoId);
        }

        lifecycle.hasBeenPetted = true;
        lifecycle.lastPettedCycle = currentCycle;

        emit EchoPetted(_echoId, block.timestamp);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function _getBirthEpoch(uint256 _echoId) internal view returns (uint256 birthEpoch) {
        EchoGenesis echoGenesis = echoFactory.echoGenesis();
        birthEpoch = echoGenesis.getEchoGenesis(_echoId).birthEpoch;
    }

    function _getCurrentDeadline(uint256 _echoId) internal view returns (uint256 deadline) {
        uint256 birthEpoch = _getBirthEpoch(_echoId);
        if (birthEpoch == 0) return 0;

        s_EchoLifeCycle memory lifecycle = lifecycles[_echoId];
        uint256 requiredCycle = lifecycle.hasBeenPetted ? lifecycle.lastPettedCycle + 1 : 0;

        deadline = birthEpoch + ((requiredCycle + 1) * MAX_PET_INTERVAL);
    }

    function _getCycleAt(uint256 _birthEpoch, uint256 _timestamp) internal pure returns (uint256) {
        return (_timestamp - _birthEpoch) / MAX_PET_INTERVAL;
    }
}
