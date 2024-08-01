import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"highlight-start": "var(--color-highlight-start)",
				"highlight-end": "var(--color-highlight-end)",
			},
			keyframes: {
				shine: {
					from: { filter: "brightness(60%) blur(6px)" },
					to: { filter: "brightness(150%) blur(0px)" },
				},
			},
			animation: {
				shine: "shine 2s linear forwards",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				".burger": {
					"&::before, &::after": {
						content: '""',
						display: "block",
						height: "1px",
						width: "50%",
						backgroundColor: "white",
						position: "absolute",
						left: "25%",
						transition: "transform 0.3s",
					},
					"&::before": {
						top: "calc(50% - 5px)",
					},
					"&::after": {
						bottom: "calc(50% - 5px)",
					},
				},
				".burger-active": {
					"&::before": {
						transform: "translateY(5px) rotate(45deg)",
					},
					"&::after": {
						transform: "translateY(-5px) rotate(-45deg)",
					},
				},
			};
			addUtilities(newUtilities);
		}),
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				".hx__select": {
					"&::before, &::after": {
						content: "''",
						position: "absolute",
						top: "-0.125em",
						left: "-0.075em",
						width: "0.155em",
						height: "calc(100% + 0.1275em)",
						background: "url(../img/select.svg) no-repeat 0 0",
						backgroundSize: "auto 100%",
					},
					"&::after": {
						transform: "scaleY(-1)",
						left: "auto",
						right: "-0.075em",
						top: "auto",
						bottom: "-0.125em",
					},
				},
			};
			addUtilities(newUtilities);
		}),
	],
};

export default config;
