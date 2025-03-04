import { ProjectData } from '@/types/project'
import Button from './Button'
import EmblaCarousel from './EmblaCarousel'

export default function Project({ data }: { data: ProjectData }) {
	const { slideImages, title, description, stack, viewCodeUrl, viewLiveUrl } =
		data

	return (
		<>
			<EmblaCarousel slides={slideImages} />
			<div className='max-w-5xl mx-auto pt-8 md:pt-[60px]'>
				<h2 className='font-roboto-extrabold'>{title}</h2>
				<div className='flex  justify-between mt-5 pt-10 border-t border-[#F5F5F5] border-opacity-10'>
					<div className='max-w-3xl'>
						<h4 className='font-robotoMono-bold pb-4'>
							Project Description
						</h4>
						<p>{description}</p>
						<div className='md:hidden block pt-10'>
							<h4 className='font-robotoMono-bold'>Stack</h4>
							<div className='pt-4 '>
								{stack.map((tech: string) => {
									return <p key={tech}>{tech}</p>
								})}
							</div>
						</div>
						<div className='font-robotoMono-medium flex gap-6 pt-8'>
							{viewCodeUrl && (
								<a
									href={viewCodeUrl}
									target='_blank'
									className='w-full md:w-fit'>
									<Button
										text='View Code'
										type='light'
									/>
								</a>
							)}
							{viewLiveUrl && (
								<a
									href={viewLiveUrl}
									target='_blank'
									className='w-full md:w-fit'>
									<Button
										text='View Live'
										type='dark'
									/>
								</a>
							)}
						</div>
					</div>
					<div className='hidden md:block'>
						<h4 className='font-robotoMono-bold'>Stack</h4>
						<div className='pt-4'>
							{stack.map((tech: string) => (
								<p key={tech}>{tech}</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
