/** @type {import('next').NextConfig} */
const nextConfig = {
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
