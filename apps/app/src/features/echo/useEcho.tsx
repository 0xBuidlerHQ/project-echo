"use client";

import { echoErc721Config, echoFactoryAbi, echoFactoryConfig } from "@0xhq/project-echo.contracts";
import type { EchoFactory } from "@0xhq/project-echo.contracts/types.user";
import { useQuery } from "@tanstack/react-query";
import type { Address } from "viem";

import { useWeb3 } from "@/providers/web3";

const useEcho = () => {
	const { chain, eoa, publicClient } = useWeb3();
	const owner = eoa.address as Address | undefined;
	const chainId = chain?.id as keyof typeof echoErc721Config.address | undefined;

	const ownedEchoesQuery = useQuery({
		queryKey: ["echo", "owned", chainId, owner],
		enabled: Boolean(publicClient && owner && chainId),
		queryFn: async (): Promise<EchoFactory.EchoContext[]> => {
			if (!publicClient || !owner || !chainId) return [];

			const echoErc721Address = echoErc721Config.address[chainId];
			const echoFactoryAddress = echoFactoryConfig.address[chainId];

			if (!echoErc721Address || !echoFactoryAddress) return [];

			const balance = await publicClient.readContract({
				...echoErc721Config,
				address: echoErc721Address,
				functionName: "balanceOf",
				args: [owner],
			});

			if (balance === BigInt(0)) return [];

			const tokenIds = (await publicClient.multicall({
				contracts: Array.from({ length: Number(balance) }, (_, index) => ({
					...echoErc721Config,
					address: echoErc721Address,
					functionName: "tokenOfOwnerByIndex" as const,
					args: [owner, BigInt(index)] as const,
				})),
				allowFailure: false,
			})) as bigint[];

			return (await publicClient.multicall({
				contracts: tokenIds.map((tokenId) => ({
					...echoFactoryConfig,
					abi: echoFactoryAbi,
					address: echoFactoryAddress,
					functionName: "getEchoContext" as const,
					args: [tokenId] as const,
				})),
				allowFailure: false,
			})) as EchoFactory.EchoContext[];
		},
	});

	return {
		eoa: owner,
		ownedEchos: ownedEchoesQuery.data ?? [],
		...ownedEchoesQuery,
	};
};

export { useEcho };
