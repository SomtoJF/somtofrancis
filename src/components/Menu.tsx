import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "./MenuLink";
import { menuSlide } from "@/utils/menu-animations";
import Curve from "./Curve";

const navItems = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Projects",
		href: "/projects",
	},
	{
		title: "About",
		href: "/about",
	},
	{
		title: "Contact",
		href: "/contact",
	},
];

export default function Menu() {
	const pathname = usePathname();
	const [selectedIndicator, setSelectedIndicator] = useState(pathname);

	return (
		<motion.div
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			className="fixed top-0 right-0 h-screen bg-slate-700 text-white z-40"
		>
			<Curve />
			<div className="box-border h-full p-24 flex flex-col justify-between">
				<div
					onMouseLeave={() => setSelectedIndicator(pathname)}
					className="flex flex-col text-4xl gap-3 mt-20"
				>
					<div className="text-slate-400 border-b border-gray-600 uppercase text-xs mb-10 pb-5">
						<p>Navigation</p>
					</div>
					{navItems.map((data, index) => (
						<Link
							key={index}
							data={{ ...data, index }}
							isActive={selectedIndicator == data.href}
							setSelectedIndicator={setSelectedIndicator}
						/>
					))}
				</div>
				<div className="flex justify-between text-xs gap-10">
					<a
						href="https://github.com/somtojf"
						target="_blank"
						className="after:bg-white"
					>
						GitHub
					</a>
					<a
						href="https://twitter.com/somtofrancis3"
						target="_blank"
						className="after:bg-white"
					>
						Twitter/X
					</a>

					<a
						href="https://www.linkedin.com/in/somtochukwu-francis-b8a236239"
						target="_blank"
						className="after:bg-white"
					>
						LinkedIn
					</a>
				</div>
			</div>
		</motion.div>
	);
}
