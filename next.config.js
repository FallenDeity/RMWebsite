/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
		serverActionsBodySizeLimit: "10mb",
	},
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
		],
	},
	reactStrictMode: true,
	distDir: "dist",
};

module.exports = nextConfig;
