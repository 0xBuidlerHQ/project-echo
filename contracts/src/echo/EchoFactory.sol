// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {EchoAccount} from "@echo/EchoAccount.sol";
import {EchoERC721} from "@echo/EchoERC721.sol";

import {EchoGenesis} from "@echo/EchoGenesis.sol";

/**
 * @dev Events.
 */
contract EchoFactory {
    /**
     * @dev Struct EchoContext.
     */
    struct EchoContext {
        uint256 echoId;
        //
        EchoAccount echoAccount;
        EchoGenesis.s_EchoGenesis echoGenesis;
    }

    /**
     * @dev Immutables.
     */
    EchoERC721 public immutable echoERC721;
    EchoGenesis public immutable echoGenesis;

    /**
     * @dev Events.
     */
    event EchoCreated(address indexed owner, EchoContext echoContext);

    /**
     * @dev Constructor.
     */
    constructor(EchoERC721 _echoERC721, EchoGenesis _echoGenesis) {
        echoERC721 = _echoERC721;
        echoGenesis = _echoGenesis;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function mint(EchoGenesis.s_Params calldata _params) external returns (uint256 echoId, EchoAccount echoAccount) {
        echoId = echoERC721.mint(msg.sender);
        echoAccount = new EchoAccount{salt: _generateSalt(echoId)}(echoId, address(echoERC721));

        echoGenesis.initialize(echoId, _params);

        emit EchoCreated(
            msg.sender,
            EchoContext({
                echoId: echoId,
                //
                echoAccount: echoAccount,
                echoGenesis: echoGenesis.getEchoGenesis(echoId)
            })
        );
    }

    /**
     * @dev
     */
    function getEchoContext(uint256 _echoId) public view returns (EchoContext memory echoContext) {
        echoContext = EchoContext({
            echoId: _echoId,
            //
            echoAccount: _getEchoAccount(_echoId),
            echoGenesis: echoGenesis.getEchoGenesis(_echoId)
        });
    }

    /**
     * @dev
     */
    function _getEchoAccount(uint256 _echoId) internal view returns (EchoAccount) {
        bytes32 salt = _generateSalt(_echoId);
        bytes memory initCode = _generateInitCode(_echoId);
        bytes32 hash = keccak256(abi.encodePacked(bytes1(0xff), address(this), salt, keccak256(initCode)));

        return EchoAccount(payable(address(uint160(uint256(hash)))));
    }

    /**
     * @dev
     */
    function _generateSalt(uint256 _echoId) internal pure returns (bytes32 salt) {
        salt = keccak256(abi.encode(_echoId));
    }

    /**
     * @dev
     */
    function _generateInitCode(uint256 _echoId) internal view returns (bytes memory initCode) {
        initCode = abi.encodePacked(type(EchoAccount).creationCode, _echoId, abi.encode(address(echoERC721)));
    }
}
