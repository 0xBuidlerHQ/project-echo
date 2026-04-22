import { create } from "zustand";

type UseDrawerStoreState = {
	actionDrawer: boolean;
	openActionDrawer: () => void;
	closeActionDrawer: () => void;

	selectDrawer: boolean;
	openSelectDrawer: () => void;
	closeSelectDrawer: () => void;
};

const useDrawerStore = create<UseDrawerStoreState>()((set) => ({
	actionDrawer: false,
	openActionDrawer: () => set({ actionDrawer: true }),
	closeActionDrawer: () => set({ actionDrawer: false }),

	selectDrawer: false,
	openSelectDrawer: () => set({ selectDrawer: true }),
	closeSelectDrawer: () => set({ selectDrawer: false }),
}));

export { useDrawerStore };
