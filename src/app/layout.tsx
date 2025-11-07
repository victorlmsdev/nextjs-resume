import ThemeSwitch from "@/components/ThemeSwitch";
import type { Metadata } from "next";
import { EB_Garamond, Geist, Geist_Mono } from "next/font/google";
import Particles from "../components/Particles";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
	variable: "--font-eb-garamond",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Victor Lima",
	description: "Engenheiro de Software",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable} antialiased `}
			>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
					<header className=" min-h-10 bg-[#F5F5F5] dark:bg-[#1E1E1E] justify-center items-center flex w-full z-0  py-24 fixed inset-shadow-sm">
						<div className="absolute w-full overflow-hidden md:block">
							<Particles />
						</div>
						<div className="w-2/3 font-serif">
							<div className="flex-col items-start">
								<h1 className="text-6xl font-extrabold ">Victor</h1>
								<h1 className="text-4xl tracking-tight -mt-4">Lima</h1>
								<div className=" flex flex-row w-full gap-2">
									<h1 className="text-xl tracking-tight -mt-2">
										Engenheiro de Software
									</h1>
								</div>
							</div>
						</div>
					</header>
					<main className="pt-64 z-10 relative ">
						<ThemeSwitch />

						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
