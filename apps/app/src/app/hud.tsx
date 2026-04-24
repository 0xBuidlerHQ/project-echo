"use client";

import { MenuIcon, PlusIcon } from "lucide-react";
import React, { type PropsWithChildren } from "react";
import { useDrawerStore } from "@/features/drawers/store";
import { useEchoModules } from "@/features/echo/useEchoModules";
import { Box } from "@/primitives/box";
import { Button } from "@/primitives/button";
import { useEcho } from "@/providers/echo";
import { useWeb3 } from "@/providers/web3";
import { cn } from "@/utils";

const CYCLE_DURATION_MS = 24 * 60 * 60 * 1000;

const formatDuration = (durationMs: number) => {
	const safeDurationMs = Math.max(0, durationMs);
	const days = Math.floor(safeDurationMs / CYCLE_DURATION_MS);
	const hours = Math.floor((safeDurationMs % CYCLE_DURATION_MS) / (60 * 60 * 1000));
	const minutes = Math.floor((safeDurationMs % (60 * 60 * 1000)) / (60 * 1000));
	const seconds = Math.floor((safeDurationMs % (60 * 1000)) / 1000);
	const milliseconds = Math.floor(safeDurationMs % 1000);

	return {
		compact: `${days}d/${hours}h/${minutes}m/${seconds}s`,
		full: `${days}d/${hours}h/${minutes}m/${seconds}s/${milliseconds}ms`,
	};
};

const HUDInfoItem = (props: { label: string } & PropsWithChildren) => (
	<div className="flex flex-col gap-px">
		<h4 className="text-base text-muted-foreground">{props.label}</h4>

		{props.children}
	</div>
);

const HUDInfo = () => {
	const { isConnected } = useWeb3();
	const { echo } = useEcho();
	const { isAlive, lifeCycle, progress, timeBeforeDeath } = useEchoModules();
	const [now, setNow] = React.useState(() => Date.now());

	React.useEffect(() => {
		const interval = window.setInterval(() => {
			setNow(Date.now());
		}, 50);

		return () => window.clearInterval(interval);
	}, []);

	const birthEpoch = echo?.echoGenesis.birthEpoch;
	const birthTimestampMs = birthEpoch !== undefined ? Number(birthEpoch) * 1000 : undefined;

	const ageDuration = React.useMemo(() => {
		if (birthTimestampMs === undefined) return undefined;

		return formatDuration(now - birthTimestampMs);
	}, [birthTimestampMs, now]);

	const birthTimestamp = React.useMemo(() => {
		if (birthEpoch === undefined) return "--";

		return new Date(Number(birthEpoch) * 1000).toLocaleString();
	}, [birthEpoch]);

	const timeBeforeDeathDuration = React.useMemo(() => {
		if (birthTimestampMs === undefined || !lifeCycle) {
			if (timeBeforeDeath === undefined) return undefined;

			return formatDuration(Number(timeBeforeDeath) * 1000);
		}

		const requiredCycle = lifeCycle.hasBeenPetted ? Number(lifeCycle.lastPettedCycle) + 1 : 0;
		const deadlineMs = birthTimestampMs + (requiredCycle + 1) * CYCLE_DURATION_MS;

		return formatDuration(deadlineMs - now);
	}, [birthTimestampMs, lifeCycle, now, timeBeforeDeath]);

	const canPet = React.useMemo(() => {
		if (!echo || birthTimestampMs === undefined || !isAlive || !lifeCycle) return false;

		const currentCycle = Math.floor((now - birthTimestampMs) / CYCLE_DURATION_MS);
		if (!lifeCycle.hasBeenPetted) return currentCycle === 0;

		return Number(lifeCycle.lastPettedCycle) < currentCycle;
	}, [birthTimestampMs, echo, isAlive, lifeCycle, now]);

	const level = progress?.level.toString() ?? "--";
	const xp = progress?.xp.toString() ?? "--";
	const name = echo?.echoGenesis.name ?? "--";
	const alive = isAlive !== undefined ? String(isAlive) : "--";
	const age = ageDuration?.compact ?? "--";
	const timeRemaining = timeBeforeDeathDuration?.compact ?? "--";

	return (
		<div
			className={cn(
				"pointer-events-auto gap-4 text-[10px] transition-all opacity-0",
				isConnected && "opacity-100",
			)}
		>
			<HUDInfoItem label="name">
				<h1 className="font-semibold text-4xl">{name}</h1>
			</HUDInfoItem>

			<HUDInfoItem label="age">
				<div className="flex items-baseline gap-2">
					<h1 className="font-semibold text-5xl sm:text-3xl">{age}</h1>
				</div>
			</HUDInfoItem>

			<HUDInfoItem label="info">
				<div className="flex flex-col bg-muted p-2 rounded">
					<Box className="flex gap-1 items-center">
						<h4 className="text-xs text-muted-foreground">Birth:</h4>
						<h4 className="text-xs text-muted-foreground">{"{ "}</h4>
						<h4 className="text-xs">{birthTimestamp}</h4>
						<h4 className="text-xs text-muted-foreground">{" }"}</h4>
					</Box>

					<Box className="flex gap-1 items-center">
						<h4 className="text-xs text-muted-foreground">Alive:</h4>
						<h4 className="text-xs text-muted-foreground">{"{ "}</h4>
						<h4 className="text-xs">{alive}</h4>
						<h4 className="text-xs text-muted-foreground">{" }"}</h4>
					</Box>

					<Box className="flex gap-1 items-center">
						<h4 className="text-xs text-muted-foreground">Can Pet:</h4>
						<h4 className="text-xs text-muted-foreground">{"{ "}</h4>
						<h4 className="text-xs">{String(canPet)}</h4>
						<h4 className="text-xs text-muted-foreground">{" }"}</h4>
					</Box>

					<Box className="flex gap-1 items-center">
						<h4 className="text-xs text-muted-foreground">XP:</h4>
						<h4 className="text-xs text-muted-foreground">{"{ "}</h4>
						<h4 className="text-xs">{xp}</h4>
						<h4 className="text-xs text-muted-foreground">{" }"}</h4>
					</Box>

					<Box className="flex gap-1 items-center">
						<h4 className="text-xs text-muted-foreground">Level:</h4>
						<h4 className="text-xs text-muted-foreground">{"{ "}</h4>
						<h4 className="text-xs">{level}</h4>
						<h4 className="text-xs text-muted-foreground">{" }"}</h4>
					</Box>

					<Box className="flex gap-1 items-center">
						<h4 className="text-xs text-muted-foreground">Time Before Death:</h4>
						<h4 className="text-xs text-muted-foreground">{"{ "}</h4>
						<h4 className="text-xs">{timeRemaining}</h4>
						<h4 className="text-xs text-muted-foreground">{" }"}</h4>
					</Box>
				</div>
			</HUDInfoItem>
		</div>
	);
};

const HUDButtons = () => {
	const { isConnected } = useWeb3();
	const drawerStore = useDrawerStore();

	return (
		<div className="pointer-events-auto flex justify-between w-full">
			<Button
				disabled={!isConnected}
				className={cn(
					"rounded-full transition-all -rotate-1 hover:-rotate-12 hover:scale-90 duration-500 opacity-0",
					isConnected && "opacity-100",
				)}
				onClick={drawerStore.openSelectDrawer}
			>
				<MenuIcon className="size-21" />
			</Button>

			<Button
				disabled={!isConnected}
				className={cn(
					"rounded-full transition-all rotate-1 hover:rotate-12 hover:scale-90 duration-500 opacity-0",
					isConnected && "opacity-100",
				)}
				onClick={drawerStore.openActionDrawer}
			>
				<PlusIcon className="size-21" />
			</Button>
		</div>
	);
};

const SceneHUD = () => {
	return (
		<Box className="absolute top-0 left-0 size-full">
			<Box className="">
				<div className="pointer-events-none absolute top-0 left-0 z-20 py-4">
					<HUDInfo />
				</div>

				<div className="pointer-events-none absolute bottom-0 z-20 py-4 w-full">
					<HUDButtons />
				</div>
			</Box>
		</Box>
	);
};

export { SceneHUD };
