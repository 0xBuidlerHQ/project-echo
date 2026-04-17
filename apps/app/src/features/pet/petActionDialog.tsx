"use client";

import { usePetStore } from "@/features/pet/petStore";
import { petRelay } from "@/features/pet/relay";
import { usePetAction } from "@/features/pet/usePetAction";
import { Box } from "@/primitives/box";
import { Button } from "@/primitives/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/shadcn/dialog";

const PetActionContent = () => {
	const { stepsBase, stepsState } = petRelay.useRelay();
	const { start } = usePetAction();

	return (
		<Box className="flex flex-col gap-8">
			<h1 className="text-8xl font-bold">Pet</h1>

			<Button onClick={start}>confirm</Button>

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
			<DialogContent className="bg-white text-black p-0" showCloseButton={false}>
				<Box>
					<DialogTitle className="hidden">Pet Action Dialog Title</DialogTitle>
					<DialogDescription className="hidden">Pet Action Dialog Description</DialogDescription>

					<PetActionContent />
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export { PetActionDialog };
