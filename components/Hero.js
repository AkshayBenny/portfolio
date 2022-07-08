import { ChevronDownIcon } from '@heroicons/react/outline'

export default function Hero() {
  return (
    <div className='h-[90vh]  max-w-screen w-full md:flex '>
      <img
        className='md:order-2 h-[403px] w-full object-cover'
        src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        alt='Picture of Akshay Benny'
      />
      <div className='md:order-1'>
        <div className='flex items-center gap-4 pb-2'>
          <div className='w-[49px] h-[2px] bg-white'></div>
          <h4 className='text-white font-medium text-2xl tracking-[-0.25px] '>
            Hello world
          </h4>
        </div>
        <h1 className='text-white tracking-[-1px] md:tracking-[-1.25px] font-semibold text-[40px] md:text-[56px] pb-4'>
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
