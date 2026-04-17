import { create } from "zustand";

type UsePetStoreState = {
	petActionDialog: boolean;
	openPetActionDialog: () => void;
	closePetActionDialog: () => void;
};

const usePetStore = create<UsePetStoreState>()(
	(set) => ({
		petActionDialog: false,
		openPetActionDialog: () => set({ petActionDialog: true }),
		closePetActionDialog: () => set({ petActionDialog: false }),
	}),
);

export { usePetStore };
