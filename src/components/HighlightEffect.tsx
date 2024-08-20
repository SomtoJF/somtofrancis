// components/HighlightEffect.tsx
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
						filter: "drop-shadow(0px 0px 0px #ffdbf5)",
					},
					{
						stagger: 0.03,
						filter: "drop-shadow(0px 0px 20px #ffdbf5)",
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
			gsap.set(chars, {
				filter: "drop-shadow(0px 0px 0px #ffdbf5)",
			});
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
			className="relative inline-block text-slate-700 hx-13 bg-inherit"
		>
			<span ref={selectMarkerRef} className="hx__select"></span>
			{React.Children.map(children, (child, index) => (
				<span
					key={index}
					ref={(el) => {
						charsRef.current[index] = el;
					}}
					className="char"
				>
					{typeof child === "string"
						? child.split(/(\s+)/).map((char, i) => (
								<span key={i} className="char">
									{char === " " ? "\u00A0" : char}
								</span>
						  ))
						: child}
				</span>
			))}
		</mark>
	);
};

export default HighlightEffect;
