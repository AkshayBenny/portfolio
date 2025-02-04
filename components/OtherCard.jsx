import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/solid'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { BookmarkAltIcon } from '@heroicons/react/outline'

const OtherCard = ({ data }) => {
  const [hover, setHover] = useState(false)

  function handleMouseEnter() {
    setHover(true)
  }

  function handleMouseLeave() {
    setHover(false)
  }

  const hoverVariants = {
    hover: {
      opacity: '64%',
    },
    hidden: {
      opacity: '0%',
    },
    textHover: {
      position: 'absolute',
      top: '36px',
      left: '36px',
      opacity: 1,
    },
  }

  const textHoverVariants = {
    hidden: {
      opacity: 0,
      visibility: 'hidden',
    },
    hover: {
      display: 'flex',
      flexDirection: 'column',
    },
  }

  const buttonHoverVariants = {
    hidden: {
      opacity: 0,
      y: '10vh',
      visibility: 'hidden',
    },
    hover: {
      opacity: [0, 0.1, 0.4, 0.6, 0.8, 1],
      y: 0,
      display: 'flex',
    },
  }

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='w-full relative text-white group '
    >
      <div className=' z-0'>
        <img
          src={data.image}
          className='object-cover rounded-2xl w-full h-[278px]'
          alt=''
        />
      </div>

      <motion.div
        variants={hoverVariants}
        initial='hover'
        animate={hover && 'hover'}
        className='lg:absolute lg:w-full lg:h-full lg:bottom-0 lg:left-0 lg:rounded-2xl lg:bg-gradient-to-t lg:from-black    lg:opacity-80 lg:to-transparent group-hover:to-black lg:z-10'
      ></motion.div>
      <motion.div className='absolute w-full h-full bottom-0 left-0 rounded-2xl bg-gradient-to-t from-black   opacity-[64%] lg:hidden flex  to-black lg:to-transparent group-hover:to-black z-10'></motion.div>

      <motion.div
        variants={hoverVariants}
        animate={hover ? 'textHover' : 'hidden'}
        className='absolute top-9 left-9 lg:top-52 z-10'
      >
        <div className='flex items-center gap-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='24'
            height='24'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path
              d='M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5zM19 20v-3H6.5a1.5 1.5 0 0 0 0 3H19zM10 4H6a1 1 0 0 0-1 1v10.337A3.486 3.486 0 0 1 6.5 15H19V4h-2v8l-3.5-2-3.5 2V4z'
              fill='rgba(255,255,255,1)'
            />
          </svg>
          <h1 className='font-medium text-2xl tracking-[-0.25px]'>
            {data.name}
          </h1>
        </div>

        <div className='hidden lg:flex'>
          <motion.p
            variants={textHoverVariants}
            animate={hover ? 'hover' : 'hidden'}
            className='text-base leading-6 pt-4 font-normal opacity-[64%] mr-7 hidden lg:visible'
          >
            {data.desc}
          </motion.p>
        </div>
        <div>
          <p className='text-base leading-6 pt-4 font-normal opacity-[64%] mr-7 lg:hidden visible'>
            {data.desc}
          </p>
        </div>
      </motion.div>

      <div className='flex lg:hidden'>
        <div className='absolute bottom-9 left-9 flex lg:hidden group-hover:flex  gap-4 z-20'>
          {data.gitLink && (
            <a
              href={data.gitLink}
              target='_blank'
              rel='noreferrer'
              className='bg-white text-base font-semibold px-4 py-3 text-black rounded-lg flex items-center justify-center gap-[10px]'
            >
              View Code
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z' />
                </svg>
              </span>
            </a>
          )}
          {data.liveLink && (
            <a
              href={data.gitLink}
              target='_blank'
              rel='noreferrer'
              className='bg-white text-base font-semibold px-4 py-3 text-black rounded-lg flex items-center justify-center gap-[10px]'
            >
              Live Demo
              <span className=''>
                <ArrowRightIcon className='text-black h-4 rotate-[-45deg]' />
              </span>
            </a>
          )}
        </div>
      </div>
      <div className='hidden lg:flex'>
        <motion.div
          variants={buttonHoverVariants}
          animate={hover ? 'hover' : 'hidden'}
          className='absolute bottom-9 left-9 lg:flex hidden group-hover:flex  gap-4 z-20'
        >
          {data.gitLink && (
            <a
              href={data.gitLink}
              target='_blank'
              rel='noreferrer'
              className='bg-white text-base font-semibold px-4 py-3 text-black rounded-lg flex items-center justify-center gap-[10px]'
            >
              View Code
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z' />
                </svg>
              </span>
            </a>
          )}
          {data.liveLink && (
            <a
              href={data.liveLink}
              target='_blank'
              rel='noreferrer'
              className='bg-white text-base font-semibold px-4 py-3 text-black rounded-lg flex items-center justify-center gap-[10px]'
            >
              Live Demo
              <span className=''>
                <ArrowRightIcon className='text-black h-4 rotate-[-45deg]' />
              </span>
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default OtherCard
