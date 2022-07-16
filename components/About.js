import Image from 'next/image'
import profilePic from '../public/profilePic.jpg'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const About = () => {
  const skills = [
    'Reactjs',
    'Nextjs',
    'Mongodb',
    'Mongoose',
    'Redux',
    'Recoil',
    'Firebase',
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
      className='relative text-white mt-[150px] px-6 lg:px-16 max-w-[1400px] mx-auto'
    >
      {/* Project blob animation */}
      <motion.div
        variants={animationVariants}
        animate='animate'
        className='absolute top-[0px] -left-4 w-[700px] h-[700px] rounded-full bg-[#877eff] filter blur-[300px] z-0 hidden lg:grid'
      ></motion.div>
      <div className='grid lg:hidden absolute top-[200px] -left-[600px] w-[700px] h-[700px] rounded-full bg-[#6a60f5] filter blur-[300px] z-0 '></div>
      <h1 className='text-center font-semibold text-[32px] lg:text-[40px] pb-12 lg:pb-[72px] tracking-[-1px]'>
        About me
      </h1>
      <div className='lg:grid grid-cols-2 gap-12 text-white'>
        <div className='grid lg:hidden'>
          <Image
            height={651}
            width={751}
            className='rounded-2xl w-full object-cover'
            src={profilePic}
            alt='Picture of Akshay Benny'
          />
        </div>
        <div className='hidden lg:grid '>
          <Image
            height={651}
            width={551}
            className='rounded-2xl  w-full max-h-[363px] sm:max-h-[763px] lg:max-h-[963px]  object-cover'
            src={profilePic}
            alt='Picture of Akshay Benny'
          />
        </div>

        <div className='flex flex-col justify-between mt-[48px] lg:mt-0'>
          <div>
            <h1 className='font-semibold text-[24px] lg:text-[32px] tracking-[-0.5px]'>
              Nice to meet you !
            </h1>
            <p className='text-base opacity-[64%] leading-[26px] pt-6'>
              Diam auctor orci, quis nunc eleifend in tempor, eros, vehicula.
              Imperdiet tristique quam laoreet massa, volutpat purus tristique
              id. Amet vulputate pretium. Donec arcu ornare adipiscing a purus,
              id habitant. Aliquet morbi integer eget iaculis egestas mauris nec
              tortor.
            </p>

            {/* <button className='w-fit cursor-pointer bg-gradient-to-r from-[#1745A9] to-[#A019DF] text-white px-8 py-[14px] rounded-lg mt-12 hover:bg-blue-700  transition duration-200 font-medium text-[16px]'>
              Download CV
            </button> */}
            <button className='px-8 py-[14px] relative rounded-lg mt-12 group overflow-hidden font-medium text-[16px] bg-gradient-to-r from-[#1745A9] to-[#A019DF] text-white inline-block'>
              <span className='absolute top-0 left-0 flex h-full w-0 mb-0 transition-all duration-200 ease-out transform translate-x-0 bg-[#1745A9] group-hover:w-full opacity-90'></span>
              <span className='relative group-hover:text-white'>
                Download CV
              </span>
            </button>
          </div>
          <div>
            <h2 className='text-2xl font-medium pt-12 pb-6'>Skills</h2>
            <div className='flex flex-wrap gap-4'>
              {skills.map((skill, index) => {
                return (
                  <p
                    key={index}
                    className='px-6 py-[10px] bg-white bg-opacity-[8%] rounded-[8px] text-sm'
                  >
                    {skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
