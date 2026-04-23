"use client";

import { X } from "lucide-react";
import { useEchoStore } from "@/features/echo/store";
import { Box } from "@/primitives/box";
import { Button } from "@/primitives/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/shadcn/dialog";

const Content = () => {
	const settingsStore = useEchoStore();

	return (
		<Box className="flex flex-col gap-8 p-4 relative">
			<Box className="absolute top-0 right-0 p-4">
				<Button onClick={settingsStore.closeEchoCreationDialog}>
					<Box className="bg-muted p-1 rounded-full border">
						<X className="size-4 text-muted-foreground/75" />
					</Box>
				</Button>
			</Box>

			<Box className="flex flex-col gap-0">
				<h1 className="text-6xl font-bold">Creation</h1>
				<h1 className="text-sm text-muted-foreground">
					{"{ "}Select your options{" }"}
				</h1>
			</Box>
		</Box>
	);
};

const EchoCreationDialog = () => {
	const echoStore = useEchoStore();

	return (
		<Dialog open={echoStore.echoCreationDialog} onOpenChange={echoStore.closeEchoCreationDialog}>
			<DialogContent
				className="bg-white p-0 text-black duration-300 data-open:fade-in-0 data-open:slide-in-from-bottom-21 data-open:zoom-in-100 data-closed:fade-out-0 data-closed:slide-out-to-bottom-21 data-closed:zoom-out-100"
				showCloseButton={false}
			>
				<DialogTitle className="hidden">Echo Creation Dialog Title</DialogTitle>
				<DialogDescription className="hidden">Echo Creation Dialog Description</DialogDescription>

				<Content />
			</DialogContent>
		</Dialog>
	);
};

export { EchoCreationDialog };
