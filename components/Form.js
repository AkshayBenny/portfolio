import React from 'react'

const Form = () => {
  return (
    <div className='text-white pt-[100px] max-w-[882px] mx-auto px-6'>
      <h1 className='text-center font-semibold text-[32px] lg:text-[40px]   tracking-[-1px]'>
        Get in touch
      </h1>
      <p className='text-base opacity-[64%] mx-auto leading-[32.4px] pt-6 text-center lg:max-w-[544px]'>
        Already use Dlex? Sign in so we can tailor your support experience. If
        that’s not possible, we’d still like to hear from you.
      </p>
      <form className='pt-12 space-y-[24px] '>
        <div className='md:grid grid-cols-2 gap-6 space-y-[24px] md:space-y-0'>
          <div className='flex flex-col items-start space-y-[8px]'>
            <label className='text-[20px]'>Your name</label>
            <input
              type='text'
              className='placeholder:text-[16px] placeholder:opacity-[40%] w-full bg-black border-[2px] border-white border-opacity-[50%] py-[13px] px-[18px] rounded-lg'
              placeholder='John Doe'
            />
          </div>
          <div className='flex flex-col items-start space-y-[8px]'>
            <label className='text-[20px]'>Your name</label>
            <input
              type='text'
              className='placeholder:text-[16px] placeholder:opacity-[40%] w-full bg-black border-[2px] border-white border-opacity-[50%] py-[13px] px-[18px] rounded-lg'
              placeholder='john@example.com'
            />
          </div>
        </div>
        <div className='space-y-[8px]'>
          <label className='text-[20px]'>Message</label>
          <textarea
            className='placeholder:text-[16px] placeholder:opacity-[40%] w-full min-h-[153px] bg-black border-[2px] border-white border-opacity-[50%] py-[13px] px-[18px] rounded-lg'
            placeholder='Type your message here'
          ></textarea>
        </div>
        <div className='w-full flex justify-end'>
          <button className='cursor-pointer bg-gradient-to-r from-[#1745A9] to-[#A019DF] text-white px-8 py-[14px] rounded-lg mt-12  font-medium text-[16px]'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
