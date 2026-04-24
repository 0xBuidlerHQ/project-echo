"use client";

import { echoErc721Config, echoFactoryAbi, echoFactoryConfig } from "@0xhq/project-echo.contracts";
import type { EchoFactory } from "@0xhq/project-echo.contracts/types.user";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import type { Address } from "viem";

import { useEchoStore } from "@/features/echo/store";
import { useWeb3 } from "@/providers/web3";

/**
 * @dev useEcho hook.
 */
const useEchoPrimitive = () => {
	const { chain, eoa, publicClient } = useWeb3();
	const echoStore = useEchoStore();
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

	const ownedEchos = ownedEchoesQuery.data ?? [];
	const selectedEcho = echoStore.selectedEcho;

	const echo = React.useMemo(() => {
		if (ownedEchos.length === 0) return undefined;

		if (selectedEcho === undefined) return ownedEchos[0];

		return ownedEchos.find((item) => item.echoId === selectedEcho) ?? ownedEchos[0];
	}, [ownedEchos, selectedEcho]);

	React.useEffect(() => {
		if (!echo) return;
		if (selectedEcho === echo.echoId) return;

		echoStore.setSelectedEcho(echo.echoId);
	}, [echo, echoStore, selectedEcho]);

	const isFirstUser =
		ownedEchoesQuery.isSuccess &&
		Boolean(owner && chainId && publicClient) &&
		ownedEchos.length === 0;

	return {
		eoa: owner,
		echo,
		isFirstUser,
		ownedEchos,
		...ownedEchoesQuery,
	};
};

/**
 * @dev useEcho context.
 */
const EchoContext = React.createContext<ReturnType<typeof useEchoPrimitive> | undefined>(undefined);
const EchoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const echo = useEchoPrimitive();

	return <EchoContext.Provider value={echo}>{children}</EchoContext.Provider>;
};

/**
 * @dev useEcho context hook.
 */
const useEcho = () => {
	const context = React.useContext(EchoContext);
	if (context === undefined) {
		throw new Error("useEcho must be used within an EchoProvider");
	}
	return context;
};

export { EchoContext, EchoProvider, useEcho };
