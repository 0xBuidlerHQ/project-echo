"use client";

import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

type EchoProps = {
	agitation?: number;
	chaos?: number;
	colors?: string[];
	reflectivity?: number;
	size?: number;
};

const defaultProps = {
	agitation: 1,
	chaos: 1,
	colors: ["#ccfbf1", "#5eead4", "#0f766e"],
	reflectivity: 0.35,
	size: 1,
} satisfies Required<EchoProps>;

const Echo = (_props: EchoProps) => {
	const props = { ...defaultProps, ..._props };
	const materialRef = React.useRef<THREE.ShaderMaterial>(null);
	const [colorA, colorB, colorC] = [
		props.colors?.[0] ?? defaultProps.colors[0],
		props.colors?.[1] ?? props.colors?.[0] ?? defaultProps.colors[1],
		props.colors?.[2] ?? props.colors?.[1] ?? props.colors?.[0] ?? defaultProps.colors[2],
	];

	useFrame(({ clock }) => {
		if (!materialRef.current) {
			return;
		}

		materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
	});

	React.useEffect(() => {
		if (!materialRef.current) {
			return;
		}

		materialRef.current.uniforms.uAgitation.value = props.agitation ?? defaultProps.agitation;
		materialRef.current.uniforms.uChaos.value = props.chaos ?? defaultProps.chaos;
		materialRef.current.uniforms.uReflectivity.value =
			props.reflectivity ?? defaultProps.reflectivity;
		materialRef.current.uniforms.uColorA.value.set(colorA);
		materialRef.current.uniforms.uColorB.value.set(colorB);
		materialRef.current.uniforms.uColorC.value.set(colorC);
	}, [colorA, colorB, colorC, props.agitation, props.chaos, props.reflectivity]);

	return (
		<mesh castShadow>
			<sphereGeometry args={[props.size, 42, 42]} />
			<shaderMaterial
				ref={materialRef}
				uniforms={{
					uTime: { value: 0 },
					uAgitation: { value: props.agitation },
					uChaos: { value: props.chaos },
					uReflectivity: { value: props.reflectivity },
					uColorA: { value: new THREE.Color(colorA) },
					uColorB: { value: new THREE.Color(colorB) },
					uColorC: { value: new THREE.Color(colorC) },
				}}
				vertexShader={`
					varying vec3 vNormal;
					varying vec3 vLocalPosition;
					varying vec3 vViewDirection;
					uniform float uAgitation;
					uniform float uChaos;
					uniform float uTime;

					void main() {
						float motion = uTime * (0.9 + uAgitation * 0.7);
						float amplitude = 0.035 + uAgitation * 0.06;
						float frequency = 2.4 + uChaos * 2.2;
						float turbulence = sin(position.z * (frequency + 0.8) + motion * 0.8) * (0.025 * uChaos);
						vec3 transformed = position + normal * (
							sin(position.y * frequency + motion * 1.3) * amplitude +
							sin(position.x * (frequency + 1.1) - motion) * amplitude * 0.7 +
							turbulence
						);
						vec4 modelPosition = modelMatrix * vec4(transformed, 1.0);
						vNormal = normalize(normalMatrix * normal);
						vLocalPosition = transformed;
						vViewDirection = normalize(cameraPosition - modelPosition.xyz);
						gl_Position = projectionMatrix * viewMatrix * modelPosition;
					}
				`}
				fragmentShader={`
					varying vec3 vNormal;
					varying vec3 vLocalPosition;
					varying vec3 vViewDirection;
					uniform vec3 uColorA;
					uniform vec3 uColorB;
					uniform vec3 uColorC;
					uniform float uReflectivity;

					void main() {
						vec3 normal = normalize(vNormal);
						vec3 viewDir = normalize(vViewDirection);
						vec3 lightDir = normalize(vec3(0.45, 0.8, 0.55));
						vec3 fillLightDir = normalize(vec3(-0.65, 0.25, 0.35));
						float diffuse = max(dot(normal, lightDir), 0.0);
						float fill = max(dot(normal, fillLightDir), 0.0);
						float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.4);
						float coreShade = 1.0 - smoothstep(0.15, 1.25, length(vLocalPosition));
						vec3 halfVector = normalize(lightDir + viewDir);
						float specular = pow(max(dot(normal, halfVector), 0.0), 20.0);
						vec3 reflectionDir = reflect(-viewDir, normal);
						float reflectionMix = clamp(reflectionDir.y * 0.5 + 0.5, 0.0, 1.0);
						vec3 reflectedSky = mix(vec3(0.9, 0.97, 1.0), uColorA, 0.35);
						vec3 reflectedGround = mix(vec3(0.08, 0.1, 0.16), uColorC, 0.35);
						vec3 reflectedEnv = mix(reflectedGround, reflectedSky, reflectionMix);
						float swirlA = sin(vLocalPosition.x * 2.6 + vLocalPosition.y * 1.8);
						float swirlB = cos(vLocalPosition.z * 2.2 - vLocalPosition.x * 1.4);
						float swirlMix = clamp(swirlA * 0.25 + swirlB * 0.25 + 0.5, 0.0, 1.0);
						float verticalMix = smoothstep(-1.15, 1.15, vLocalPosition.y);
						float depthMix = smoothstep(-1.1, 1.1, vLocalPosition.z);
						vec3 gradientAB = mix(uColorA, uColorB, mix(verticalMix, swirlMix, 0.45));
						vec3 gradientBC = mix(uColorB, uColorC, mix(depthMix, 1.0 - swirlMix, 0.4));
						vec3 color = mix(gradientAB, gradientBC, 0.5 + (swirlMix - 0.5) * 0.65);
						float mirrorEdge = pow(1.0 - max(dot(normal, viewDir), 0.0), 4.0);
						float glossySpecular = pow(max(dot(normal, halfVector), 0.0), 48.0);

						color *= 0.58 + diffuse * 0.72 + fill * 0.18;
						color *= 1.0 - coreShade * 0.22;
						color = mix(color, reflectedEnv, uReflectivity * (0.22 + mirrorEdge * 0.58));
						color += fresnel * (0.12 + uReflectivity * 0.32);
						color += specular * (0.08 + uReflectivity * 0.18);
						color += glossySpecular * (uReflectivity * 0.35);
						gl_FragColor = vec4(color, 1.0);
					}
				`}
			/>
		</mesh>
	);
};

export { Echo };
