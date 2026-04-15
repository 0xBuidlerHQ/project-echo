"use client";

import Link from "next/link";
import type { MouseEventHandler } from "react";
import { cn } from "@/utils";

interface ButtonBaseProps extends React.HTMLAttributes<HTMLButtonElement> {
	href?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	external?: boolean;
	disabled?: boolean;
}

const Button = (props: ButtonBaseProps) => {
	const { children, onClick, href, className, external, disabled } = props;

	if (onClick)
		return (
			<button
				type="button"
				className={cn(
					"group relative hover:cursor-pointer",
					className,
					disabled && "pointer-events-none!",
				)}
				onClick={onClick}
			>
				{children}
			</button>
		);

	return (
		<div
			className={cn(
				"group hover:cursor-pointer overflow-hidden",
				className,
				disabled && "pointer-events-none!",
			)}
		>
			<Link target={external ? "_blank" : undefined} href={href ?? "https://google.com"}>
				{children}
			</Link>
		</div>
	);
};

export { Button };
