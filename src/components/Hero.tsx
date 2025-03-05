'use client'
import FlutteringSVG from '@/app/animations/FlutteringSvg'
import { ParallaxWrapper } from '@/app/animations/ParallaxWrapper'

export default function Hero() {
	return (
		<div className='md:relative -top-10 flex flex-col items-start md:items-center justify-center h-[94vh]  mx-auto relative'>
			<p className='font-robotoMono-regular text-start md:text-center'>
				Hello World
			</p>
			<h1 className='font-roboto-extrabold text-start md:text-center'>
				I&apos;m Akshay Benny
			</h1>
			<p className='font-robotoMono-regular leading-6 text-start md:text-center max-w-3xl'>
				A Software developer with +2 years of experience in Next.js,
				React Native, Express and Spring Boot
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
