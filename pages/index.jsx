import Head from 'next/head'
import About from '../components/About'
import Form from '../components/Form'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Other from '../components/Other'
import Portfolio from '../components/Portfolio'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import { ScrollerMotion } from 'scroller-motion'

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
						className='scrollToTop-btn bg-gradient-to-r from-[#1745A9] to-[#A019DF] rounded-full cursor-pointer  fixed bottom-8  right-10 z-50'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width='44'
							height='44'>
							<path
								fill='none'
								d='M0 0h24v24H0z'
							/>
							<path
								d='M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm1-8v4h-2v-4H8l4-4 4 4h-3z'
								fill='rgba(255,255,255,1)'
							/>
						</svg>
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
