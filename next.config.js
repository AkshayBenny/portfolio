const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['images.unsplash.com'],
	},
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
})
