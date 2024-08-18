"use client";
import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Menu from "./Menu";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Burger() {
	const [isActive, setIsActive] = useState(false);
	const burgerRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		gsap.to(burgerRef.current, {
			opacity: 1,
			display: "flex",
			duration: 1000,
			ease: "none",
			scrollTrigger: {
				trigger: burgerRef.current,
				start: "top top",
				end: "top -20%",
				scrub: true,
			},
		});
	});

	return (
		<>
			<div
				ref={burgerRef}
				onClick={() => setIsActive(!isActive)}
				className="fixed right-5 2xl:right-64 xl:top-0 -top-2 m-5 w-16 h-16 rounded-full bg-button-bg cursor-pointer hidden items-center justify-center shadow-lg bg-slate-700 border-slate-300 z-50 border-[1px] border-solid opacity-0"
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
