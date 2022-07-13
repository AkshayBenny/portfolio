import Image from 'next/image'

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
  return (
    <div className=' text-white mt-[150px] px-6 lg:px-16 max-w-[1400px] mx-auto'>
      <h1 className='text-center font-semibold text-[32px] lg:text-[40px] pb-12 lg:pb-[72px] tracking-[-1px]'>
        About me
      </h1>
      <div className='lg:grid grid-cols-2 gap-12 text-white '>
        <div className='grid lg:hidden'>
          <Image
            height={651}
            width={751}
            className='rounded-2xl  w-full max-h-[363px] sm:max-h-[763px] lg:max-h-[963px]  object-cover'
            src='https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt='Picture of Akshay Benny'
          />
        </div>
        <div className='hidden lg:grid '>
          <Image
            height={651}
            width={551}
            className='rounded-2xl  w-full max-h-[363px] sm:max-h-[763px] lg:max-h-[963px]  object-cover'
            src='https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
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
            <button className='w-fit cursor-pointer bg-gradient-to-r from-[#1745A9] to-[#A019DF] text-white px-8 py-[14px] rounded-lg mt-12  font-medium text-[16px]'>
              Download CV
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
    </div>
  )
}

export default About
