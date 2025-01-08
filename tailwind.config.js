/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#A45B94",
				secondary: "#EDDEEA",
			},
		},
		fontFamily: {
			sans: ["Urbanist"],
		},
		container: {
			center: true,
			screens: {
				sm: "100%",
				md: "768px",
				lg: "1024px",
				xl: "1440px",
			},
			minWidth: "375px",
			maxWidth: "1440px",
			padding: {
				DEFAULT: "16px",
				sm: "16px",
				md: "32px",
				xl: "104px",
			},
		},
	},
	plugins: [],
};
