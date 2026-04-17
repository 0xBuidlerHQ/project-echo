import { create } from "zustand";

type UseDrawerStoreState = {
	menuDrawer: boolean;
	openMenuDrawer: () => void;
	closeMenuDrawer: () => void;

	petActionDrawer: boolean;
	openPetActionDialog: () => void;
	closePetActionDialog: () => void;
};

const useDrawerStore = create<UseDrawerStoreState>()((set) => ({
	menuDrawer: false,
	openMenuDrawer: () => set({ menuDrawer: true }),
	closeMenuDrawer: () => set({ menuDrawer: false }),

	petActionDrawer: false,
	openPetActionDialog: () => set({ petActionDrawer: true }),
	closePetActionDialog: () => set({ petActionDrawer: false }),
}));

export { useDrawerStore };
