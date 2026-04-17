"use client";

import { type LucideIcon, MoveRight, Send } from "lucide-react";
import { usePetStore } from "@/features/pet/petStore";
import { usePetAction } from "@/features/pet/usePetAction";
import { Footer } from "@/layouts/footer";
import { Box } from "@/primitives/box";
import { Button } from "@/primitives/button";
import { Container } from "@/primitives/container";
import { Drawer, DrawerContent, DrawerTitle } from "@/shadcn/drawer";
import { useDrawerStore } from "@/stores/useDrawers";

const MenuActionItem = (props: { text: string; onClick: Function }) => {
	return (
		<Button onClick={() => props.onClick()}>
			<Box className="flex items-center transition-all duration-300 gap-2 text-red-500 hover:text-white hover:bg-red-500 border border-transparent hover:border-muted">
				<Box className="transition-all duration-300 group-hover:ml-4 ml-2">
					<MoveRight size={30} />
				</Box>

				<Box className="transition-all duration-300 text-4xl">{props.text}</Box>
			</Box>
		</Button>
	);
};

const MenuUtilItem = (props: { text: string; icon: LucideIcon }) => {
	return (
		<Button>
			<Box className="flex gap-2">
				<Box className="flex flex-col justify-center items-center gap-1">
					<props.icon className="size-6" />

					<h1>{props.text}</h1>
				</Box>
			</Box>
		</Button>
	);
};

const MenuContent = () => {
	const drawerStore = useDrawerStore();

	const petStore = usePetStore();
	const petAction = usePetAction();

	return (
		<Box className="px-4 flex flex-col gap-8">
			<h1 className="text-8xl font-bold">menu</h1>

			<Box className="h-px bg-muted" />

			<Box className="flex flex-col gap-2">
				<MenuActionItem
					text="pet"
					onClick={() => {
						drawerStore.closeMenuDrawer();
						petStore.openPetActionDialog();
						petAction.initialize();
					}}
				/>
			</Box>

			<Box className="h-px bg-muted" />

			<Box className="flex justify-center gap-4">
				<MenuUtilItem text="share" icon={Send} />
			</Box>

			<Box />
		</Box>
	);
};

const MenuFooter = () => {
	return (
		<>
			<Box className="h-px" />

			<Footer />
		</>
	);
};

const MenuDrawer = () => {
	const drawerStore = useDrawerStore();

	return (
		<Drawer open={drawerStore.menuDrawer} onOpenChange={drawerStore.closeMenuDrawer}>
			<DrawerContent className="bg-white text-black">
				<Container>
					<DrawerTitle className="hidden">Menu Drawer</DrawerTitle>

					<MenuContent />

					<MenuFooter />
				</Container>
			</DrawerContent>
		</Drawer>
	);
};

export { MenuDrawer };
