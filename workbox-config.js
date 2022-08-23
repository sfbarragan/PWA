module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,png,jpg,webp,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};