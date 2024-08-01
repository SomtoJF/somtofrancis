import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center text-white mix-blend-difference font-light z-10 h-[10vh] box-border px-8 lg:px-32 fixed w-full max-w-screen-2xl bg-transparent">
			<div>
				<Link href={"/"}>&copy; somtochukwu</Link>
			</div>
			<ul className="flex justify-between list-none gap-5">
				<li>
					<Link href="#projects">Projects</Link>
				</li>
				<li>
					<Link href="#info">Info</Link>
				</li>
				<li>
					<Link href="https://rewrite-blog.vercel.app" target="_blank">
						Blog
					</Link>
				</li>
			</ul>
		</nav>
	);
}
