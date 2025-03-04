import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value:
							"default-src 'self'; " +
							"script-src 'self' 'sha256-OBTN3RiyCV4Bq7dFqZ5a2pAXjnCcCYeTJMO2I/LYKeo=' https://vercel.live; " +
							"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
							"img-src 'self' data:; " +
							"font-src 'self' https://fonts.gstatic.com; " +
							"connect-src 'self'; " +
							"frame-src 'none'; " +
							"object-src 'none'; " +
							"base-uri 'self'; " +
							"form-action 'self';",
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=63072000; includeSubDomains; preload',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
					{
						key: 'Cross-Origin-Opener-Policy',
						value: 'same-origin',
					},
					{
						key: 'Cross-Origin-Embedder-Policy',
						value: 'require-corp',
					},
				],
			},
		]
	},
}

export default nextConfig
