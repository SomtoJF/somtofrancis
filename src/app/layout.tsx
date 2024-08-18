import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/Providers";

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
			<body className={`${inter.className} w-screen overflow-hidden`}>
				<Providers>
					<div className="w-screen min-h-screen bg-slate-100 text-slate-700 2xl:bg-slate-100 flex justify-center">
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
