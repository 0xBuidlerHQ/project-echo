"use client";

import { CheckCircle2, LoaderCircle, X } from "lucide-react";
import React from "react";
import { useEchoStore } from "@/features/echo/store";
import { usePetEcho } from "@/features/echo/usePetEcho";
import { Box } from "@/primitives/box";
import { Button, ButtonPrimary } from "@/primitives/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/shadcn/dialog";

const Content = () => {
	const echoStore = useEchoStore();
	const { petEcho, isPending, isSuccess, reset } = usePetEcho();

	React.useEffect(() => {
		if (!isSuccess) return;

		echoStore.closeEchoPetDialog();
		reset();
	}, [echoStore, isSuccess, reset]);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		await petEcho();
	};

	return (
		<Box className="flex flex-col gap-8 p-4 relative">
			<Box className="absolute top-0 right-0 p-4">
				<Button onClick={echoStore.closeEchoPetDialog}>
					<Box className="bg-muted p-1 rounded-full border">
						<X className="size-4 text-muted-foreground/75" />
					</Box>
				</Button>
			</Box>

			<Box className="flex flex-col gap-0">
				<h1 className="text-6xl font-bold">Pet</h1>
				<h1 className="text-sm text-muted-foreground">
					{"{ "}Pet your selected Echo{" }"}
				</h1>
			</Box>

			<form className="flex flex-col gap-6" onSubmit={handleSubmit}>
				<Box className="rounded-2xl border bg-muted/25 p-4 text-sm text-muted-foreground">
					Confirm the pet action to send the lifecycle transaction for the currently selected Echo.
				</Box>

				<ButtonPrimary
					type="submit"
					disabled={isPending}
					className="flex items-center justify-center gap-2"
				>
					{isPending ? <LoaderCircle className="size-4 animate-spin" /> : null}
					{isSuccess && !isPending ? <CheckCircle2 className="size-4 text-emerald-400" /> : null}
					<Box className="text-lg">{isPending ? "Petting" : "Confirm"}</Box>
				</ButtonPrimary>
			</form>
		</Box>
	);
};

const EchoPetDialog = () => {
	const echoStore = useEchoStore();

	return (
		<Dialog open={echoStore.echoPetDialog} onOpenChange={echoStore.closeEchoPetDialog}>
			<DialogContent
				className="bg-white p-0 text-black duration-300 data-open:fade-in-0 data-open:slide-in-from-bottom-21 data-open:zoom-in-100 data-closed:fade-out-0 data-closed:slide-out-to-bottom-21 data-closed:zoom-out-100"
				showCloseButton={false}
			>
				<DialogTitle className="hidden">Echo Pet Dialog Title</DialogTitle>
				<DialogDescription className="hidden">Echo Pet Dialog Description</DialogDescription>

				<Content />
			</DialogContent>
		</Dialog>
	);
};

export { EchoPetDialog };
