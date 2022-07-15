import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Form from '../components/Form'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Other from '../components/Other'
import Portfolio from '../components/Portfolio'
import SmoothScroll from '../components/SmoothScroll.component'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Footer from '../components/Footer'

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
        <meta name='description' content='Full Stack Developer Portfolio' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Poppins'
          rel='stylesheet'
        />
      </Head>

      <main className='bg-black min-h-screen overflow-x-hidden font-Poppins relative'>
        {/* <div className='absolute top-0 -left-4 w-[700px] h-[700px] rounded-full bg-[#1745A9] filter blur-3xl  animate-blob z-0'></div>
        <div className='absolute top-[1500px] -right-4 w-[700px] h-[700px] rounded-full bg-[#6d51ec]  filter blur-3xl opacity-50 animate-blob z-0'></div>
        <div className='absolute top-96  w-[700px] h-[700px] rounded-full bg-[#9951ec]  filter blur-3xl opacity-50 animate-blob z-0' ></div> */}

        <Header />
        <AnimatePresence>
          <motion.div
            variants={lazyLoadVariants}
            animate='visible'
            initial='hidden'
            className=' max-w-[2000px] 3xl:mx-auto h-fit relative'
          >
            <motion.div variants={lazyLoadVariants}>
              <Hero />
            </motion.div>
            <motion.div variants={lazyLoadVariants}>
              <Portfolio />
            </motion.div>
            <motion.div variants={lazyLoadVariants}>
              <Other />
            </motion.div>
            <motion.div variants={lazyLoadVariants}>
              <About />
            </motion.div>
            <motion.div variants={lazyLoadVariants}>
              <Form />
            </motion.div>

            {/* <SmoothScroll>
          </SmoothScroll> */}
            {scrollPosition > 100 && (
              <motion.button
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
                exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 1 }}
                onClick={goToTop}
                className='scrollToTop-btn  text-white cursor-pointer  fixed bottom-8  right-10 z-50'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='44'
                  height='44'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path
                    d='M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm1-8v4h-2v-4H8l4-4 4 4h-3z'
                    fill='rgba(255,255,255,1)'
                  />
                </svg>
              </motion.button>
            )}

            <Footer />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
