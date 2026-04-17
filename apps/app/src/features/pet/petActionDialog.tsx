"use client";

import { CheckCircle2, Circle, LoaderCircle, X, XCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { usePetStore } from "@/features/pet/petStore";
import { petRelay } from "@/features/pet/relay";
import { usePetAction } from "@/features/pet/usePetAction";
import { Box } from "@/primitives/box";
import { Button } from "@/primitives/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/shadcn/dialog";

const StepStatusIcon = (props: { status: string }) => {
	const transition = { duration: 0.18, ease: "easeOut" } as const;

	return (
		<>
			<motion.div
				className="absolute flex items-center justify-center text-emerald-400"
				animate={{
					opacity: props.status === "success" ? 1 : 0,
					scale: props.status === "success" ? 1 : 0.55,
				}}
				transition={transition}
			>
				<CheckCircle2 className="size-5" />
			</motion.div>

			<motion.div
				className="absolute flex items-center justify-center text-red-400"
				animate={{
					opacity: props.status === "error" ? 1 : 0,
					scale: props.status === "error" ? 1 : 0.55,
				}}
				transition={transition}
			>
				<XCircle className="size-5" />
			</motion.div>

			<motion.div
				className="absolute flex items-center justify-center text-muted-foreground"
				animate={{
					opacity: props.status === "loading" ? 1 : 0,
					scale: props.status === "loading" ? 1 : 0.55,
				}}
				transition={transition}
			>
				<LoaderCircle className="size-5 animate-spin" />
			</motion.div>

			<motion.div
				className="absolute flex items-center justify-center text-muted-foreground"
				animate={{
					opacity: props.status === "idle" ? 1 : 0,
					scale: props.status === "idle" ? 1 : 0.55,
				}}
				transition={transition}
			>
				<Circle className="size-5" />
			</motion.div>
		</>
	);
};

const StepListEmpty = () => (
	<motion.div
		initial={{ opacity: 0, y: 10 }}
		animate={{ opacity: 1, y: 0 }}
		className="rounded-2xl border border-dashed p-5"
	>
		<Box className="text-sm text-muted-foreground">
			The sequence appears here once the action is prepared.
		</Box>
	</motion.div>
);

const PetActionContent = () => {
	const { stepsBase, stepsState, isRunning, isDone, isError } = petRelay.useRelay();
	const { start, initialize } = usePetAction();
	const petStore = usePetStore();
	const totalSteps = stepsBase.length;
	const completedSteps = stepsState.filter((step) => step?.status === "success").length;
	const activeStep = stepsState.find((step) => step?.status === "loading");
	const progressValue =
		totalSteps === 0
			? 0
			: Math.min(100, ((completedSteps + (activeStep ? 0.5 : 0)) / totalSteps) * 100);

	return (
		<Box className="flex flex-col gap-8 p-4 relative">
			<Box className="absolute top-0 right-0 p-4">
				<Button onClick={petStore.closePetActionDialog}>
					<Box className="bg-muted p-1 rounded-full border">
						<X className="size-4 text-muted-foreground/75" />
					</Box>
				</Button>
			</Box>

			<Box className="flex flex-col gap-0">
				<h1 className="text-6xl font-bold">Pet</h1>
				<h1 className="text-sm text-muted-foreground">
					{"{ "}Feeding your Echo{" }"}
				</h1>
			</Box>

			<Box className="relative overflow-hidden rounded-2xl border bg-muted/25 p-4">
				<Box className="mb-4 flex justify-between items-center gap-4">
					<Box className="text-muted-foreground">Workflow</Box>

					<Box className="text-right text-xs text-muted-foreground">
						{stepsBase.length > 0 ? `${stepsBase.length} steps` : "Waiting for initialization"}
					</Box>
				</Box>

				<AnimatePresence mode="popLayout" initial={false}>
					{stepsBase.length === 0 ? (
						<StepListEmpty key="empty" />
					) : (
						<Box className="flex flex-col gap-4">
							<motion.div
								key="steps"
								layout
								className="flex flex-col gap-3"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								{stepsBase.map((item, i) => {
									const stepBase = item;
									const stepState = stepsState[i];
									const status = stepState?.status ?? "idle";

									return (
										<motion.div
											key={item.id}
											layout
											initial={{ opacity: 0, y: 16, scale: 0.98 }}
											animate={{ opacity: 1, y: 0, scale: 1 }}
											transition={{ duration: 0.28, delay: i * 0.06, ease: "easeOut" }}
											className="relative overflow-hidden rounded-2xl border bg-muted p-4"
										>
											<Box className="relative flex items-start gap-4">
												<Box className="flex min-w-0 flex-1 items-start justify-between gap-4">
													<Box className="min-w-0">
														<Box className="text-xs uppercase text-muted-foreground">
															Step {i + 1}
														</Box>

														<motion.div
															layout
															className="truncate"
															animate={status === "loading" ? { x: [0, 2, 0] } : { x: 0 }}
														>
															{stepBase.label}
														</motion.div>
													</Box>

													<Box className="relative flex size-6 shrink-0 items-center justify-center">
														<StepStatusIcon status={status} />
													</Box>
												</Box>
											</Box>
										</motion.div>
									);
								})}
							</motion.div>

							<Box className="flex flex-col gap-2">
								<Box className="flex items-center justify-between text-xs text-muted-foreground">
									<Box>Progress</Box>
									<Box>{Math.round(progressValue)} %</Box>
								</Box>

								<Box className="relative h-2 overflow-hidden rounded-full bg-muted">
									<motion.div
										className="absolute inset-y-0 left-0 rounded-full bg-foreground"
										animate={{ width: `${progressValue}%` }}
										transition={{ duration: 1, ease: "easeInOut" }}
									>
										<motion.div
											className="absolute inset-y-0 right-0 w-10 rounded-full bg-white/30 blur-[6px]"
											animate={isRunning ? { x: [-20, 12, -20] } : { x: 0 }}
											transition={
												isRunning
													? { duration: 1.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
													: { duration: 0.2 }
											}
										/>
									</motion.div>
								</Box>
							</Box>
						</Box>
					)}
				</AnimatePresence>
			</Box>

			<Button onClick={start} className="bg-foreground rounded-2xl p-4">
				<Box className="text-background text-lg h-6 flex items-center justify-center">
					{(() => {
						if (isRunning) {
							return <LoaderCircle className="size-6 animate-spin" />;
						}

						if (isDone) {
							return (
								<CheckCircle2
									onClick={() => {
										initialize();
										start();
									}}
									className="size-6 text-emerald-400"
								/>
							);
						}

						if (isError) {
							return <>Retry</>;
						}

						return <>Confirm</>;
					})()}
				</Box>
			</Button>
		</Box>
	);
};

const PetActionDialog = () => {
	const petStore = usePetStore();

	return (
		<Dialog open={petStore.petActionDialog} onOpenChange={petStore.closePetActionDialog}>
			<DialogContent
				className="bg-white p-0 text-black duration-300 data-open:fade-in-0 data-open:slide-in-from-bottom-21 data-open:zoom-in-100 data-closed:fade-out-0 data-closed:slide-out-to-bottom-21 data-closed:zoom-out-100"
				showCloseButton={false}
			>
				<DialogTitle className="hidden">Pet Action Dialog Title</DialogTitle>
				<DialogDescription className="hidden">Pet Action Dialog Description</DialogDescription>

				<PetActionContent />
			</DialogContent>
		</Dialog>
	);
};

export { PetActionDialog };
