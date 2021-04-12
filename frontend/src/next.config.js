module.exports = {
    async rewrites() {
		return [
			{
				source: '/index',
				destination: '/'
			},
			{
				source: '/zakonodaja',
				destination: '/obcina/Zakonodaja'
			}
		];
	},
    future: {
        webpack5: true,
    },
}
