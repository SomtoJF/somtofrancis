"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Curve() {
	const [windowHeight, setWindowHeight] = useState(0);

	useEffect(() => {
		setWindowHeight(window.innerHeight);
	}, []);

	const initialPath = `M100 0 L100 ${windowHeight} Q-100 ${
		windowHeight / 2
	} 100 0`;
	const targetPath = `M100 0 L100 ${windowHeight} Q100 ${
		windowHeight / 2
	} 100 0`;

	const curve = {
		initial: {
			d: initialPath,
		},
		enter: {
			d: targetPath,
			transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			d: initialPath,
			transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
		},
	};

	return (
		<svg className="absolute top-0 left-[-99px] w-[100px] h-full fill-slate-700 stroke-none">
			<motion.path
				variants={curve}
				initial="initial"
				animate="enter"
				exit="exit"
			></motion.path>
		</svg>
	);
}
