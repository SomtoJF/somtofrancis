"use client";

import Link from "next/link";
import React from "react";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import HighlightEffect from "./HighlightEffect";

export default function Hero() {
	return (
		<section className="w-full h-screen bg-slate-100 p-8 px-8 lg:px-32  pt-24 grid grid-cols-3 grid-rows-6 gap-x-3 font-light rounded-b-2xl text-slate-700">
			<p className="col-start-1 col-end-4 text-5xl lg:text-6xl font-semibold max-w-2xl text-slate-700 w-full h-fit">
				<HighlightEffect>Full-stack</HighlightEffect> Software Engineer on a
				mission to build simple solutions to{" "}
				<HighlightEffect>complex</HighlightEffect> {""}
				real-world problems.
			</p>
			<div className=" row-start-6">
				Fullstack <br /> Software Developer
			</div>
			<div className=" row-start-6">
				Based in <br /> Lagos, Nigeria.
			</div>
			<div className="space-x-2 row-start-6">
				<Link
					href="https://www.linkedin.com/in/somtochukwu-francis-b8a236239"
					target="_blank"
					className="h-fit font-bold after:content-none"
				>
					<BsLinkedin className="w-7 h-7" />
				</Link>
				<Link
					href="https://twitter.com/somtofrancis3"
					target="_blank"
					className="h-fit font-bold after:content-none"
				>
					<BsTwitterX className="w-7 h-7" />
				</Link>
			</div>
		</section>
	);
}
