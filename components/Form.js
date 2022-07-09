import React from 'react'

const Form = () => {
  return (
    <div className='text-white pt-[100px]'>
      <h1 className='text-center font-semibold text-[32px] lg:text-[40px]   tracking-[-1px]'>
        Get in touch
      </h1>
      <p className='text-base opacity-[64%] mx-auto leading-[32.4px] pt-6 text-center lg:max-w-[544px]'>
        Already use Dlex? Sign in so we can tailor your support experience. If
        that’s not possible, we’d still like to hear from you.
      </p>
      <div>
        <div className='md:grid grid-cols-2'>
          <div>
            <label>Your name</label>
            <input type='text' />
          </div>
          <div>
            <label>Your name</label>
            <input type='text' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
