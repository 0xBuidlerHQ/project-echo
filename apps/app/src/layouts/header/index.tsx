"use client";

import Link from "next/link";
import { links } from "@/config/links";

const Header = () => {
	return (
		<>
			<div className="py-2 px-4">
				<div className="flex justify-between items-center">
					<div className="flex gap-4">
						<div className="opacity-50">0x /</div>

						<Link className="text-sm underline-offset-4 underline" href={links.home.url}>
							Echo Project
						</Link>
					</div>

					<div className="underline underline-offset-4 text-sm">connect</div>
				</div>
			</div>

			<div className="bg-white/10 h-px" />
		</>
	);
};

export { Header };
