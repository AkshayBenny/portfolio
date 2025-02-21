'use client'
import FlutteringSVG from '@/app/animations/FlutteringSvg'

export default function Hero() {
	return (
		<div className='flex flex-col items-start md:items-center justify-center h-[94vh] max-w-3xl mx-auto relative'>
			<p className='font-robotoMono-regular text-start md:text-center'>
				Hello World
			</p>
			<h1 className='font-roboto-extrabold text-start md:text-center'>
				I&apos;m Akshay Benny
			</h1>
			<p className='font-robotoMono-regular leading-6 text-start md:text-center'>
				A software developer who loves building mobile and web apps that
				are fast, user-friendly, and actually useful. I have experience
				with Next.js, React, ExpressJs, SEO, and performance
				optimization. Always excited to take on new challenges and
				create awesome digital experiences!
			</p>
			<div className='hidden md:flex absolute left-0 md:left-[-120px] bottom-52'>
				<FlutteringSVG type='left' />
			</div>
			<div className='absolute right-0 md:right-[-120px] top-64'>
				<FlutteringSVG type='right' />
			</div>
		</div>
	)
}
