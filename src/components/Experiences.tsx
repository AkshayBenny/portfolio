import { ExperienceData, Work } from '@/types/experience'
import Image from 'next/image'

export default function Experiences() {
	const experiences: ExperienceData[] = [
		{
			id: 1,
			position: 'Software Developer',
			company: 'Lascade',
			homepage: 'https://www.lascade.com',
			responsibilities: [
				'Developed and optimized multiple web applications, ensuring high performance and accessibility.',
				'Worked with a small developer team and an SEO expert to maximize search engine visibility and engagement.',
				'Managed server-side logic using Express.js, handling large-scale data flow efficiently.',
				'Collaborated with designers and backend teams to create seamless user experiences.',
				'Applied agile Scrum methodology to streamline development cycles and enhance productivity.',
			],
			work: [
				{
					src: '/experience/lascade/2.png',
					href: 'https://www.rent80.com',
				},
				{
					src: '/experience/lascade/1.png',
					href: 'https://www.flights70.com',
				},
				{
					src: '/experience/lascade/3.png',
					href: 'https://www.hotels70.com',
				},
			],
		},
		{
			id: 3,
			position: 'Software Developer',
			company: 'Rotafox',
			responsibilities: [
				'Leading the development of a SaaS web application and native iOS & Android applications to manage shift rotas for healthcare employees.',
				'Building and maintaining a scalable backend using Spring Boot to handle real-time scheduling and workforce management.',
				'Implementing secure authentication and user management features to ensure data integrity and privacy.',
				'Collaborating with a diverse team of developers, designers, and stakeholders to meet business and industry requirements.',
				'Optimizing application performance and usability for a seamless user experience across multiple platforms.',
			],
			work: [
				{
					src: '/experience/rotafox/1.png',
					href: '',
				},
			],
		},
		{
			id: 2,
			position: 'Android Developer',
			company: 'GrapeVine Ventures',
			responsibilities: [
				'Developed a React Native social media app featuring real-time messaging, authentication, and social feeds for both iOS and Android.',
				'Enhanced project structure, improving team collaboration and workflow efficiency.',
				'Worked closely with cross-functional teams to align features with business objectives.',
			],
		},
	]

	return (
		<div className='w-full md:mt-80'>
			<h4 className='font-roboto-extrabold'>My Experience</h4>
			<div className='border-t border-[#F5F5F5] border-opacity-10 mt-5 pt-4 md:pt-10'>
				{/* Desktop Layout: Table */}
				<div className='hidden md:block'>
					<table className='w-full table-auto border-separate border-spacing-x-0 border-spacing-y-10'>
						<tbody className='align-top space-y-[40px]'>
							{experiences.map((exp) => (
								<tr key={exp.id}>
									<td className='w-1/3 font-robotoMono-bold text-lg p-3 text-lightText align-top'>
										{exp.position}, {exp.company}
									</td>
									<td className='w-2/3 p-3 align-top'>
										<ul className='list-disc list-inside space-y-2 text-lightText mb-10'>
											{exp.responsibilities.map(
												(item, index) => (
													<li key={index}>{item}</li>
												)
											)}
										</ul>
										<div className='flex flex-wrap gap-6'>
											{exp.work &&
												exp.work.map((w: Work, idx) => {
													if (w.href === '') {
														return (
															<button
																key={`disabled-${idx}`}
																disabled
																className='cursor-not-allowed'>
																<Image
																	src={w.src}
																	width={100}
																	height={100}
																	alt='Thumbnail of disabled link'
																/>
															</button>
														)
													} else {
														return (
															<a
																key={w.href}
																href={w.href}
																target='_blank'
																rel='noopener noreferrer'>
																<Image
																	src={w.src}
																	width={100}
																	height={100}
																	alt={`Thumbnail of ${w.href}`}
																/>
															</a>
														)
													}
												})}
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Mobile Layout: Stacked */}
				<div className='block md:hidden space-y-16 pt-8'>
					{experiences.map((exp) => (
						<div
							key={exp.id}
							className='mb-10'>
							<h3 className='font-robotoMono-bold pb-4'>
								{exp.position}, {exp.company}
							</h3>
							<ul className='list-disc list-inside space-y-4 text-lightText mb-10'>
								{exp.responsibilities.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
							<div className='flex flex-wrap gap-6'>
								{exp.work &&
									exp.work.map((w: Work, idx) => {
										if (w.href === '') {
											return (
												<button
													key={`disabled-${idx}`}
													disabled
													className='cursor-not-allowed'>
													<Image
														src={w.src}
														width={100}
														height={100}
														alt='Thumbnail of disabled link'
													/>
												</button>
											)
										} else {
											return (
												<a
													key={w.href}
													href={w.href}
													target='_blank'
													rel='noopener noreferrer'>
													<Image
														src={w.src}
														width={100}
														height={100}
														alt={`Thumbnail of ${w.href}`}
													/>
												</a>
											)
										}
									})}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
