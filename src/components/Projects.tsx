import { ProjectData } from '@/types/project'
import Project from './Project'
import { baseUrl } from '@/utils/baseUrl'

export default async function Projects() {
	const res = await fetch(`${baseUrl}/api/projects`, {
		next: { revalidate: 60 },
	})
	const projects: ProjectData[] = await res.json()

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
