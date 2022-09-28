/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {},
		extend: {
			colors: {
				textColor: '#343435',
				linkColor: '#2542aa',
			},
		},
		plugins: [],
	},
}
