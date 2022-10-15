/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	images: {
		domains: [
			'perspective.imgix.net',
			'images.unsplash.com',
			'www.pvknowhow.com',
		],
	},
}

module.exports = nextConfig

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
// 	enabled: process.env.ANALYZE === 'true',
// })
// module.exports = withBundleAnalyzer({})
