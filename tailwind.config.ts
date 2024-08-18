import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			colors: {
				main: "#88aaee",
				mainAccent: "#4d80e6", // not needed for shadcn components
				overlay: "rgba(0,0,0,0.8)", // background color overlay for alert dialogs, modals, etc.

				// light mode
				bg: "#dfe5f2",
				text: "#000",
				border: "#000",

				// dark mode
				darkBg: "#272933",
				darkText: "#eeefe9",
				darkBorder: "#000",
				secondaryBlack: "#1b1b1b", // opposite of plain white, not used pitch black because borders and box-shadows are that color
			},
			borderRadius: {
				base: "0px",
			},
			boxShadow: {
				light: "3px 3px 0px 0px #000",
				dark: "3px 3px 0px 0px #000",
			},
			translate: {
				boxShadowX: "3px",
				boxShadowY: "3px",
				reverseBoxShadowX: "-3px",
				reverseBoxShadowY: "-3px",
			},
			fontWeight: {
				base: "500",
				heading: "700",
			},
			transitionDuration: {
				"250": "250ms",
			},
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
