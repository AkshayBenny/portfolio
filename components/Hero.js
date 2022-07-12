import { ChevronDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='lg:h-[75vh] max-w-screen w-full lg:grid lg:grid-cols-2 lg:gap-[52px] '>
      <div className='lg:order-2 lg:ml-auto max-h-fit lg:my-auto'>
        <div className='grid lg:hidden max-h-fit'>
          <Image
            height={601}
            width={916}
            className='lg:order-2  lg:rounded-tl-[16px]  my-auto  object-cover'
            src='https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80'
            alt='Picture of Akshay Benny'
          />
        </div>
        <div className='lg:grid hidden max-h-fit'>
          <Image
            height={601}
            width={616}
            className='lg:order-2  lg:rounded-tl-[16px]  my-auto  object-cover'
            src='https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80'
            alt='Picture of Akshay Benny'
          />
        </div>
      </div>
      <div className='lg:order-1 px-6 lg:px-0 lg:pl-16 pt-9 lg:pt-0 lg:my-auto'>
        <div className='flex items-center gap-4 pb-2'>
          <div className='w-[49px] h-[2px] bg-white'></div>
          <h4 className='text-white font-medium text-2xl tracking-[-0.25px] '>
            Hello world
          </h4>
        </div>
        <h1 className='text-white tracking-[-1px] lg:tracking-[-1.25px] font-semibold text-[40px] lg:text-[56px] pb-4'>
          I&apos;m Akshay Benny
        </h1>
        <p className='pb-12'>
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
