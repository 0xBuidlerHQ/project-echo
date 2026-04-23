"use client";

import { PlusIcon } from "lucide-react";
import { useDrawerStore } from "@/features/drawers/store";
import { useEchoStore } from "@/features/echo/store";
import { useEcho } from "@/features/web3/useEcho";
import { Footer } from "@/layouts/footer";
import { Box } from "@/primitives/box";
import { Button } from "@/primitives/button";
import { Container } from "@/primitives/container";
import { Drawer, DrawerContent, DrawerTitle } from "@/shadcn/drawer";

const SelectContent = () => {
	const echo = useEcho();
	const settingsStore = useEchoStore();

	return (
		<Box className="px-4 flex flex-col gap-8 mb-8">
			<h1 className="text-8xl font-bold">select</h1>

			<Box className="h-px bg-muted" />

			<Box className="grid grid-cols-5 gap-2">
				<Button onClick={settingsStore.openEchoCreationDialog} className="rounded border h-full">
					<Box className="h-full flex items-center justify-center">
						<PlusIcon className="size-21" />
					</Box>
				</Button>

				{echo.data?.map((item, _) => {
					return (
						<Box key={_} className="rounded border">
							<Box className="aspect-square">hi</Box>

							<Box className="border-t">{item.echoGenesis.name}</Box>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

const SelectDrawer = () => {
	const drawerStore = useDrawerStore();

	return (
		<Drawer open={drawerStore.selectDrawer} onOpenChange={drawerStore.closeSelectDrawer}>
			<DrawerContent className="bg-white text-black">
				<Box className="overflow-y-auto">
					<Container>
						<DrawerTitle className="hidden">Select Drawer</DrawerTitle>

						<SelectContent />
						<Footer />
					</Container>
				</Box>
			</DrawerContent>
		</Drawer>
	);
};

export { SelectDrawer };
