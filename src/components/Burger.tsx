"use client";
import { useState } from "react";

export default function Burger() {
	const [isActive, setIsActive] = useState(false);

	return (
		<div
			onClick={() => setIsActive(!isActive)}
			className="fixed right-0 -top-3 m-5 z-10 w-16 h-16 rounded-full bg-button-bg cursor-pointer flex items-center justify-center shadow-lg bg-[#BEB3A4]"
		>
			<div
				className={`w-full h-full relative ${
					isActive ? "burger burger-active" : "burger"
				}`}
			></div>
		</div>
	);
}
