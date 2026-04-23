"use client";

import { X } from "lucide-react";
import { useSettingsStore } from "@/features/settings/store";
import { Box } from "@/primitives/box";
import { Button } from "@/primitives/button";
import { useWeb3 } from "@/providers/web3";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/shadcn/dialog";
import { Switch } from "@/shadcn/switch";

const Content = () => {
	const settingsStore = useSettingsStore();

	const { disconnect } = useWeb3();

	const ContentItems = [
		{
			title: "Dev Mode",
			description: "Development Mode UI",
			value: settingsStore.devMode,
			onChange: settingsStore.toggleDevMode,
		},
	];

	return (
		<Box className="flex flex-col gap-8 p-4 relative">
			<Box className="absolute top-0 right-0 p-4">
				<Button onClick={settingsStore.closeSettingsDialog}>
					<Box className="bg-muted p-1 rounded-full border">
						<X className="size-4 text-muted-foreground/75" />
					</Box>
				</Button>
			</Box>

			<Box className="flex flex-col gap-0">
				<h1 className="text-6xl font-bold">Settings</h1>
				<h1 className="text-sm text-muted-foreground">
					{"{ "}Select your preferences{" }"}
				</h1>
			</Box>

			<Box className="flex flex-col gap-2 border rounded-2xl p-4">
				{ContentItems.map((item, _) => {
					return (
						<>
							<Box key={item.title} className="flex justify-between">
								<Box className="flex flex-col">
									<Box className="font-medium">{item.title}</Box>
									<Box className="text-muted-foreground text-xs">{item.description}</Box>
								</Box>

								<Switch checked={item.value} onClick={item.onChange} />
							</Box>

							{ContentItems.length - 1 !== _ && <Box className="h-px bg-muted" />}
						</>
					);
				})}
			</Box>

			<Box className="flex flex-col gap-2">
				<Button onClick={disconnect} className="bg-muted border rounded-2xl p-4">
					<Box className="text-lg h-6 flex items-center justify-center text-red-500">
						Disconnect
					</Box>
				</Button>
			</Box>
		</Box>
	);
};

const SettingsDialog = () => {
	const settingsStore = useSettingsStore();

	return (
		<Dialog open={settingsStore.settingsDialog} onOpenChange={settingsStore.closeSettingsDialog}>
			<DialogContent
				className="bg-white p-0 text-black duration-300 data-open:fade-in-0 data-open:slide-in-from-bottom-21 data-open:zoom-in-100 data-closed:fade-out-0 data-closed:slide-out-to-bottom-21 data-closed:zoom-out-100"
				showCloseButton={false}
			>
				<DialogTitle className="hidden">Settings Dialog Title</DialogTitle>
				<DialogDescription className="hidden">Settings Dialog Description</DialogDescription>

				<Content />
			</DialogContent>
		</Dialog>
	);
};

export { SettingsDialog };
