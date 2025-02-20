export interface ExperienceData {
	id: number
	position: string
	homepage?: string
	company: string
	responsibilities: string[]
	work?: Work[]
}

export interface Work {
	src: string
	href: string
}
