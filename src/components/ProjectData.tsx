"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { opacity } from "@/utils/project-animations";
import { projectsData } from "@/data";

type ArrayElement<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

interface IndexProps {
	data: ArrayElement<typeof projectsData>;
	selectedLink: {
		isActive: boolean;
	};
}

export default function ProjectData({ data, selectedLink }: IndexProps) {
	return (
		<motion.div
			variants={opacity}
			initial="initial"
			animate={selectedLink.isActive ? "open" : "closed"}
			className="hidden lg:block w-[500px] h-[350px] relative space-y-2"
		>
			<Image src={data.image} alt="image" className="object-cover w-full" />
			<div className="w-full h-full">
				<h4 className="font-bold">{data.title}</h4>
				<p className="mb-2">{data.description}</p>
				<small className="font-semibold">{data.technologies.join(", ")}</small>
			</div>
		</motion.div>
	);
}
