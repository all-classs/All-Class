/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
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
	webpack: (config, { isServer }) => {
		config.module.rules.push({
			test: /\.(mp4|webm|ogg|swf|ogv)$/,
			use: {
				loader: 'file-loader',
				options: {
					publicPath: `/_next/static/videos/`,
					outputPath: `${isServer ? '../' : ''}static/videos/`,
					name: '[name].[hash].[ext]',
				},
			},
		});

		return config;
	},
};

export default nextConfig;
