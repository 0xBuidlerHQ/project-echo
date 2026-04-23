"use client";

import { echoFactoryConfig } from "@0xhq/project-echo.contracts";
import type { EchoGenesis } from "@0xhq/project-echo.contracts/types.user";
import { useQueryClient } from "@tanstack/react-query";
import type { Address } from "viem";
import { useWriteContract } from "wagmi";

import { useWeb3 } from "@/providers/web3";

type CreateEchoParams = EchoGenesis.s_Params;

const useEchoCreate = () => {
	const queryClient = useQueryClient();
	const { chain, eoa } = useWeb3();
	const echoFactoryMint = useWriteContract();

	const owner = eoa.address as Address | undefined;
	const chainId = chain?.id as keyof typeof echoFactoryConfig.address | undefined;

	const createEcho = async (params: CreateEchoParams) => {
		if (!chainId) throw new Error("Missing chain id");

		const address = echoFactoryConfig.address[chainId];
		if (!address) throw new Error(`EchoFactory is not configured for chain ${chainId}`);

		const hash = await echoFactoryMint.mutateAsync({
			...echoFactoryConfig,
			address,
			functionName: "mint",
			args: [params],
		});

		await queryClient.invalidateQueries({ queryKey: ["echo", "owned", chainId, owner] });

		return hash;
	};

	return {
		createEcho,
		txHash: echoFactoryMint.data,
		error: echoFactoryMint.error,
		isPending: echoFactoryMint.isPending,
		isSuccess: echoFactoryMint.isSuccess,
		reset: echoFactoryMint.reset,
	};
};

export type { CreateEchoParams };
export { useEchoCreate };
