import { ArrowRightIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import { useState } from 'react'

const ProjectCard = ({
  number,
  image,
  title,
  desc,
  tag,
  gitLink,
  liveLink,
}) => {
  const tags = tag.split(',')

  const underLineVariants = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    hover: {
      width: '75%',
      opacity: 1,
    },
  }

  const [isHovered, setIsHovered] = useState(false)

  function handleMouseEnter() {
    setIsHovered(true)
  }

  function handleMouseLeave() {
    setIsHovered(false)
  }

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`lg:flex justify-around  gap-12 text-white  ${
        number % 2 === 0 && 'flex-row-reverse'
      }`}
    >
      <div className='relative'>
        <img
          src={image}
          alt={title}
          className='rounded-2xl w-full object-cover h-full'
        />
        <p className='font-bold text-base px-4 py-1 bg-black bg-opacity-[64%]  max-w-fit rounded-full absolute top-[10px] left-[10px] z-100'>
          Project
        </p>
      </div>
      <div className='flex flex-col justify-between pt-12 lg:pt-0'>
        <div className='flex flex-col space-y-[16px] '>
          <div className='relative w-fit'>
            <h1 className='font-semibold text-[40px] xl:text-[32px] tracking-[-1px] xl:tracking-[-0.5px] '>
              {title}
            </h1>
            <motion.div
              variants={underLineVariants}
              animate={isHovered ? 'hover' : 'initial'}
              className='absolute h-3 w-0 hover:w-3/4 transition  bg-violet-500 z-0 top-7 mix-blend-screen lg:flex hidden'
            ></motion.div>
          </div>
          <p className='text-[20px] leading-[33px]'>{desc}</p>
          <div className='flex  xl:flex flex-wrap gap-4'>
            {tags.map((tag, index) => {
              return (
                <p
                  key={index}
                  className='px-6 py-[10px] bg-white bg-opacity-[8%] rounded-[10px] text-sm'
                >
                  {tag}
                </p>
              )
            })}
          </div>
        </div>
        <div className='flex items-center gap-12 font-semibold text-base pt-20 '>
          <div className='flex items-center gap-2 cursor-pointer group '>
            <a href={liveLink}>Live Demo</a>
            <div>
              <ArrowRightIcon className='h-6 group-hover:rotate-[-45deg] group-hover:bg-opacity-[100%] rotate-[-45deg] lg:rotate-[0deg]  transition bg-[#6068DB] lg:bg-opacity-0  rounded-full m-[6px] p-1' />
            </div>
          </div>
          <a href={gitLink}>Git Demo</a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
