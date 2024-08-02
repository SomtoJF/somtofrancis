"use client";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Menu from "./Menu";

export default function Burger() {
	const [isActive, setIsActive] = useState(false);

	return (
		<>
			<div
				onClick={() => setIsActive(!isActive)}
				className="fixed right-5 2xl:right-64 xl:top-0 -top-2 m-5 w-16 h-16 rounded-full bg-button-bg cursor-pointer flex items-center justify-center shadow-lg bg-slate-700 border-slate-300 z-50 border-[1px] border-solid"
			>
				<div
					className={`w-full h-full relative ${
						isActive ? "burger burger-active" : "burger"
					}`}
				></div>
			</div>
			<AnimatePresence mode="wait">{isActive && <Menu />}</AnimatePresence>
		</>
	);
}
