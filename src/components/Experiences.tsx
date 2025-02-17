import { ExperienceData } from '@/types/experience'
import Button from './Button'

export default function Experiences() {
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

	return (
		<div className='w-full mt-80'>
			<h4 className='font-roboto-extrabold pb-4'>My Experience</h4>
			<div className='border-t border-[#F5F5F5] border-opacity-10 mt-5 pt-10'>
				<table className='w-full table-auto border-collapse'>
					<thead>
						<tr></tr>
					</thead>
					<tbody className='align-top'>
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
									<Button
										text='View Works'
										type='dark'
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}


