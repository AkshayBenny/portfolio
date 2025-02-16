import { NextResponse } from 'next/server'
import { ExperienceData } from '@/types/experience'

const experiences: ExperienceData[] = [
	{
		id: 1,
		position: 'Software Developer',
		company: 'Lascade',
		responsibilities: [
			'Engineered robust web applications, focusing on performance optimization and user accessibility.',
			'Collaborated with designers and backend teams to create seamless user experiences.',
			'Applied SEO best practices to increase web traffic and engagement.',
		],
	},
	{
		id: 2,
		position: 'Android Developer',
		company: 'GrapeVine Ventures',
		responsibilities: [
			'Developed a React Native social media app with real-time messaging, authentication, and social feeds for iOS & Android.',
			'Enhanced project structure, improving team collaboration and workflow efficiency.',
			'Worked closely with cross-functional teams to align features with business objectives.',
		],
	},
]

export async function GET() {
	return NextResponse.json(experiences)
}
