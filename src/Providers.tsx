"use client";

import { ReactLenis } from "lenis/react";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
	return <ReactLenis root>{children}</ReactLenis>;
}
