/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
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
