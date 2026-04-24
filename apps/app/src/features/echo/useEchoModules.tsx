"use client";

import { echoLifeCycleModuleConfig, echoProgressModuleConfig } from "@0xhq/project-echo.contracts";
import type {
	EchoLifeCycleModule,
	EchoProgressModule,
} from "@0xhq/project-echo.contracts/types.user";
import { useQuery } from "@tanstack/react-query";

import { useEcho } from "@/providers/echo";
import { useWeb3 } from "@/providers/web3";

const useEchoModules = () => {
	const { chain, publicClient } = useWeb3();
	const { echo } = useEcho();
	const chainId = chain?.id as keyof typeof echoLifeCycleModuleConfig.address | undefined;
	const echoId = echo?.echoId;

	const echoModulesQuery = useQuery({
		queryKey: ["echo", "modules", chainId, String(echoId)],
		enabled: Boolean(publicClient && chainId && echoId !== undefined),
		queryFn: async (): Promise<{
			isAlive: boolean;
			lifeCycle: EchoLifeCycleModule.s_EchoLifeCycle;
			progress: EchoProgressModule.s_EchoProgress;
			timeBeforeDeath: bigint;
		}> => {
			if (!publicClient || !chainId || echoId === undefined) {
				throw new Error("Missing echo module query context");
			}

			const lifeCycleModuleAddress = echoLifeCycleModuleConfig.address[chainId];
			const progressModuleAddress = echoProgressModuleConfig.address[chainId];

			if (!lifeCycleModuleAddress || !progressModuleAddress) {
				throw new Error(`Echo modules are not configured for chain ${chainId}`);
			}

			const [lifeCycle, progress, isAlive, timeBeforeDeath] = (await publicClient.multicall({
				contracts: [
					{
						...echoLifeCycleModuleConfig,
						address: lifeCycleModuleAddress,
						functionName: "getEchoLifecycle",
						args: [echoId],
					},
					{
						...echoProgressModuleConfig,
						address: progressModuleAddress,
						functionName: "getEchoProgress",
						args: [echoId],
					},
					{
						...echoLifeCycleModuleConfig,
						address: lifeCycleModuleAddress,
						functionName: "isAlive",
						args: [echoId],
					},
					{
						...echoLifeCycleModuleConfig,
						address: lifeCycleModuleAddress,
						functionName: "timeBeforeDeath",
						args: [echoId],
					},
				],
				allowFailure: false,
			})) as [
				EchoLifeCycleModule.s_EchoLifeCycle,
				EchoProgressModule.s_EchoProgress,
				boolean,
				bigint,
			];

			return {
				isAlive,
				lifeCycle,
				progress,
				timeBeforeDeath,
			};
		},
	});

	return {
		echoId,
		isAlive: echoModulesQuery.data?.isAlive,
		lifeCycle: echoModulesQuery.data?.lifeCycle,
		progress: echoModulesQuery.data?.progress,
		timeBeforeDeath: echoModulesQuery.data?.timeBeforeDeath,
		...echoModulesQuery,
	};
};

export { useEchoModules };
