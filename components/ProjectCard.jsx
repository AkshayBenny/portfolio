import { ArrowRightIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import Image from 'next/legacy/image'
import { useState } from 'react'

const ProjectCard = ({
	number,
	image,
	gif,
	title,
	desc,
	tag,
	gitLink,
	liveLink,
	type,
}) => {
	const tags = tag.split(',')

	const underLineVariants = {
		hidden: {
			width: 0,
			opacity: 0,
		},
		hover: {
			width: '75%',
			opacity: 1,
		},
	}

	const [isHovered, setIsHovered] = useState(false)

	function handleMouseEnter() {
		setIsHovered(true)
	}

	function handleMouseLeave() {
		setIsHovered(false)
	}

	return (
		<motion.div
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			transition={{ duration: 0.3 }}
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			}}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={`xl:flex justify-around  gap-12 ${
				number % 2 === 0 && 'flex-row-reverse'
			}`}>
			<div className='relative'>
				<Image
					height={700}
					width={1000}
					src={isHovered && gif ? gif : image}
					alt={title}
					className='rounded-2xl flex basis-full object-cover h-full w-full xl:max-w-[586px] xl:h-[391px] min-h-[300px]'
				/>
				<p className='font-bold text-base px-4 py-1 bg-gray-600 dark:bg-black  dark:text-white text-white bg-opacity-[64%] dark:bg-opacity-[64%]  max-w-fit rounded-full absolute top-[10px] left-[10px] z-100'>
					{type ? type : 'Project'}
				</p>
			</div>
			<div className='flex flex-col justify-between basis-full pt-12 xl:pt-0 '>
				<div className='flex flex-col space-y-[16px] '>
					<div className='relative w-fit'>
						<h1 className='font-semibold text-3xl lg:text-5xl tracking-[-1px] xl:tracking-[-0.5px] '>
							{title}
						</h1>
						<motion.div
							variants={underLineVariants}
							animate={isHovered ? 'hover' : 'initial'}
							className='absolute h-3 w-0 dark:flex hover:w-3/4 transition top-8  bg-violet-500 z-0 xl:top-7 mix-blend-screen  hidden'></motion.div>
					</div>
					<p className='text-base lg:text-[20px] leading-[33px]'>
						{desc}
					</p>
					<div className='flex  xl:flex flex-wrap gap-4'>
						{tags.map((tag, index) => {
							return (
								<p
									key={index}
									className='px-6 py-[10px] bg-black bg-opacity-[8%]  dark:bg-white dark:bg-opacity-[8%]  rounded-[10px] text-sm'>
									{tag}
								</p>
							)
						})}
					</div>
				</div>
				<div className='flex items-center gap-12 font-semibold text-base pt-20 xl:pt-0 '>
					{liveLink && (
						<div className='flex items-center gap-2 cursor-pointer group '>
							<a
								href={liveLink}
								target='_blank'
								rel='noreferrer'>
								Live Demo
							</a>
							<div>
								<ArrowRightIcon className='h-6 text-white xl:text-black group-hover:text-white  dark:text-white group-hover:rotate-[-45deg] group-hover:bg-opacity-[100%] rotate-[-45deg] xl:rotate-[0deg]  transition bg-[#6068DB] xl:bg-opacity-0  rounded-full m-[6px] p-1' />
							</div>
						</div>
					)}
					{gitLink && (
						<a
							href={gitLink}
							target='_blank'
							rel='noreferrer'>
							View code
						</a>
					)}
				</div>
			</div>
		</motion.div>
	)
}

export default ProjectCard
