"use client";

import { usePetStore } from "@/features/pet/petStore";
import { petRelay } from "@/features/pet/relay";
import { usePetAction } from "@/features/pet/usePetAction";
import { Box } from "@/primitives/box";
import { Button } from "@/primitives/button";
import { Dialog, DialogContent, DialogTitle } from "@/shadcn/dialog";

const PetActionContent = () => {
	const { stepsBase, stepsState } = petRelay.useRelay();
	const { execute } = usePetAction();

	return (
		<Box className="px-4 flex flex-col gap-8">
			<h1 className="text-8xl font-bold">Pet</h1>

			<Button onClick={execute}>confirm</Button>

			<Box>
				{stepsBase.map((item, i) => {
					const stepBase = item;
					const stepState = stepsState[i];

					return (
						<Box key={item.id}>
							<Box className="flex gap-2">
								<Box>{stepBase.label}</Box>
								<Box>{stepState.status}</Box>
							</Box>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

const PetActionDialog = () => {
	const petStore = usePetStore();

	return (
		<Dialog open={petStore.petActionDialog} onOpenChange={petStore.closePetActionDialog}>
			<DialogContent className="bg-white text-black">
				<Box>
					<DialogTitle className="hidden">Action Dialog</DialogTitle>

					<PetActionContent />
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export { PetActionDialog };
