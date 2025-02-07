import React from 'react'
import ProjectCard from './ProjectCard'
import { useState, useEffect } from 'react'

export default function Portfolio() {
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
			randomArrayY.push(Math.random() * 1000)
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
		<section
			id='project'
			className='relative pt-[173px] lg:pt-[100px]  px-6 lg:px-16 max-w-[1400px] mx-auto mb-32'>
			{/* Project blob animation */}
			{/* <motion.div
        variants={animationVariants}
        animate='animate'
        className='absolute top-[400px] -left-4 w-[700px] h-[700px] rounded-full bg-[#6a60f5] filter blur-[300px] z-0 hidden lg:grid'
      ></motion.div>
      <div className='grid lg:hidden absolute top-[1000px] -right-[600px] w-[700px] h-[700px] rounded-full bg-[#6a60f5] filter blur-[300px] z-0 '></div> */}
			<h2 className='text-center text-[20px] pb-[10px] tracking-[-1px]'>
				Portfolio
			</h2>
			<h1 className='text-center font-semibold text-[32px] lg:text-[40px]  pb-12 lg:pb-[72px]'>
				Projects
			</h1>
			<div className='space-y-[172px] lg:space-y-[160px] lg:flex lg:flex-col basis-full'>
				<ProjectCard
					title='LocalShopper'
					desc='An e-commerce platform that enables local businesses to sell their products online, making it easier for customers to discover and purchase from nearby stores. Designed for seamless transactions and an intuitive shopping experience.'
					tag='Spring Boot, Next.js, PostgreSQL, Stripe, TailwindCSS, Recoil'
					gitLink='https://github.com/AkshayBenny/local-ecommerce'
					// gitLink='https://github.com/AkshayBenny/ecommerce-react-nodejs-mongodb'
					image='/localshopper.png'
					type='Full-stack'
					number={1}
				/>
				<ProjectCard
					title='Doubtss'
					desc='An AI-powered chatbot for UPSC exam preparation, utilizing NLP for intelligent query responses. Features secure authentication and scalable backend deployment.'
					tag='Next.js, Next-Auth, Firebase, Langchain, Pinecone, Prisma, Flask, TailwindCSS'
					// gitLink='https://github.com/AkshayBenny/google-clone-nextjs'
					gitLink='https://github.com/AkshayBenny/doubtss-chatbot'
					liveLink='https://www.doubtss.com/'
					image='/doubtss.png'
					type='Full-stack'
					number={2}
				/>
				<ProjectCard
					title='Figma Copilot'
					desc='A Figma plugin that automates design layer validation, ensuring UI/UX consistency. Enhances design workflows by detecting and resolving errors efficiently.'
					tag='React, Node.js, TypeScript, Webpack, Figma'
					gitLink='https://github.com/AkshayBenny/figma-copilot'
					// liveLink='https://twitter-clone-nextjs-bv5wn9iwn-akshaybenny.vercel.app/'
					image='/figma-copilot.png'
					gif='/figma-copilot.gif'
					type='Plugin'
					number={3}
				/>

				{/* <ProjectCard
          title='Google Clone'
          desc='Et sit velit erat lorem purus. Consequat arcu, at sagittis pellentesque urna. Malesuada vitae fermentum, facilisis duis sagittis sodales pharetra.'
          tag='Tailwind Css,ReactJs,Redux'
          gitLink='https://github.com/AkshayBenny.com'
          liveLink='https://google.com'
          image='https://images.unsplash.com/photo-1586125674857-4eb86880905d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          number={4}
        /> */}
			</div>
		</section>
	)
}
