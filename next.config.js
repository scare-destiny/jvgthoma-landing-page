/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['perspective.imgix.net', 'images.unsplash.com'],
	},
}

module.exports = nextConfig
