/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'via.placeholder.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'cdn.aitimes.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				port: '',
				pathname: '/**',
			},
		],
	},
	webpack: (config, options) => {
		config.cache = false;
		return config;
	},
};

export default nextConfig;
