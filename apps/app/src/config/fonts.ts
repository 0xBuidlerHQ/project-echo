import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

const tronicaMono = localFont({
	src: "../../public/tronicaMono.woff2",
	variable: "--font-tronica-mono",
	display: "swap",
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export { geistMono, geistSans, tronicaMono };
