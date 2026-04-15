import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UseDrawerStoreState = {
	menuDrawer: boolean;
	openMenuDrawer: () => void;
	closeMenuDrawer: () => void;
};

const useDrawerStore = create<UseDrawerStoreState>()(
	persist(
		(set) => ({
			menuDrawer: false,
			openMenuDrawer: () => set({ menuDrawer: true }),
			closeMenuDrawer: () => set({ menuDrawer: false }),
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

export { useDrawerStore };
