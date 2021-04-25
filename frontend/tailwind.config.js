module.exports = {
	purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				dark: {
					extra: '#574f4a',
					segment: '#272727',
					DEFAULT: '#303030',
					text: '#cccccc'
				}
			}
		},
		container: {
			center: true
		},
		fontFamily: {
			ubuntu: ['Ubuntu']
		}
	},
	variants: {
		extend: {},
		scrollbar: ['dark', 'rounded']
	},
	plugins: [require('tailwind-scrollbar')]
};
