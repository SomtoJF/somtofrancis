"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { opacity } from "@/utils/project-animations";
import { projectsData } from "@/data";
import { IoWarningOutline } from "react-icons/io5";

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
			className="hidden lg:block w-[500px] h-[350px] relative space-y-2 mt-16"
		>
			{!data.image ? (
				<p className="font-bold uppercase text-sm flex gap-2 justify-center items-center text-white bg-slate-700 h-[180px]">
					<IoWarningOutline />
					No image available
				</p>
			) : (
				<Image src={data.image} alt="image" className="object-cover w-full" />
			)}
			<div className="w-full h-full">
				<h4 className="font-bold">{data.title}</h4>
				<p className="mb-2">{data.description}</p>
				<small className="font-semibold">{data.technologies.join(", ")}</small>
			</div>
		</motion.div>
	);
}
