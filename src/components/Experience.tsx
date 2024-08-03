import React from "react";
import { experienceData } from "@/data";

export default function Experience() {
	return (
		<section className="bg-black text-white py-40 min-h-screen">
			<ul className="space-y-6">
				{experienceData.map((item) => (
					<li className="px-36">
						<p className="text-6xl font-bold hover:text-orange-800">
							{item.company}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
}
