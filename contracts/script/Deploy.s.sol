// script/Deploy.s.sol
pragma solidity ^0.8.20;

import "forge-std/console2.sol";

import {EchoERC721} from "@echo/EchoERC721.sol";

import {EchoFactory} from "@echo/EchoFactory.sol";
import {EchoGenesis} from "@echo/EchoGenesis.sol";
import {EchoLifeCycleModule} from "@modules/EchoLifeCycleModule.sol";

import {Actors} from "./utils/Actors.s.sol";
import {Packages} from "./utils/Packages.s.sol";

contract Deploy is Actors, Packages {
    bytes32 internal constant SALT = keccak256("SALT");

    function run() external {
        Actor memory deployer = actor("DEPLOYER", 0);
        Actor memory alice = actor("alice", 1);
        Actor memory bob = actor("bob", 2);

        logActor(deployer);
        logActor(alice);
        logActor(bob);

        /*******************************
         * @dev Deploy contracts.
         *******************************/
        start(deployer);

        /**
         * @dev Pures.
         */
        EchoERC721 echoERC721 = new EchoERC721{salt: SALT}(deployer.addr);

        /**
         * @dev Echo Basis.
         */
        EchoGenesis echoGenesis = new EchoGenesis{salt: SALT}(deployer.addr);

        /**
         * @dev Factories.
         */
        EchoFactory echoFactory = new EchoFactory{salt: SALT}(echoERC721, echoGenesis);

        /**
         * @dev Modules.
         */
        EchoLifeCycleModule echoLifeCycleModule = new EchoLifeCycleModule{salt: SALT}(deployer.addr, echoFactory);
        EchoProgressModule echoProgressModule = new EchoProgressModule{salt: SALT}(deployer.addr);

        stop();

        /**
         * @dev Update roles.
         */
        start(deployer);

        echoERC721.grantRole(echoERC721.MINTER_ROLE(), address(echoFactory));
        echoERC721.revokeRole(echoERC721.MINTER_ROLE(), address(deployer.addr));

        echoGenesis.grantRole(echoGenesis.FACTORY_ROLE(), address(echoFactory));

        stop();

        /**
         * @dev Logs.
         */
        addDeployment("EchoERC721", address(echoERC721));
        addDeployment("EchoGenesis", address(echoGenesis));
        addDeployment("EchoFactory", address(echoFactory));

        addDeployment("EchoLifeCycleModule", address(echoLifeCycleModule));
        addDeployment("EchoProgressModule", address(echoProgressModule));
    }
}
