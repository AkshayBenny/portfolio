import { ProjectData } from '@/types/project'
import Project from './Project'

export default function Projects() {
	const projects: ProjectData[] = [
		{
			id: 0,
			title: 'Beeroam',
			description:
				'An AI travel planner that helps users create and customize trips with smart suggestions and collaborative planning. The Pro version adds automated itineraries, route optimization, and other advanced travel tools to make planning effortless.',
			slideImages: [
				'/project/beeroam/cover.png',
				'/project/beeroam/1.png',
				'/project/beeroam/2.png',
				'/project/beeroam/3.png',
				'/project/beeroam/4.png',
			],
			stack: [
				'Next.js',
				'Tailwind',
				'Zustand',
				'Drizzle ORM',
				'NeonDB',
				'Sanity CMS',
				'Stripe',
				'Google API',
			],
			viewLiveUrl: 'https://beeroam.app',
		},
		{
			id: 1,
			title: 'Rent80',
			description:
				'A car rental platform developed at Lascade that delivers a fast, SEO-optimized browsing experience with thousands of pre-rendered pages. Designed to be fully responsive and efficient for seamless online bookings.',
			slideImages: [
				'/project/rent80/cover.webp',
				'/project/rent80/1.webp',
				'/project/rent80/2.webp',
				'/project/rent80/3.webp',
				'/project/rent80/4.webp',
				'/project/rent80/5.webp',
			],
			stack: ['Next.js', 'Tailwind'],
			viewLiveUrl: 'https://www.rent80.com',
		},

		{
			id: 3,
			title: 'Job Seeker',
			description:
				'A Chrome extension that lets users save and organize job listings in a single click. Integrated with Google services for sign-in and automated spreadsheet management.',
			slideImages: [
				'/project/job-seeker/cover.webp',
				'/project/job-seeker/1.webp',
				'/project/job-seeker/2.webp',
				'/project/job-seeker/3.webp',
				'/project/job-seeker/4.webp',
				'/project/job-seeker/5.webp',
			],
			stack: ['React', 'CSS', 'Google Auth API', 'Google Drive File API'],
			viewLiveUrl:
				'https://chromewebstore.google.com/detail/mkmlabhmaeaknoichmpkoonbdkmkpbld?utm_source=item-share-cp',
		},
		{
			id: 4,
			title: 'Doubtss',
			description:
				'An AI-powered chatbot that helps UPSC aspirants learn more effectively through interactive explanations and tailored study support. Combines conversational AI with real-time data and personalized insights.',
			slideImages: [
				'/project/doubtss/cover.webp',
				'/project/doubtss/1.webp',
				'/project/doubtss/2.webp',
				'/project/doubtss/3.webp',
				'/project/doubtss/4.webp',
			],
			stack: ['Next.js', 'Prisma', 'Firebase', 'LangChain', 'OpenAI API'],
			viewCodeUrl: 'https://github.com/AkshayBenny/doubtss-chatbot',
			viewLiveUrl: 'https://doubtss.com',
		},
	]

	return (
		<div className='space-y-[200px] cards'>
			{projects.map((project) => (
				<Project
					key={project.id}
					data={project}
				/>
			))}
		</div>
	)
}
