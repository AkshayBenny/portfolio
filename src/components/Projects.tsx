import { ProjectData } from '@/types/project'
import Project from './Project'
export default function Projects() {
	const projects: ProjectData[] = [
		{
			id: 1,
			title: 'Rent80',
			description:
				'Rent80 is a car rental platform designed to be user-friendly and easy to navigate. With thousands of pre-rendered URLs optimized for SEO, the platform improves search engine visibility and provides a better browsing experience. It’s fully responsive and optimized for fast load times, making booking quick and hassle-free for users.',
			slideImages: [
				'/project/rent80/cover.png',
				'/project/rent80/1.png',
				'/project/rent80/2.png',
				'/project/rent80/3.png',
				'/project/rent80/4.png',
				'/project/rent80/5.png',
			],
			stack: ['Next.js', 'Tailwind'],
			viewLiveUrl: 'https://www.rent80.com',
		},
		// {
		// 	id: 2,
		// 	title: 'Local Shopper',
		// 	description:
		// 		'LocalShopper helps local shop owners reach more customers by allowing them to list and sell their products in one place. Instead of browsing multiple stores, users can easily search for what they need, view store details, and even book items directly. The platform connects businesses with their community, making shopping more convenient while giving small retailers a better way to grow.',
		// 	slideImages: [
		// 		'/project/one.png',
		// 		'/project/two.png',
		// 		'/project/three.png',
		// 	],
		// 	stack: ['Next.js', 'Tailwind', 'Spring Boot', 'PostgreSQL', 'AWS'],
		// 	viewCodeUrl:
		// 		'https://github.com/AkshayBenny/local-ecommerce-server',
		// 	// viewLiveUrl: 'https://localshopper.example.com',
		// },
		{
			id: 3,
			title: 'Job Seeker',
			description:
				'This Chrome extension simplifies the job search by allowing users to save job details—such as company name, job title, and job URL—with a single click. Users can create and name spreadsheets within the interface to organize their applications. By integrating Google login for authentication, the extension provides secure and convenient access, enhancing the overall job application process.',
			slideImages: [
				'/project/job-seeker/cover.png',
				'/project/job-seeker/1.png',
				'/project/job-seeker/2.png',
				'/project/job-seeker/3.png',
				'/project/job-seeker/4.png',
				'/project/job-seeker/5.png',
			],
			stack: ['React', 'CSS', 'Google Auth API', 'Google Drive File API'],
			viewCodeUrl:
				'https://github.com/AkshayBenny/jobseeker-ch-extension',
			// viewLiveUrl: 'https://localshopper.example.com',
		},
		{
			id: 4,
			title: 'Doubtss',
			description:
				'Doubts is an intelligent, AI-driven chatbot designed to assist UPSC aspirants with their exam preparation. It provides in-depth explanations, answers complex queries, and offers personalized study support, making learning more interactive and efficient.',
			slideImages: [
				'/project/doubtss/cover.png',
				'/project/doubtss/1.png',
				'/project/doubtss/2.png',
				'/project/doubtss/3.png',
				'/project/doubtss/4.png',
			],
			stack: [
				'Next.js',
				'Prisma',
				'Firebase',
				'Prisma',
				'LangChain',
				'OpenAI API',
			],
			viewCodeUrl: 'https://github.com/AkshayBenny/doubtss-chatbot',
			viewLiveUrl: 'https://doubtss.com',
		},
	]

	return (
		<div className='space-y-[200px]'>
			{projects.map((project) => (
				<Project
					key={project.id}
					data={project}
				/>
			))}
		</div>
	)
}
