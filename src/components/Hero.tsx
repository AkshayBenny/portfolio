'use client'
import FlutteringSVG from '@/app/animations/FlutteringSvg'
import { ParallaxWrapper } from '@/app/animations/ParallaxWrapper'

export default function Hero() {
	return (
		<div className='flex flex-col items-start md:items-center justify-center h-[94vh]  mx-auto relative'>
			<p className='font-robotoMono-regular text-start md:text-center'>
				Hello World
			</p>
			<h1 className='font-roboto-extrabold text-start md:text-center'>
				I&apos;m Akshay Benny
			</h1>
			<p className='font-robotoMono-regular leading-6 text-start md:text-center max-w-3xl'>
				A software developer who loves building mobile and web apps that
				are fast, user-friendly, and actually useful. I have experience
				with Next.js, React, ExpressJs, SEO, and performance
				optimization. Always excited to take on new challenges and
				create awesome digital experiences!
			</p>

			<div className='hidden md:flex absolute left-0 bottom-52'>
				<ParallaxWrapper>
					<FlutteringSVG />
				</ParallaxWrapper>
			</div>
			<div className='absolute z-0 right-[-60px] md:right-0 top-64 scale-75 md:scale-100'>
				<ParallaxWrapper>
					<FlutteringSVG type='right' />
				</ParallaxWrapper>
			</div>
		</div>
	)
}
