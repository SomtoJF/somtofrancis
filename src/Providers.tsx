"use client";

import { ReactLenis } from "lenis/react";
import { ThemeProvider } from "next-themes";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ReactLenis root>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
				{children}
			</ThemeProvider>
		</ReactLenis>
	);
}
