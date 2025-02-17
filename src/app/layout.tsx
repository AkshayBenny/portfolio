import type { Metadata } from 'next'
import { Roboto, Roboto_Mono } from 'next/font/google'
import './globals.css'
import ClientProviders from '@/components/providers/ClientProvider'

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

export const metadata: Metadata = {
	title: 'Akshay Benny | Software Developer',
	description:
		"I'm Akshay Benny, a passionate software developer who loves building fast, user-friendly, and scalable mobile and web apps. I specialize in Next.js, React, ExpressJs, SEO, and performance optimization.",
	openGraph: {
		title: 'Akshay Benny | Software Developer',
		description:
			"I'm Akshay Benny, a passionate software developer who creates digital experiences that are both functional and engaging.",
		url: 'https://www.akshaybenny.com',
		images: [
			{
				url: 'https://www.akshaybenny.com/akshay-2.jpg',
				width: 800,
				height: 600,
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body
				className={`${roboto.variable} ${robotoMono.variable} antialiased text-lightText`}>
				<ClientProviders>{children}</ClientProviders>
			</body>
		</html>
	)
}
