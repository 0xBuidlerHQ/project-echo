"use client";

import { OrbitControls } from "@react-three/drei";

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

export { SceneTools };
