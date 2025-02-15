import { NextResponse } from 'next/server'

const projects = [
	{
		id: 1,
		title: 'Local Shopper',
		description:
			'An e-commerce platform that enables local businesses to sell their products online, making it easier for customers to discover and purchase from nearby stores. Designed for seamless transactions and an intuitive shopping experience.',
		slideImages: [
			'/project/one.png',
			'/project/two.png',
			'/project/three.png',
		],
		stack: ['Spring Boot', 'React Native', 'Tailwind', 'Next'],
		viewCodeUrl: 'https://github.com/username/local-shopper',
		viewLiveUrl: 'https://localshopper.example.com',
	},
	{
		id: 2,
		title: 'Local Shopper',
		description:
			'An e-commerce platform that enables local businesses to sell their products online, making it easier for customers to discover and purchase from nearby stores. Designed for seamless transactions and an intuitive shopping experience.',
		slideImages: [
			'/project/one.png',
			'/project/two.png',
			'/project/three.png',
		],
		stack: ['Spring Boot', 'React Native', 'Tailwind', 'Next'],
		viewCodeUrl: 'https://github.com/username/local-shopper',
		viewLiveUrl: 'https://localshopper.example.com',
	},
	{
		id: 3,
		title: 'Local Shopper',
		description:
			'An e-commerce platform that enables local businesses to sell their products online, making it easier for customers to discover and purchase from nearby stores. Designed for seamless transactions and an intuitive shopping experience.',
		slideImages: [
			'/project/one.png',
			'/project/two.png',
			'/project/three.png',
		],
		stack: ['Spring Boot', 'React Native', 'Tailwind', 'Next'],
		viewCodeUrl: 'https://github.com/username/local-shopper',
		viewLiveUrl: 'https://localshopper.example.com',
	},
]

export async function GET(_request: Request) {
	return NextResponse.json(projects)
}
