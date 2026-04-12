import "./globals.css";

import type { Metadata } from "next";
import { geistMono, geistSans, tronicaMono } from "@/config/fonts";
import { Footer } from "@/footer";
import { Header } from "@/header";

export const metadata: Metadata = {
	title: "Echo Project",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} ${tronicaMono.variable} antialiased tracking-tighter`}
		>
			<body className="grow flex flex-col min-h-dvh font-tronica-mono">
				<Header />
				<main className="flex grow min-h-0">
					<div className="grow">{children}</div>
				</main>
				<Footer />
			</body>
		</html>
	);
}
