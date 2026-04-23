import { create } from "zustand";
import { persist } from "zustand/middleware";

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

const useSettingsStore = create<UseSettingsStoreState>()(
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
			name: "settings-store",
			partialize: ({ settingsDialog, ...persistedState }) => persistedState,
		},
	),
);

export { useSettingsStore };
