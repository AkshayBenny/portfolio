// next-seo.config.ts
import type { DefaultSeoProps } from 'next-seo'

const defaultSEOConfig: DefaultSeoProps = {
	title: 'Your Site Title',
	description: 'A brief description of your site for SEO purposes.',
	canonical: 'https://www.yoursite.com',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://www.yoursite.com',
		site_name: 'Your Site Name',
		images: [
			{
				url: 'https://www.yoursite.com/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Og Image Alt',
			},
		],
	},
}

export default defaultSEOConfig
