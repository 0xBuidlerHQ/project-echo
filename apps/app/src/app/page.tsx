"use client";

import { SceneHUD } from "@/app/hud";
import { Scene } from "@/features/3d/scene";
import { Box } from "@/primitives/box";
import { Container } from "@/primitives/container";

const Homepage = () => {
	return (
		<Container className="h-full">
			<Box className="relative size-full">
				<Scene />

				<SceneHUD />
			</Box>
		</Container>
	);
};

export default Homepage;
