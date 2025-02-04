import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'
import Loader from './Loader'
import { motion } from 'framer-motion'

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm()
	const [isLoading, setIsLoading] = useState(false)
	const [resError, setResError] = useState('')
	const NEXT_URL =
		process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'

	const onSubmitForm = async (values) => {
		let config = {
			method: 'post',
			url: `${NEXT_URL}/api/contact`,
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
		<motion.section
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			transition={{ duration: 0.3 }}
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			}}
			id='contact'
			className='relative  pt-[100px] max-w-[882px] mx-auto px-6 pb-[100px] '>
			<div className='flex lg:hidden absolute top-[200px] -right-[600px] w-[700px] h-[700px] rounded-full bg-[#6a60f5] filter blur-[300px] z-0 '></div>
			<h1 className='text-center font-semibold text-[32px] lg:text-[40px]   tracking-[-1px]'>
				Get in touch
			</h1>
			<p className='text-base opacity-[64%] mx-auto leading-[32.4px] pt-6 text-center lg:max-w-[544px]'>
				If you&apos;re interested in working together or just want to
				chat, feel free to reach out. I look forward to hearing from
				you!
			</p>
			<form
				onSubmit={handleSubmit(onSubmitForm)}
				className='pt-12 space-y-[24px] '>
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
							className={`placeholder:text-[16px] placeholder:opacity-[90%] w-full bg-transparent border-[2px] border-black dark:border-white border-opacity-[50%] py-[13px] px-[18px] rounded-lg ${
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
							className={`placeholder:text-[16px] placeholder:opacity-[90%] w-full bg-transparent border-[2px] border-black dark:border-white border-opacity-[50%] py-[13px] px-[18px] rounded-lg ${
								errors.email ? 'ring-2 ring-red-500' : null
							}`}
							placeholder='john@example.com'
						/>
						<span className='text-red-700 font-light'>
							{errors?.email && <p>Email is required</p>}
						</span>
						<span className='text-red-700 font-light'>
							{errors?.email?.type === 'minLength' && (
								<p>Email is too short</p>
							)}
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
						className={`placeholder:text-[16px] placeholder:opacity-[90%] w-full min-h-[153px] bg-transparent border-[2px] border-black dark:border-white border-opacity-[50%] py-[13px] px-[18px] rounded-lg ${
							errors.message ? 'ring-2 ring-red-500' : null
						}`}
						placeholder='Type your message here'></textarea>
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
						className={`px-8 py-[14px] relative rounded-lg mt-12 group overflow-hidden font-medium text-[16px] bg-gradient-to-r from-[#1745A9] to-[#A019DF] text-white inline-block ${
							isLoading ? 'hidden' : 'flex'
						}`}>
						<span className='absolute top-0 left-0 flex h-full w-0 mb-0 transition-all duration-200 ease-out transform translate-x-0 bg-[#1745A9] group-hover:w-full opacity-90'></span>
						<span className='relative group-hover:text-white'>
							Submit
						</span>
					</button>

					{isLoading && (
						<div className='w-fit '>
							<Loader />
						</div>
					)}
				</div>
			</form>
		</motion.section>
	)
}

export default Form
