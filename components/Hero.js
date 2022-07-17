import { ChevronDownIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
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
      if (y < 400) {
        randomArrayY.push(y)
      }
    }
    setXCoord(randomArrayX)
    setYCoord(randomArrayY)
  }, [])

  const lazyLoadVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

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
    <motion.section
      id='home'
      variants={lazyLoadVariants}
      initial='hidden'
      animate='visible'
      className='lg:h-[75vh] max-w-screen w-full my-auto relative'
    >
      <motion.div
        variants={animationVariants}
        animate='animate'
        className='absolute top-0 -left-4 w-[700px] h-[700px] rounded-full bg-[#4235ec] filter blur-[300px] z-0 hidden lg:grid'
      ></motion.div>
      <div className='grid lg:hidden absolute top-0 -left-[600px] w-[700px] h-[700px] rounded-full bg-[#4235ec] filter blur-[300px] z-0 '></div>

      <div className='pt-[100px] lg:pt-0 flex flex-col items-start lg:items-center justify-center h-full px-6 lg:px-0 '>
        <motion.div
          variants={lazyLoadVariants}
          className='flex items-center gap-4 pb-2'
        >
          <div className='w-[21px] lg:w-[49px] h-[2px] bg-white'></div>
          <h4 className='text-white font-medium text-lg lg:text-2xl tracking-[-0.25px]  '>
            Hello world
          </h4>
          <div className='w-[49px] h-[2px] bg-white lg:flex hidden'></div>
        </motion.div>
        <motion.h1
          variants={lazyLoadVariants}
          className='text-white tracking-[-1px] lg:tracking-[-1.25px] font-semibold text-[56px] pb-4 max-w-[150px] sm:max-w-none'
        >
          I&apos;m Akshay Benny
        </motion.h1>
        <motion.p
          variants={lazyLoadVariants}
          className='pb-12 max-w-[459px] lg:max-w-[659px] lg:text-center'
        >
          <span className='text-white text-[20px] opacity-[64%]'>I am a </span>
          <span className='font-bold text-white text-[20px] opacity-100'>
            Full Stack Web Developer&nbsp;
          </span>
          <span className='text-white text-[20px] opacity-[64%]'>
            specializing in MERN stack based in India.
          </span>
        </motion.p>
        <motion.div
          variants={lazyLoadVariants}
          className='text-white text-[14px] opacity-[48%] flex items-center gap-2'
        >
          <p>Scroll down</p>
          <motion.div
            animate={{
              y: [2, -2],
            }}
            transition={{
              duration: 2,

              yoyo: Infinity,
            }}
          >
            <ChevronDownIcon className='h-4' />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
