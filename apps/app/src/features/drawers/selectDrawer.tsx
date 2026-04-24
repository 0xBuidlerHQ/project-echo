"use client";

import { PlusIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { useDrawerStore } from "@/features/drawers/store";
import { useEchoStore } from "@/features/echo/store";
import { Footer } from "@/layouts/footer";
import { Box } from "@/primitives/box";
import { Button } from "@/primitives/button";
import { Container } from "@/primitives/container";
import { useEcho } from "@/providers/echo";
import { Drawer, DrawerContent, DrawerTitle } from "@/shadcn/drawer";
import { cn } from "@/utils";

const SelectContent = () => {
	const echo = useEcho();

	const echoStore = useEchoStore();
	const drawerStore = useDrawerStore();
	const selectedEcho = echoStore.selectedEcho;
	const orderedEchoes = React.useMemo(() => {
		const echoes = [...(echo.data ?? [])];

		if (selectedEcho === undefined) return echoes;

		return echoes.sort((a, b) => {
			const aPriority = a.echoId === selectedEcho ? 1 : 0;
			const bPriority = b.echoId === selectedEcho ? 1 : 0;

			return bPriority - aPriority;
		});
	}, [echo.data, selectedEcho]);

	return (
		<Box className="px-4 flex flex-col gap-8 mb-8">
			<h1 className="text-8xl font-bold">select</h1>

			<Box className="h-px bg-muted" />

			<motion.div layout className="grid grid-cols-5 gap-2">
				<Button
					onClick={() => {
						drawerStore.closeSelectDrawer();
						echoStore.openEchoCreationDialog();
					}}
					className="rounded border"
				>
					<Box className="aspect-square flex items-center justify-center">
						<PlusIcon className="size-21" />
					</Box>

					<Box className="border-t flex">hi</Box>
				</Button>

				<AnimatePresence initial={false} mode="popLayout">
					{orderedEchoes.map((item) => {
						const isSelected = selectedEcho === item.echoId;

						return (
							<Button
								key={item.echoId.toString()}
								onClick={() => echoStore.setSelectedEcho(item.echoId)}
							>
								<motion.div
									layout
									transition={{ type: "spring", stiffness: 320, damping: 28 }}
									initial={{ opacity: 0, scale: 0.96 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.96 }}
									className={cn("rounded border relative", isSelected && "border-amber-400")}
								>
									<Box className="aspect-square">hi</Box>
									<Box className="border-t flex">{item.echoGenesis.name}</Box>
								</motion.div>
							</Button>
						);
					})}
				</AnimatePresence>
			</motion.div>
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
