"use client";

import Link from "next/link";
import Burger from "./Burger";
import { v4 } from "uuid";
// import ThemeSwitcher from "./ThemeSwitcher";

const links = [
	{ name: "Projects", href: "#projects" },
	{ name: "Info", href: "#info" },
	{ name: "Blog", href: "https://rewrite-blog.vercel.app", target: "_blank" },
];

export default function Navbar() {
	return (
		<>
			<nav className="flex justify-between items-center text-slate-700  font-light z-10 h-16 2xl:h-20 box-border px-8 lg:px-32 w-full max-w-screen-2xl bg-transparent border-b-[1px] border-slate-700">
				<div>
					<Link href={"/"}>&copy; somtochukwu</Link>
				</div>
				<ul className="flex items-center list-none h-full font-bold text-xs gap-5">
					{links.map((link) => {
						return (
							<li
								className="after:bg-white h-full flex justify-center items-center last-of-type:border-none capitalize"
								key={v4()}
							>
								<Link href={link.href} target={link.target}>
									{link.name.toUpperCase()}
								</Link>
							</li>
						);
					})}
					{/* <ThemeSwitcher /> */}
				</ul>
			</nav>
			<Burger />
		</>
	);
}
