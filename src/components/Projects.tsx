'use client'

import { ProjectData } from '@/types/project'
import Project from './Project'
import { baseUrl } from '@/utils/baseUrl'
import { useEffect, useState } from 'react'

export default function Projects() {
	const [projects, setProjects] = useState<ProjectData[] | []>([])

	useEffect(() => {
		const fetchProjects = async () => {
			const res = await fetch(`${baseUrl}/api/projects`, {
				next: { revalidate: 60 },
			})
			const projects: ProjectData[] = await res.json()
			setProjects(projects)
		}

		fetchProjects()
	}, [])

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
