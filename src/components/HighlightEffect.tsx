"use client";

import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface HighlightEffectProps {
	children: React.ReactNode;
}

const HighlightEffect: React.FC<HighlightEffectProps> = ({ children }) => {
	const elementRef = useRef<HTMLElement>(null);
	const selectMarkerRef = useRef<HTMLSpanElement>(null);
	const charsRef = useRef<(HTMLSpanElement | null)[]>([]);

	useEffect(() => {
		const element = elementRef.current;
		const selectMarker = selectMarkerRef.current;
		const chars = charsRef.current.filter(
			(char): char is HTMLSpanElement => char !== null
		);

		if (!element || !selectMarker || chars.length === 0) return;

		const animationDefaults = {
			duration: 0.4,
			ease: "power1.inOut",
		};

		const animateChars = () => {
			gsap
				.timeline({ defaults: animationDefaults })
				.fromTo(
					chars,
					{
						willChange: "filter",
						filter: "drop-shadow(0px 0px 0px #6dd7e6)",
					},
					{
						stagger: 0.03,
						filter: "drop-shadow(0px 0px 20px #6dd7e6)",
					}
				)
				.to(
					selectMarker,
					{
						duration: 0.8,
						ease: "expo",
						width: "103%",
					},
					0
				);
		};

		const resetChars = () => {
			gsap.killTweensOf([...chars, selectMarker]);
			gsap.set(selectMarker, { width: "0%" });
			gsap.set(chars, { filter: "drop-shadow(0px 0px 0px #6dd7e6)" });
		};

		ScrollTrigger.create({
			trigger: element,
			start: "top bottom",
			onEnter: animateChars,
			onEnterBack: animateChars,
			onLeave: resetChars,
			onLeaveBack: resetChars,
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<mark
			ref={elementRef}
			className="relative inline-block text-highlight-start hx-13"
		>
			<span
				ref={selectMarkerRef}
				className="hx__select absolute w-0 h-full -left-[1%] top-[10%] bg-[rgba(109,215,230,0.14)] mix-blend-plus-lighter"
			></span>
			{React.Children.map(children, (child, index) => (
				<span
					key={index}
					ref={(el) => {
						charsRef.current[index] = el;
					}}
					className="inline-block animate-shine"
				>
					{child}
				</span>
			))}
		</mark>
	);
};

export default HighlightEffect;
