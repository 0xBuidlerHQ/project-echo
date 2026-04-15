"use client";

import { Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Echo } from "@/features/3d/primitives/echo";
import { SceneEnvironments } from "@/features/3d/primitives/environments";
import { SceneHUD } from "@/features/3d/primitives/hud";
import { SceneLights } from "@/features/3d/primitives/lights";
import { SceneOverlay } from "@/features/3d/primitives/overlay";
import { SceneTools } from "@/features/3d/primitives/tools";

const ScenePrimitive = () => {
	return (
		<>
			<Center>
				<Echo />
			</Center>
		</>
	);
};

const Scene = () => {
	return (
		<div className="relative h-full w-full">
			<SceneOverlay />

			<Canvas shadows camera={{ position: [0, 0, 10] }} className="h-full w-full">
				<ScenePrimitive />
				<SceneHUD />
				<SceneLights />
				<SceneTools />
				<SceneEnvironments />
			</Canvas>
		</div>
	);
};

export { Scene };
