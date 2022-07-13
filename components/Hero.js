import { ChevronDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='lg:h-[75vh] max-w-screen w-full my-auto '>
      <div className='flex flex-col items-start lg:items-center justify-center h-full px-6 lg:px-0'>
        <div className='flex items-center gap-4 pb-2'>
          <div className='w-[49px] h-[2px] bg-white'></div>
          <h4 className='text-white font-medium text-2xl tracking-[-0.25px] '>
            Hello world
          </h4>
          <div className='w-[49px] h-[2px] bg-white lg:flex hidden'></div>
        </div>
        <h1 className='text-white tracking-[-1px] lg:tracking-[-1.25px] font-semibold text-[40px] lg:text-[56px] pb-4'>
          I&apos;m Akshay Benny
        </h1>
        <p className='pb-12 max-w-[659px] lg:text-center'>
          <span className='text-white text-[20px] opacity-[64%]'>I am a </span>
          <span className='font-bold text-white text-[20px] opacity-100'>
            Full Stack Developer
          </span>
          <span className='text-white text-[20px] opacity-[64%]'>
            . Amet minim mollit non deserunt ullamco est sit aliqua dolor
          </span>
        </p>
        <div className='text-white text-[14px] opacity-[48%] flex items-center gap-2'>
          <p>Scroll down</p>
          <ChevronDownIcon className='h-4' />
        </div>
      </div>
    </div>
  )
}
