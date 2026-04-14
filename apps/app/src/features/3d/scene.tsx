"use client";

import { Center, ContactShadows, Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Echo } from "@/features/3d/echo";
import { cn } from "@/utils";

const SceneOverlay = () => {
	const [show, setShow] = React.useState(true);

	React.useEffect(() => {
		const timeout = setTimeout(() => setShow(false), 500);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<div
			className={cn(
				"absolute inset-0 z-100 bg-background transition-opacity duration-500",
				show ? "opacity-100" : "pointer-events-none opacity-0",
			)}
		/>
	);
};

const ScenePrimitive = () => {
	return (
		<>
			<Center>
				<Echo />
			</Center>
		</>
	);
};

const SceneLights = () => {
	return (
		<>
			<ambientLight intensity={0.1} />
			<directionalLight
				castShadow
				color="#fff7ed"
				intensity={1.4}
				position={[5, 7, 6]}
				shadow-mapSize-height={2048}
				shadow-mapSize-width={2048}
			/>
			<directionalLight color="#dbeafe" intensity={0.45} position={[-6, 3, 4]} />
			<pointLight color="#f8fafc" intensity={0.35} position={[0, 2, 8]} />
			<pointLight color="#c4b5fd" intensity={0.25} position={[0, 4, -6]} />
		</>
	);
};

const SceneTools = () => {
	return (
		<>
			<OrbitControls
				autoRotate
				//
				enablePan={false}
				enableRotate={false}
				enableZoom={false}
			/>
		</>
	);
};

const SceneEnvironments = () => {
	return (
		<>
			<ContactShadows
				blur={2}
				color="#0f172a"
				far={10}
				opacity={0.6}
				position={[0, -2.5, 0]}
				resolution={1024}
				scale={12}
			/>
		</>
	);
};

const SceneHUD = () => {
	return (
		<Html fullscreen>
			<div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center p-6">
				<div className="pointer-events-auto flex items-center gap-4 font-tronica-mono text-[10px] uppercase tracking-[0.24em] text-current">
					<button className="px-2 py-1 tracking-tighter text-xl" type="button">
						Hello
					</button>
				</div>
			</div>
		</Html>
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
