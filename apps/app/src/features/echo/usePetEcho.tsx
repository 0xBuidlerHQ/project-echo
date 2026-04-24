"use client";

import { echoAccountAbi, echoLifeCycleModuleConfig } from "@0xhq/project-echo.contracts";
import { useQueryClient } from "@tanstack/react-query";
import { type Address, encodeFunctionData } from "viem";
import { useWriteContract } from "wagmi";

import { useEcho } from "@/providers/echo";
import { useWeb3 } from "@/providers/web3";

const usePetEcho = () => {
	const queryClient = useQueryClient();
	const { chain } = useWeb3();
	const { echo } = useEcho();
	const petEchoWrite = useWriteContract();

	const chainId = chain?.id as keyof typeof echoLifeCycleModuleConfig.address | undefined;
	const echoId = echo?.echoId;

	const petEcho = async () => {
		if (!chainId) throw new Error("Missing chain id");
		if (!echo || echoId === undefined) throw new Error("Missing selected echo");

		const address = echoLifeCycleModuleConfig.address[chainId];
		if (!address) throw new Error(`EchoLifeCycleModule is not configured for chain ${chainId}`);

		const data = encodeFunctionData({
			abi: echoLifeCycleModuleConfig.abi,
			functionName: "pet",
			args: [echoId],
		});

		const hash = await petEchoWrite.mutateAsync({
			address: echo.echoAccount as Address,
			abi: echoAccountAbi,
			functionName: "execute",
			args: [
				{
					target: address,
					value: BigInt(0),
					data,
				},
			],
		});

		await Promise.all([
			queryClient.invalidateQueries({ queryKey: ["echo", "modules", chainId, echoId] }),
			queryClient.invalidateQueries({ queryKey: ["echo", "owned", chainId] }),
		]);

		return hash;
	};

	return {
		petEcho,
		txHash: petEchoWrite.data,
		error: petEchoWrite.error,
		isPending: petEchoWrite.isPending,
		isSuccess: petEchoWrite.isSuccess,
		reset: petEchoWrite.reset,
	};
};

export { usePetEcho };
