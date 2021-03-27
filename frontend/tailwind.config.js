module.exports = {
	purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		container: {
			center: true
		},
		colors: {
			dark: '#303030',
			'dark-segment': '#272727',
			'dark-text': '#ccc'
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
