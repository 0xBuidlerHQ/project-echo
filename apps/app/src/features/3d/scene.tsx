"use client";

import { Center, Float, useContextBridge } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Echo } from "@/features/3d/primitives/echo";
import { SceneEnvironments } from "@/features/3d/primitives/environments";
import { SceneHUD } from "@/features/3d/primitives/hud";
import { SceneLights } from "@/features/3d/primitives/lights";
import { SceneOverlay } from "@/features/3d/primitives/overlay";
import { SceneTools } from "@/features/3d/primitives/tools";
import { Web3Context } from "@/providers/web3";

const ScenePrimitive = () => {
	return (
		<>
			<Float
				speed={1} // Animation speed, defaults to 1
				rotationIntensity={10} // XYZ rotation intensity, defaults to 1
				floatIntensity={1.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
				floatingRange={[-0.1, 1.25]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
			>
				<Center>
					<Echo />
				</Center>
			</Float>
		</>
	);
};

const Scene = () => {
	const Web3ContextBridge = useContextBridge(Web3Context);

	return (
		<div className="relative h-full w-full">
			<SceneOverlay />

			<Canvas shadows camera={{ position: [0, 0, 10] }} className="h-full w-full">
				<Web3ContextBridge>
					<ScenePrimitive />
					<SceneHUD />
					<SceneLights />
					<SceneTools />
					<SceneEnvironments />
				</Web3ContextBridge>
			</Canvas>
		</div>
	);
};

export { Scene };
