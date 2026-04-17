"use client";

import { petRelay as petRelayPrimitive } from "@/features/pet/relay";

const usePetAction = () => {
	const petRelay = petRelayPrimitive.useRelay();

	const steps = [
		petRelayPrimitive.createRelayStep({
			id: "id-0",
			label: "API call",
			fn: async () => {
				await new Promise((resolve) => setTimeout(resolve, 1000));
				return petRelayPrimitive.StepSuccess({ type: "apicall" });
			},
		}),
		petRelayPrimitive.createRelayStep({
			id: "id-1",
			label: "API2 call",
			fn: async () => {
				await new Promise((resolve) => setTimeout(resolve, 1000));
				return petRelayPrimitive.StepSuccess({ type: "apicall" });
			},
		}),
	];

	return {
		initialize: () => {
			petRelay.reset();
			petRelay.initialize(steps);
		},
		start: petRelay.start,
	};
};

export { usePetAction };
