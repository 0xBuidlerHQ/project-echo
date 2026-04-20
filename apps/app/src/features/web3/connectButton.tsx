"use client";

import { useConnection } from "wagmi";
import { Box } from "@/primitives/box";
import { Button } from "@/primitives/button";
import { useWeb3 } from "@/providers/web3";

const ConnectButton = () => {
	const { eoa, isConnected, connect } = useWeb3();

	const a = useConnection();

	return (
		<Box>
			{/* <Box>{a.isConnected ? "connected" : "not conected"}</Box> */}
			<Box>{!a.address ? "empty" : a.address}</Box>
		</Box>
	);

	if (isConnected) {
		return <Box>{eoa.address}</Box>;
	}

	return (
		<Button onClick={connect}>
			<Box>Connect</Box>
		</Button>
	);
};

export { ConnectButton };
