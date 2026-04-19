import "./globals.css";
import "./system.css";

import type { Metadata } from "next";
import { tronicaMono } from "@/config/fonts";
import { Footer } from "@/layouts/footer";
import { Globals } from "@/layouts/globals";
import { Header } from "@/layouts/header";
import { cn } from "@/utils";

export const metadata: Metadata = {
	title: "Echo Project",
	description: "",
	other: {
		"base:app_id": "69e4c46487970a2e83bef380",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={cn("antialiased", tronicaMono.variable)}>
			<body className="grow flex flex-col min-h-dvh font-tronica-mono">
				<Header />

				<main className="flex grow min-h-0">
					<div className="grow relative">{children}</div>
				</main>

				<Footer />

				{/*  */}
				<Globals />
			</body>
		</html>
	);
}
