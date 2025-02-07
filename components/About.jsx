import { motion } from 'framer-motion'
import { posthog } from 'posthog-js'
import { useState, useEffect } from 'react'
import Header from './Header'
import Image from 'next/image'

const About = () => {
	const skills = [
		'React',
		'Next.js',
		'Spring Boot',
		'Tailwind CSS',
		'Node.js',
		'Express',
		'Prisma',
		'Mongoose',
		'Flask',
		'Docker',
		'CI/CD',
	]
	const [xCoord, setXCoord] = useState([])
	const [yCoord, setYCoord] = useState([])
	useEffect(() => {
		const ARRAY_LENGTH = 50
		const randomArrayX = []
		const randomArrayY = []

		for (let i = 0; i < ARRAY_LENGTH; i++) {
			randomArrayX.push(Math.random() * 1000)
		}
		for (let i = 0; i < ARRAY_LENGTH; i++) {
			let y = Math.random() * 1000
			if (y < 200) {
				randomArrayY.push(Math.random() * 1000)
			}
		}
		setXCoord(randomArrayX)
		setYCoord(randomArrayY)
	}, [])

	const animationVariants = {
		animate: {
			x: xCoord,
			y: yCoord,
			transition: {
				duration: 500,
				yoyo: Infinity,
			},
		},
	}
	return (
		<div>
			<Header />

			<motion.section
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				transition={{ duration: 0.3 }}
				variants={{
					visible: { opacity: 1 },
					hidden: { opacity: 0 },
				}}
				id='about'
				className='relative min-h-[100vh]      px-6 lg:px-16 max-w-[1400px] mx-auto '>
				{/* Project blob animation */}
				{/* <motion.div
		variants={animationVariants}
		animate='animate'
		className='absolute top-[0px] -left-4 w-[700px] h-[700px] rounded-full bg-[#877eff] filter blur-[300px] z-0 hidden lg:grid'></motion.div>
	<div className='grid lg:hidden absolute top-[200px] -left-[600px] w-[700px] h-[700px] rounded-full bg-[#6a60f5] filter blur-[300px] z-0 '></div> */}
				<h1 className='text-center font-semibold text-[32px] lg:text-[40px] pb-12 lg:pb-[72px] tracking-[-1px]'>
					About me
				</h1>
				<div className='lg:grid grid-cols-2 gap-[48px]'>
					<Image
						src='/my_pic.jpg'
						height={100}
						width={100}
						layout='responsive'
						alt='A picture of Akshay'
						objectFit='cover'
						className='rounded-[16px] w-full h-full'
					/>
					<div className='mt-12 lg:mt-0 flex flex-col items-start justify-center'>
						<div className='flex flex-col justify-between'>
							<div className='flex flex-col items-center justify-center'>
								<h2 className='text-start w-full text-[32px] font-semibold'>
									Hello world!
								</h2>
								<p className='text-base text-start opacity-[84%] leading-[36px] tracking-wide '>
									I am a results-oriented full-stack developer
									that is passionate about creating products
									that are user-centric, scalable, and
									efficient. I have a solid foundation in
									software development and specialise in using
									streamlined architecture and peak
									performance to create flawless digital
									experiences. I work best in group settings
									where I can constantly learn new things and
									adjust to new difficulties.
								</p>
							</div>
							<div className='flex flex-col items-start justify-center'>
								<h2 className='text-2xl font-medium pt-12 pb-6'>
									Skills
								</h2>
								<div className='flex flex-wrap gap-3 lg:gap-4 lg:max-w-[750px] items-start justify-start'>
									{skills.map((skill, index) => {
										return (
											<p
												key={index}
												className='px-6 py-[10px] bg-black bg-opacity-[8%]  dark:bg-white dark:bg-opacity-[8%] rounded-[8px] text-sm'>
												{skill}
											</p>
										)
									})}
								</div>
							</div>
						</div>
						<button
							onClick={() => {
								posthog.capture('resume_download', {
									property: 'downloaded',
								})
							}}
							className='w-full lg:w-fit px-8 py-[14px]  relative rounded-lg mt-12 group overflow-hidden font-medium text-[16px] bg-gradient-to-r from-[#1745A9] to-[#A019DF] text-white inline-block'>
							<span className='absolute top-0 left-0 flex h-full w-0 mb-0 transition-all duration-200 ease-out transform translate-x-0 bg-[#1745A9] group-hover:w-full opacity-90'></span>
							<span className='relative group-hover:text-white'>
								<a
									href='/Akshay Benny.pdf'
									target='_blank'
									rel='noreferrer'>
									Get resume
								</a>
							</span>
						</button>
					</div>
				</div>
			</motion.section>
		</div>
	)
}

export default About
