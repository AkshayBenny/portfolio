import { motion } from 'framer-motion'
import React from 'react'

// const LoadingDot = {
//   display: 'block',
//   width: '2rem',
//   height: '2rem',
//   backgroundColor: 'black',
//   borderRadius: '50%',
// }

// const LoadingContainer = {
//   width: '10rem',
//   height: '5rem',
//   display: 'flex',
//   justifyContent: 'space-around',
// }

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const DotVariants = {
  initial: {
    y: '0%',
  },
  animate: {
    y: '100%',
  },
}

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut',
}

export default function Loader() {
  return (
    <div
      style={{
        paddingTop: '5rem',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        className='flex justify-around gap-1'
        variants={ContainerVariants}
        initial='initial'
        animate='animate'
      >
        <motion.span
          className='block w-2 h-2 rounded-full bg-gradient-to-r from-[#1745A9] to-[#A019DF]'
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          className='block w-2 h-2 rounded-full bg-gradient-to-r from-[#1745A9] to-[#A019DF]'
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          className='block w-2 h-2 rounded-full bg-gradient-to-r from-[#1745A9] to-[#A019DF]'
          variants={DotVariants}
          transition={DotTransition}
        />
      </motion.div>
    </div>
  )
}
