import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'
import Loader from './Loader'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [resError, setResError] = useState('')

  const onSubmitForm = async (values) => {
    let config = {
      method: 'post',
      url: 'http://localhost:3000/api/contact',
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    }

    try {
      setIsLoading(true)
      const res = await axios(config)

      if (res.status === 200) {
        reset()
      }
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setResError(error)
    }
  }

  return (
    <div className='text-white pt-[100px] max-w-[882px] mx-auto px-6 pb-[100px] '>
      <h1 className='text-center font-semibold text-[32px] lg:text-[40px]   tracking-[-1px]'>
        Get in touch
      </h1>
      <p className='text-base opacity-[64%] mx-auto leading-[32.4px] pt-6 text-center lg:max-w-[544px]'>
        Already use Dlex? Sign in so we can tailor your support experience. If
        that’s not possible, we’d still like to hear from you.
      </p>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className='pt-12 space-y-[24px] '
      >
        <div className='md:grid grid-cols-2 gap-6 space-y-[24px] md:space-y-0'>
          <div className='flex flex-col items-start space-y-[8px]'>
            <label className='text-[20px]'>Your name</label>
            <input
              {...register('name', {
                required: true,
                message: 'Name is required',
              })}
              name='name'
              type='text'
              className={`placeholder:text-[16px] placeholder:opacity-[40%] w-full bg-black border-[2px] border-white border-opacity-[50%] py-[13px] px-[18px] rounded-lg ${
                errors.name ? 'ring-2 ring-red-500' : null
              }`}
              placeholder='John Doe'
            />
            <span className='text-red-700 font-light'>
              {errors?.name && <p>Name is required</p>}
            </span>
          </div>
          <div className='flex flex-col items-start space-y-[8px]'>
            <label className='text-[20px]'>Your email</label>
            <input
              {...register('email', {
                required: true,
                message: 'Email is required',
                minLength: 8,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              name='email'
              type='text'
              className={`placeholder:text-[16px] placeholder:opacity-[40%] w-full bg-black border-[2px] border-white border-opacity-[50%] py-[13px] px-[18px] rounded-lg ${
                errors.email ? 'ring-2 ring-red-500' : null
              }`}
              placeholder='john@example.com'
            />
            <span className='text-red-700 font-light'>
              {errors?.email?.type === 'minLength' && <p>Email is too short</p>}
            </span>
            <span className='text-red-700 font-light'>
              {errors?.email?.type === 'pattern' && (
                <p>Invalid email address</p>
              )}
            </span>
          </div>
        </div>
        <div className='space-y-[8px]'>
          <label className='text-[20px]'>Message</label>
          <textarea
            {...register('message', {
              required: true,
              message: 'Message is required',
              maxLength: 1000,
              minLength: 10,
            })}
            name='message'
            className={`placeholder:text-[16px] placeholder:opacity-[40%] w-full min-h-[153px] bg-black border-[2px] border-white border-opacity-[50%] py-[13px] px-[18px] rounded-lg ${
              errors.message ? 'ring-2 ring-red-500' : null
            }`}
            placeholder='Type your message here'
          ></textarea>
          <span className='text-red-700 font-light'>
            {errors?.message?.type === 'maxLength' && (
              <p>Message is too long</p>
            )}
          </span>
          <span className='text-red-700 font-light'>
            {errors?.message?.type === 'required' && (
              <p>A message is required</p>
            )}
          </span>
          <span className='text-red-700 font-light'>
            {errors?.message?.type === 'minLength' && (
              <p>Your message is too short</p>
            )}
          </span>
        </div>
        <div className='w-full flex justify-end'>
          <button
            type='submit'
            className={`cursor-pointer bg-gradient-to-r from-[#1745A9] to-[#A019DF] text-white px-8 py-[14px] rounded-lg mt-12  font-medium text-[16px] ${
              isLoading ? 'hidden' : 'flex'
            }`}
          >
            Submit
          </button>

          {isLoading && (
            <div className='w-fit '>
              <Loader />
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default Form
