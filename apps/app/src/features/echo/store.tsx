import type { EchoFactory } from "@0xhq/project-echo.contracts/types.user";
import React from "react";
import type { Address } from "viem";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { useWeb3 } from "@/providers/web3";

type UseEchoStoreState = {
	/**
	 * Dialog.
	 */
	echoCreationDialog: boolean;
	openEchoCreationDialog: () => void;
	closeEchoCreationDialog: () => void;

	/**
	 * Echo.
	 */
	selectedEcho: EchoFactory.EchoContext["echoId"] | undefined;
	setSelectedEcho: (selectedEcho: bigint) => void;
};

const createStore = (address: Address) =>
	create<UseEchoStoreState>()(
		persist(
			(set) => ({
				/**
				 * Dialog.
				 */
				echoCreationDialog: false,
				openEchoCreationDialog: () => set({ echoCreationDialog: true }),
				closeEchoCreationDialog: () => set({ echoCreationDialog: false }),

				/**
				 * Echo.
				 */
				selectedEcho: undefined,
				setSelectedEcho: (selectedEcho: bigint) => set({ selectedEcho }),
			}),
			{
				name: `echo-store-${address}`,
				partialize: ({ echoCreationDialog, ...persistedState }) => persistedState,
				storage: createJSONStorage(() => localStorage, {
					replacer: (_key, value) => (typeof value === "bigint" ? `${value.toString()}n` : value),
					reviver: (_key, value) =>
						typeof value === "string" && /^\d+n$/.test(value) ? BigInt(value.slice(0, -1)) : value,
				}),
			},
		),
	);

const storeCache = new Map<string, ReturnType<typeof createStore>>();

const getStore = (address: Address) => {
	if (!storeCache.has(address)) storeCache.set(address, createStore(address));
	return storeCache.get(address)!;
};

const useEchoStore = () => {
	const { eoa } = useWeb3();

	const address = eoa.address || "0x";
	const store = React.useMemo(() => getStore(address), [address]);
	return store();
};

export { useEchoStore };
