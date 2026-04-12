// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title EchoGenesis.
 */
contract EchoGenesis is AccessControl {
    /**
     * @dev Constants.
     */
    bytes32 public constant FACTORY_ROLE = keccak256("FACTORY_ROLE");

    /**
     * @dev Struct s_Params.
     */
    struct s_Params {
        string name;
    }

    /**
     * @dev Struct s_EchoGenesis.
     */
    struct s_EchoGenesis {
        bool _initialized;
        //
        string name;
        uint256 birthEpoch;
    }

    /**
     * @dev Mappings.
     */
    mapping(uint256 => s_EchoGenesis) public echosGenesis;

    /**
     * @dev Events.
     */
    event EchoInitialized(uint256 indexed echoId, s_EchoGenesis echo);

    /**
     * @dev Errors.
     */
    error EchoGenesisAlreadyInitialized();

    /**
     * @dev Constructor.
     */
    constructor(address _owner) {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, _owner);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function getEchoGenesis(uint256 _echoId) external view returns (s_EchoGenesis memory echo) {
        echo = echosGenesis[_echoId];
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function initialize(uint256 _echoId, s_Params calldata _params) external onlyRole(FACTORY_ROLE) {
        s_EchoGenesis storage echo = echosGenesis[_echoId];
        if (echo._initialized) revert EchoGenesisAlreadyInitialized();

        echo._initialized = true;
        echo.name = _params.name;
        echo.birthEpoch = block.timestamp;

        emit EchoInitialized({echoId: _echoId, echo: echo});
    }
}
