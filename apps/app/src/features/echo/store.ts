import { create } from "zustand";

type UseEchoStoreState = {
	/**
	 * Dialog.
	 */
	echoCreationDialog: boolean;
	openEchoCreationDialog: () => void;
	closeEchoCreationDialog: () => void;
};

const useEchoStore = create<UseEchoStoreState>()((set) => ({
	/**
	 * Dialog.
	 */
	echoCreationDialog: false,
	openEchoCreationDialog: () => set({ echoCreationDialog: true }),
	closeEchoCreationDialog: () => set({ echoCreationDialog: false }),
}));

export { useEchoStore };
