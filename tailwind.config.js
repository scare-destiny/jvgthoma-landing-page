/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			colors: {
				textColor: '#343435',
				sectionTitleColor: '#3b5998',
				linkColor: '#2542aa',
				buttonColor: '#F5F5F5',
				buttonBgColor: '#2542aa',
				buttonBgColorDark: 'hsl(226.9, 64.3%, 36.5%)',
			},
		},
		plugins: [],
	},
}
