import { ProjectData } from '@/types/project'
import Project from './Project'

export default function Projects() {
	const projects: ProjectData[] = [
		{
			id: 1,
			title: 'Rent80',
			description:
				'This is a car rental platform developed during my time at Lascade. Rent80 has thousands of pre-rendered URLs that improves search engine visibility and provide a better browsing experience. It is fully responsive and optimized for performance, making bookings quick and hassle-free.',
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
			id: 2,
			title: 'Job Seeker',
			description:
				'Job Seeker is a Chrome extension that simplifies job search by allowing users to save job details—such as company name, job title, and job URL—with a single click. Users can create and name spreadsheets within the interface to organize their applications. This extension also has Google authentication, making signing in much more convenient.',
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
			id: 3,
			title: 'Doubtss',
			description:
				"Doubts is an AI-driven chatbot designed to assist aspirants preparing for the Union Public Service Commission (UPSC) examination, one of India's most prestigious and competitive tests. It provides in-depth explanations, answers complex queries, and offers personalized study support, making the learning process more interactive and efficient.",
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
