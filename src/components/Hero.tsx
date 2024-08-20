"use client";

import React from "react";
import About from "./About";
import myimage from "../assets/me.jpeg";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="w-full min-h-[90vh] flex flex-col-reverse lg:flex-row justify-between p-8 px-8 lg:px-32">
			<div className="w-full md:w-1/2 flex flex-col gap-32 pb-20 mt-16 lg:mt-0">
				<Image
					src={myimage.src}
					width={500}
					height={500}
					alt="my image"
					className="w-full"
				/>
				{/* <p className="text-3xl text-center md:text-left md:text-5xl xl:text-6xl font-semibold max-w-2xl text-slate-700 w-full h-fit overflow-visible">
					&quot;on a mission to build simple solutions to{" "}
					<HighlightEffect>complex</HighlightEffect> {""}
					real-world problems&quot;
				</p>
				<div className="w-[330px] border-slate-700 border-[1px] grid grid-cols-2 grid-rows-2 text-xs ">
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
				</div> */}
			</div>
			<div className="w-full lg:w-1/2 lg:px-8 h-full justify-center items-center">
				<About />
			</div>
		</section>
	);
}
