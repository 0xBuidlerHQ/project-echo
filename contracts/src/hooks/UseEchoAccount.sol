// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {EchoFactory} from "@echo/EchoFactory.sol";

/**
 * @title UseEchoAccount.
 */
abstract contract UseEchoAccount {
    /**
     * @dev Immutables.
     */
    EchoFactory public immutable echoFactory;

    /**
     * @dev Errors.
     */
    error NotEchoAccount(address);

    /**
     * @dev Modifiers.
     */
    modifier onlyEchoAccount(uint256 _echoId) {
        if (msg.sender != _getEchoAccount(_echoId)) revert NotEchoAccount(msg.sender);
        _;
    }

    /**
     * @dev Constructor.
     */
    constructor(EchoFactory _echoFactory) {
        echoFactory = _echoFactory;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function _getEchoAccount(uint256 _echoId) internal view returns (address) {
        return address(echoFactory.getEchoContext(_echoId).echoAccount);
    }
}
