import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UsePetStoreState = {
	petActionDialog: boolean;
	openPetActionDialog: () => void;
	closePetActionDialog: () => void;
};

const usePetStore = create<UsePetStoreState>()(
	persist(
		(set) => ({
			petActionDialog: false,
			openPetActionDialog: () => set({ petActionDialog: true }),
			closePetActionDialog: () => set({ petActionDialog: false }),
		}),
		{
			name: "[project-echo]-store",
			storage: createJSONStorage(() => localStorage, {
				replacer: (_key, value) => (typeof value === "bigint" ? `${value.toString()}n` : value),
				reviver: (_key, value) =>
					typeof value === "string" && /^\d+n$/.test(value) ? BigInt(value.slice(0, -1)) : value,
			}),
		},
	),
);

export { usePetStore };
