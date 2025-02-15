import { NextResponse } from 'next/server'
import { ExperienceData } from '@/types/experience'

const experiences: ExperienceData[] = [
	{
		id: 1,
		position: 'Software Developer',
		company: 'Lascade',
		responsibilities: [
			'Leading the development of a SaaS product by designing and implementing the software architecture.',
			'The project employs a robust tech stack, including a Next.js frontend, Spring Boot backend, and PostgreSQL for database management.',
			'Leveraging AWS services for scalability and reliability.',
		],
	},
	{
		id: 2,
		position: 'Software Developer',
		company: 'Lascade',
		responsibilities: [
			'Leading the development of a SaaS product by designing and implementing the software architecture.',
			'The project employs a robust tech stack, including a Next.js frontend, Spring Boot backend, and PostgreSQL for database management.',
			'Leveraging AWS services for scalability and reliability.',
		],
	},
]

export async function GET() {
	return NextResponse.json(experiences)
}
