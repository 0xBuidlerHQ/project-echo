"use client";

import { Loader2, X } from "lucide-react";
import React from "react";
import { useEchoStore } from "@/features/echo/store";
import { useCreateEcho } from "@/features/echo/useCreateEcho";
import { Box } from "@/primitives/box";
import { Button, ButtonPrimary } from "@/primitives/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/shadcn/dialog";

const Content = () => {
	const echoStore = useEchoStore();
	const { createEcho, isPending, isSuccess, reset } = useCreateEcho();
	const [name, setName] = React.useState("");

	React.useEffect(() => {
		if (!isSuccess) return;

		setName("");
		echoStore.closeEchoCreationDialog();
		reset();
	}, [echoStore, isSuccess, reset]);

	const canSubmit = name.trim().length > 0 && !isPending;
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const sanitizedName = name.trim();
		if (!sanitizedName) return;

		await createEcho({ name: sanitizedName });
	};

	return (
		<Box className="flex flex-col gap-8 p-4 relative">
			<Box className="absolute top-0 right-0 p-4">
				<Button onClick={echoStore.closeEchoCreationDialog}>
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

			<form className="flex flex-col gap-6" onSubmit={handleSubmit}>
				<Box className="flex flex-col gap-2">
					<label
						htmlFor="echo-name"
						className="text-xs uppercase tracking-[0.24em] text-muted-foreground"
					>
						Name
					</label>

					<input
						id="echo-name"
						value={name}
						onChange={(event) => setName(event.target.value)}
						placeholder="Nova"
						maxLength={32}
						className="h-12 rounded-2xl border bg-muted/50 px-4 outline-none transition-colors focus:border-foreground"
					/>
				</Box>

				<ButtonPrimary
					type="submit"
					disabled={!canSubmit}
					className="flex items-center justify-center gap-2"
				>
					{isPending ? <Loader2 className="size-4 animate-spin" /> : null}
					<Box className="text-lg">{isPending ? "Creating" : "Create"}</Box>
				</ButtonPrimary>
			</form>
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
