import { AnimatedText } from '@/app/animations/AnimateText'
import FadeInWrapper from '@/app/animations/FadeInWrapper'
import { ExperienceData, Work } from '@/types/experience'
import Image from 'next/image'

export default function Experiences() {
	const experiences: ExperienceData[] = [
		{
			id: 0,
			position: 'Software Developer',
			link: 'https://www.kewordal.com',
			company: 'Kewordal',
			homepage: 'https://www.kewordal.com',
			// period: 'Mar 2025 – Present',
			responsibilities: [
				'Developed and maintained responsive front-end pages using React and SCSS.',
				'Maintained and optimized a Spring Boot backend, ensuring reliable data flow and performance.',
				'Implemented a CI/CD pipeline for the Spring Boot service and deployed applications to AWS.',
				'Integrated analytics to monitor user engagement and site performance.',
				'Led the development and improvement of the site’s admin panel, managing a small team of developers and designers.',
			],
			work: [
				{
					src: '/experience/kewordal/1.png',
					href: 'https://www.kewordal.com',
				},
			],
		},
		{
			id: 1,
			position: 'Software Developer',
			link: 'https://www.lascade.com',
			company: 'Lascade',
			homepage: 'https://www.lascade.com',
			responsibilities: [
				'Optimized site performance for their major web-application by reducing page load times by 19%.',
				'Improved SEO that expanded user reach by 14% while enhancing keyword rankings and organic traffic.',
				'Created and maintained scalable front-end applications using Next.js.',
				'Developed and maintained an Express.js backend that managed large-scale data flow.',
				'Collaborated in an agile team.',
			],
			work: [
				{
					src: '/experience/lascade/2.webp',
					href: 'https://www.rent80.com',
				},
				{
					src: '/experience/lascade/1.webp',
					href: 'https://www.flights70.com',
				},
				{
					src: '/experience/lascade/3.webp',
					href: 'https://www.hotels70.com',
				},
			],
		},

		{
			id: 2,
			position: 'Android Developer',
			company: 'GrapeVine Ventures',
			responsibilities: [
				'Contributed to a React Native social media app with real-time messaging, user authentication, and social feeds for both iOS and Android.',
				'Enhanced project structure, improving team collaboration and workflow efficiency.',
			],
		},
		{
			id: 4,
			position: 'Full-stack Developer',
			company: 'Edureka',
			link: 'https://www.edureka.co/',
			responsibilities: [
				'Built a scalable e-commerce web application using the MERN stack.',
				'Developed an admin panel that simplified monitoring and administrative workflows.',
			],
		},
	]

	return (
		<div className='w-full md:mt-80'>
			<FadeInWrapper>
				<h4 className='font-roboto-extrabold'>My Experience</h4>
			</FadeInWrapper>
			<div className='border-t border-[#F5F5F5] border-opacity-10 mt-5 pt-4 md:pt-10'>
				{/* Desktop Layout: Table */}
				<div className='hidden md:block'>
					<table className='w-full table-auto border-separate border-spacing-y-10'>
						<tbody className='align-top'>
							{experiences.map((exp) => (
								<FadeInWrapper
									key={exp.id}
									as='tr'>
									<td className='w-1/3 font-robotoMono-bold text-lg p-3 text-lightText align-top'>
										{exp.link ? (
											<AnimatedText
												href={exp.link}
												text={`${exp.position}, ${exp.company}`}
												type='dark'
											/>
										) : (
											<span>
												{exp.position}, {exp.company}
											</span>
										)}
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
																	unoptimized={
																		true
																	}
																	quality={
																		100
																	}
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
																	unoptimized={
																		true
																	}
																	priority
																	quality={
																		100
																	}
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
								</FadeInWrapper>
							))}
						</tbody>
					</table>
				</div>

				{/* Mobile Layout: Stacked */}
				<div className='block md:hidden space-y-16 pt-8'>
					{experiences.map((exp) => (
						<FadeInWrapper key={exp.id}>
							<div className='mb-10'>
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
						</FadeInWrapper>
					))}
				</div>
			</div>
		</div>
	)
}
