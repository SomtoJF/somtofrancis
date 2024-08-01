import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactLenis } from "lenis/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Somtochukwu Francis",
	description: "Personal website of Somtochukwu Jeremy Francis.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ReactLenis root>
					<div className="w-screen min-h-screen bg-black flex justify-center">
						{children}
					</div>
				</ReactLenis>
			</body>
		</html>
	);
}
