import type { Metadata } from 'next'
import { Roboto, Roboto_Mono } from 'next/font/google'
import './globals.css'
import ClientProviders from '@/components/providers/ClientProvider'
import Script from 'next/script'

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
	weight: '900',
})

const robotoMono = Roboto_Mono({
	variable: '--font-roboto-mono',
	subsets: ['latin'],
	weight: ['400', '500', '700'],
})

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Akshay Benny',
	url: 'https://www.akshaybenny.com',
	jobTitle: 'Software Developer',
	image: 'https://www.akshaybenny.com/profile.jpg',
	sameAs: [
		'https://www.linkedin.com/in/akshaybenny',
		'https://github.com/akshaybenny',
	],
}

export const metadata: Metadata = {
	title: 'Akshay Benny | Software Developer',
	icons: 'favicon.svg',
	description:
		"I'm Akshay Benny, a software developer who loves building fast, user-friendly, and scalable mobile and web apps. I specialize in Next.js, React, ExpressJs, SEO, and performance optimization.",
	keywords: [
		'software developer',
		'full stack developer',
		'developer portfolio',
		'Next.js',
		'React',
		'ExpressJs',
		'Spring Boot',
		'SEO',
		'Tailwind',
	],
	robots: 'index, follow',
	openGraph: {
		title: 'Akshay Benny | Software Developer',
		description:
			"I'm Akshay Benny, a software developer who creates digital experiences that are both functional and engaging.",
		url: 'https://www.akshaybenny.com',
		images: [
			{
				url: 'https://www.akshaybenny.com/opengraph.png',
				width: 800,
				height: 600,
			},
		],
	},
	alternates: {
		canonical: 'https://www.akshaybenny.com',
	},
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<head>
				<Script
					id='json-ld'
					type='application/ld+json'
					strategy='beforeInteractive'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body
				className={`${roboto.variable} ${robotoMono.variable} antialiased text-lightText selection:bg-lightText selection:text-[#0A0A0A]`}>
				<ClientProviders>{children}</ClientProviders>
			</body>
		</html>
	)
}


// WebSite & SearchAction: Enhance your site's usability by providing a WebSite schema with a SearchAction, helping users to search within your site. (How do I do this?)


// Accuracy & Consistency: Ensure the data in your JSON‑LD matches the visible content on your pages. (I will give you all the visible content on the page as text)

// Use Google's Tools: Validate your structured data with the Rich Results Test and Schema Markup Validator.(how do I do this?)

// THis is my website text
