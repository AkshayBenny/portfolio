// next-seo.config.ts
const SEO = {
	title: 'My Portfolio',
	description:
		'A portfolio website built with Next.js and optimized for SEO.',
	canonical: 'https://akshaybenny.com',
	openGraph: {
		url: 'https://akshaybenny.com',
		title: 'My Portfolio',
		description:
			'A portfolio website built with Next.js and optimized for SEO.',
		images: [
			{
				url: 'https://akshaybenny.com/images/og-image.jpg',
				width: 800,
				height: 600,
				alt: 'Og Image Alt',
			},
		],
		site_name: 'My Portfolio',
	},
	twitter: {
		handle: '@yourhandle',
		site: '@yourhandle',
		cardType: 'summary_large_image',
	},
}

export default SEO
