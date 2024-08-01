export default function Navbar() {
	return (
		<nav className="flex justify-between items-center text-white mix-blend-difference font-light z-10 h-[10vh] box-border px-8 fixed w-full max-w-screen-2xl bg-transparent">
			<div>
				Francis Somtochukwu <span className="hidden sm:inline">Jeremy</span>
			</div>
			<ul className="flex justify-between list-none gap-5">
				<li>
					<a href="#projects" className="hover:underline">
						Projects
					</a>
				</li>
				<li>
					<a href="#info" className="hover:underline">
						Info
					</a>
				</li>
				<li>
					<a
						href="https://rewrite-blog.vercel.app"
						target="_blank"
						className="hover:underline"
					>
						Blog
					</a>
				</li>
			</ul>
		</nav>
	);
}
