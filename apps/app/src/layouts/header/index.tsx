"use client";

import Link from "next/link";
import { links } from "@/config/links";
import { HeaderPrimitive } from "@/primitives/header";

const Header = () => {
	return (
		<HeaderPrimitive>
			<div className="py-2">
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-4">
						<div className="text-muted-foreground">0x /</div>

						<Link className="text-sm font-medium" href={links.home.url}>
							Echo Project
						</Link>
					</div>

					<div className="underline underline-offset-4 text-sm">connect</div>
				</div>
			</div>

			<div className="bg-muted h-px" />
		</HeaderPrimitive>
	);
};

export { Header };
