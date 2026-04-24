"use client";

import { Loader2 } from "lucide-react";
import React from "react";
import { SceneHUD } from "@/app/hud";
import { Scene } from "@/features/3d/scene";
import { useCreateEcho } from "@/features/echo/useCreateEcho";
import { Box } from "@/primitives/box";
import { ButtonPrimary } from "@/primitives/button";
import { Container } from "@/primitives/container";
import { useEcho } from "@/providers/echo";
import { useWeb3 } from "@/providers/web3";

const EchoOnboarding = () => {
	const { createEcho, isPending } = useCreateEcho();
	const [name, setName] = React.useState("");

	const canSubmit = name.trim().length > 0 && !isPending;

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const sanitizedName = name.trim();
		if (!sanitizedName) return;

		await createEcho({ name: sanitizedName });
	};

	return (
		<Box className="absolute inset-0 z-30 flex items-center justify-center px-4 py-8">
			<Box className="w-full max-w-xl rounded-[2rem] border border-white/15 bg-black/30 p-6 text-white backdrop-blur-xl sm:p-8">
				<Box className="mb-8 flex flex-col gap-2">
					<Box className="text-xs uppercase tracking-[0.3em] text-white/60">Onboarding</Box>
					<h1 className="text-5xl font-black leading-none sm:text-6xl">Create Your First Echo</h1>
					<p className="max-w-md text-sm text-white/70 sm:text-base">
						Your wallet is connected, but there is no Echo yet. Start by naming the one that will
						live in this browser session.
					</p>
				</Box>

				<form className="flex flex-col gap-6" onSubmit={handleSubmit}>
					<Box className="flex flex-col gap-2">
						<label
							htmlFor="onboarding-echo-name"
							className="text-xs uppercase tracking-[0.24em] text-white/60"
						>
							Name
						</label>

						<input
							id="onboarding-echo-name"
							value={name}
							onChange={(event) => setName(event.target.value)}
							placeholder="Nova"
							maxLength={32}
							className="h-14 rounded-2xl border border-white/15 bg-white/8 px-4 text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/45"
						/>
					</Box>

					<ButtonPrimary
						type="submit"
						disabled={!canSubmit}
						className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-4 text-black"
					>
						{isPending ? <Loader2 className="size-4 animate-spin" /> : null}
						<Box className="text-lg">{isPending ? "Creating" : "Create Echo"}</Box>
					</ButtonPrimary>
				</form>
			</Box>
		</Box>
	);
};

const Homepage = () => {
	const { isConnected } = useWeb3();
	const { isFirstUser } = useEcho();

	return (
		<Container className="h-full">
			<Box className="relative size-full">
				<Scene />

				{isConnected && (isFirstUser ? <EchoOnboarding /> : <SceneHUD />)}
			</Box>
		</Container>
	);
};

export default Homepage;
