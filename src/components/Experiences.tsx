import { ExperienceData } from '@/types/experience'
import { baseUrl } from '@/utils/baseUrl'
import React from 'react'
import Button from './Button'

export default async function Experiences() {
	const res = await fetch(`${baseUrl}/api/experiences`, {
		next: { revalidate: 60 },
	})
	const experiences: ExperienceData[] = await res.json()

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
										text='View Live'
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
