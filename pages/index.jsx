import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import ArrowUpSLineIcon from 'remixicon-react/ArrowUpSLineIcon'

export default function Home() {
	const goToTop = () => {
		document.documentElement.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	const [scrollPosition, setScrollPosition] = useState(0)

	useEffect(() => {
		const updatePosition = () => {
			setScrollPosition(window.pageYOffset)
		}

		window.addEventListener('scroll', updatePosition)

		return () => window.removeEventListener('scroll', updatePosition)
	}, [])

	const lazyLoadVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 1,
			},
		},
	}

	return (
		<div>
			<Head>
				<title>Akshay Benny</title>
				<meta
					name='description'
					content='Full Stack Developer Portfolio'
				/>
				<link
					rel='icon'
					href='/vercel.svg'
				/>
				<link
					href='https://fonts.googleapis.com/css?family=Poppins'
					rel='stylesheet'
				/>

				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
				/>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Manrope:wght@200..800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<main className='duration-300 min-h-screen overflow-x-hidden  relative  bg-gray-50 text-gray-900 dark:bg-black dark:text-gray-100'>
				{scrollPosition > 100 && (
					<motion.button
						initial={{ y: 100, opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: { duration: 0.6 },
						}}
						exit={{
							y: 100,
							opacity: 0,
							transition: { duration: 0.6 },
						}}
						whileHover={{
							scale: 1.2,
							transition: { duration: 0.2 },
						}}
						whileTap={{ scale: 1 }}
						onClick={goToTop}
						className='scrollToTop-btn border border-white border-opacity-60 rounded-full cursor-pointer  fixed bottom-8  right-10 z-50'>
						<ArrowUpSLineIcon className='h-[24px] lg:h-[32px] w-[24px] lg:w-[32px]' />
					</motion.button>
				)}

				<Header />
				<div>
					<motion.div
						variants={lazyLoadVariants}
						animate='visible'
						initial='hidden'
						className=' max-w-[2000px] 3xl:mx-auto h-fit relative '>
						<Hero />
						<Portfolio />
						{/* <Other /> */}
						{/* <About /> */}
						{/* <Form /> */}
						<Footer />
					</motion.div>
				</div>
				{/* <div className='hidden md:grid'>
          <motion.div
            variants={lazyLoadVariants}
            animate='visible'
            initial='hidden'
            className=' max-w-[2000px] 3xl:mx-auto h-fit relative '
          >
            <Hero />
            <Portfolio />
            <Other />
            <About />
            <Form />
            <Footer />
          </motion.div>
        </div> */}
			</main>
		</div>
	)
}
