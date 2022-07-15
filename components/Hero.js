import { ChevronDownIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'

export default function Hero() {
  const lazyLoadVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }
  return (
    <motion.div
      variants={lazyLoadVariants}
      initial='hidden'
      animate='visible'
      className='lg:h-[75vh] max-w-screen w-full my-auto '
    >
      <div className='pt-[147px] lg:pt-0 flex flex-col items-start lg:items-center justify-center h-full px-6 lg:px-0 '>
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
            Full Stack Developer
          </span>
          <span className='text-white text-[20px] opacity-[64%]'>
            . Amet minim mollit non deserunt ullamco est sit aliqua dolor
          </span>
        </motion.p>
        <motion.div
          variants={lazyLoadVariants}
          className='text-white text-[14px] opacity-[48%] flex items-center gap-2'
        >
          <p>Scroll down</p>
          <ChevronDownIcon className='h-4' />
        </motion.div>
      </div>
    </motion.div>
  )
}
