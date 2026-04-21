"use client";

import { Html, useContextBridge } from "@react-three/drei";
import { PlusIcon } from "lucide-react";
import type { PropsWithChildren } from "react";
import { Box } from "@/primitives/box";
import { Button } from "@/primitives/button";
import { useWeb3, Web3Context } from "@/providers/web3";
import { useDrawerStore } from "@/stores/useDrawers";

const HUDInfoItem = (props: { label: string } & PropsWithChildren) => (
	<div className="flex flex-col gap-px">
		<h4 className="text-base text-muted-foreground">{props.label}</h4>

		{props.children}
	</div>
);

const HUDInfo = () => {
	return (
		<div className="pointer-events-auto gap-4 text-[10px]">
			<HUDInfoItem label="name">
				<h1 className="font-semibold text-7xl">Marcus</h1>
			</HUDInfoItem>

			<HUDInfoItem label="age">
				<div className="flex items-baseline gap-2">
					<h1 className="font-semibold text-7xl">230</h1>
					<h2 className="text-xl text-muted-foreground">days</h2>
				</div>
			</HUDInfoItem>

			<HUDInfoItem label="info">
				<div className="flex flex-col bg-muted p-2 rounded">
					<Box className="flex gap-1 items-center">
						<h4 className="text-xs text-muted-foreground">Alive:</h4>
						<h4 className="text-xs text-muted-foreground">{"{ "}</h4>
						<h4 className="text-xs">True</h4>
						<h4 className="text-xs text-muted-foreground">{" }"}</h4>
					</Box>

					<Box className="flex gap-1 items-center">
						<h4 className="text-xs text-muted-foreground">Pet Today:</h4>
						<h4 className="text-xs text-muted-foreground">{"{ "}</h4>
						<h4 className="text-xs">False</h4>
						<h4 className="text-xs text-muted-foreground">{" }"}</h4>
					</Box>

					<Box className="flex gap-1 items-center">
						<h4 className="text-xs text-muted-foreground">Time Remaining:</h4>
						<h4 className="text-xs text-muted-foreground">{"{ "}</h4>
						<h4 className="text-xs">48399s</h4>
						<h4 className="text-xs text-muted-foreground">{" }"}</h4>
					</Box>
				</div>
			</HUDInfoItem>
		</div>
	);
};

const HUDButtons = () => {
	const { isDisconnected } = useWeb3();
	const drawerStore = useDrawerStore();

	return (
		<div className="pointer-events-auto flex justify-center">
			<Button
				disabled={isDisconnected}
				className="rounded-full transition-all hover:rotate-12 hover:scale-90 duration-500"
				onClick={drawerStore.openMenuDrawer}
			>
				<PlusIcon className="size-25" />
			</Button>
		</div>
	);
};

const SceneHUD = () => {
	const Web3ContextBridge = useContextBridge(Web3Context);

	return (
		<Html fullscreen prepend className="z-0" zIndexRange={[0, 0]}>
			<Web3ContextBridge>
				<div className="pointer-events-none absolute top-0 left-0 z-20 py-4">
					<HUDInfo />
				</div>

				<div className="pointer-events-none absolute bottom-0 right-0 z-20 py-4">
					<HUDButtons />
				</div>
			</Web3ContextBridge>
		</Html>
	);
};

export { SceneHUD };
