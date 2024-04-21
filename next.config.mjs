/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.pexels.com",
				port: "",
				pathname: "/photos/**",
			},
			{
				protocol: "https",
				hostname: "randomuser.me",
				port: "",
				pathname: "/api/**",
			},
		],
	},
};

export default nextConfig;
