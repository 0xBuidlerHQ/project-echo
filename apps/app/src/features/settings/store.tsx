import React from "react";
import type { Address } from "viem";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useWeb3 } from "@/providers/web3";

type UseSettingsStoreState = {
	/**
	 * Dialog.
	 */
	settingsDialog: boolean;
	openSettingsDialog: () => void;
	closeSettingsDialog: () => void;

	/**
	 * Settings.
	 */
	devMode: boolean;
	toggleDevMode: () => void;
};

const createStore = (address: Address) =>
	create<UseSettingsStoreState>()(
		persist(
			(set) => ({
				/**
				 * Dialog.
				 */
				settingsDialog: false,
				openSettingsDialog: () => set({ settingsDialog: true }),
				closeSettingsDialog: () => set({ settingsDialog: false }),

				/**
				 * Settings.
				 */
				devMode: false,
				toggleDevMode: () => set((state) => ({ devMode: !state.devMode })),
			}),
			{
				name: `settings-store-${address}`,
				partialize: ({ settingsDialog, ...persistedState }) => persistedState,
			},
		),
	);

const storeCache = new Map<string, ReturnType<typeof createStore>>();

const getStore = (address: Address) => {
	if (!storeCache.has(address)) storeCache.set(address, createStore(address));
	return storeCache.get(address)!;
};

const useSettingsStore = () => {
	const { eoa } = useWeb3();

	const address = eoa.address || "0x";
	const store = React.useMemo(() => getStore(address), [address]);
	return store();
};

export { useSettingsStore };
