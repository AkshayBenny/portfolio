import React from 'react'
import ProjectCard from './ProjectCard'
import { motion, AnimatePresence } from 'framer-motion'
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
      className='relative pt-[173px] lg:pt-[100px] text-white px-6 lg:px-16 max-w-[1400px] mx-auto'
    >
      {/* Project blob animation */}
      <motion.div
        variants={animationVariants}
        animate='animate'
        className='absolute top-[400px] -left-4 w-[700px] h-[700px] rounded-full bg-[#6a60f5] filter blur-[300px] z-0 hidden lg:grid'
      ></motion.div>
      <div className='grid lg:hidden absolute top-[1000px] -right-[600px] w-[700px] h-[700px] rounded-full bg-[#6a60f5] filter blur-[300px] z-0 '></div>
      <h2 className='text-center text-[20px] pb-[10px] tracking-[-1px]'>
        Portfolio
      </h2>
      <h1 className='text-center font-semibold text-[32px] lg:text-[40px]  pb-12 lg:pb-[72px]'>
        Projects
      </h1>
      <div className='space-y-[172px] lg:space-y-[160px] lg:flex lg:flex-col basis-full'>
        <ProjectCard
          title='E-commerce Webapp'
          desc='An e-commerce webapp made using ReactJs, NodeJs, Express and MongoDb with PayPal as payment gateway. Users can sign in, sign out, add to cart and make payment. It possess additional featueres like pagination, filtering, search, set quantity and more.'
          tag='Tailwind Css,ReactJs,Redux,Redux Toolkit,MongoDb,Express,NodeJs'
          gitLink='https://github.com/AkshayBenny/ecommerce-react-nodejs-mongodb'
          image='/ecommerce.png'
          type='Full Stack'
          number={1}
        />
        <ProjectCard
          title='Twitter Clone'
          desc='A clone of Twitter made using NextJs and Firebase. It supports features like sign in, sign out, posting, adding new tweets and more.'
          tag='Tailwind Css,ReactJs,NextJs,Recoil'
          gitLink='https://github.com/AkshayBenny/twitter-clone-nextjs'
          liveLink='https://twitter-clone-nextjs-bv5wn9iwn-akshaybenny.vercel.app/'
          image='/twitter.png'
          type='Full Stack'
          number={2}
        />
        <ProjectCard
          title='Google Clone'
          desc='A clone of Google search engine made using Google Search Api. It supports both text as well as image search.'
          tag='Tailwind Css,ReactJs,NextJs,Redux'
          gitLink='https://github.com/AkshayBenny/google-clone-nextjs'
          liveLink='https://google-clone-nextjs-jade.vercel.app/'
          image='/google.png'
          type='Frontend'
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
