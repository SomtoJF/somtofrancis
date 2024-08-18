"use client";

import Link from "next/link";
import React from "react";

import HighlightEffect from "./HighlightEffect";
import { Button } from "./ui/button";
import About from "./About";

export default function Hero() {
	return (
		<section className="w-full min-h-[90vh] lg:flex justify-between p-8 px-8 lg:px-32">
			<div className="w-full lg:w-1/2 flex flex-col gap-32 pb-20">
				<p className="text-5xl xl:text-6xl font-semibold max-w-2xl text-slate-700 w-full h-fit overflow-visible">
					&quot;on a mission to build simple solutions to{" "}
					<HighlightEffect>complex</HighlightEffect> {""}
					real-world problems&quot;
				</p>
				<div className="w-full md:w-4/5 lg:w-3/4 border-slate-700 border-[1px] grid grid-cols-2 grid-rows-2 text-sm">
					<p className="col-span-2 w-full border-b-[1px] border-slate-700 p-4">
						We&apos;re not just suppliers - we&apos;re your partner in enhancing
						your green initiatives with renewable, compostable, and affordable
						products.
					</p>
					<div className="p-4 col-span-1 w-full h-full flex justify-center items-center">
						<Button
							variant={"reverse"}
							className="bg-slate-700 text-slate-100 w-full h-full uppercase font-bold text-xs max-h-[70px]"
						>
							<Link
								href={"mailto:somtochukwujf@gmail.com"}
								className="after:bg-white"
							>
								Contact Me{" "}
							</Link>
						</Button>
					</div>
					<div className="p-4 col-span-1 w-full h-full flex justify-center items-center border-l-[1px] border-slate-700">
						<button type="button">See More... </button>
					</div>
				</div>
			</div>
			<div className="w-full lg:w-1/2 px-8 h-full justify-center items-center">
				<About />
			</div>
		</section>
	);
}
