import FlutteringSVG from '@/app/animations/FlutteringSvg'

export default function Hero() {
	return (
		<div className='flex flex-col items-center justify-center h-[94vh] max-w-3xl mx-auto relative'>
			<p className='font-robotoMono-regular'>Hello World</p>
			<h1 className='font-roboto-extrabold'>I&apos;m Akshay Benny</h1>
			<p className='font-robotoMono-regular text-center leading-6'>
				A software developer who loves building mobile and web apps that
				are fast, user-friendly, and actually useful. I have experience
				with Next.js, React, ExpressJs, SEO, and performance
				optimization. Always excited to take on new challenges and
				create awesome digital experiences!
			</p>
			<div className='absolute left-0 bottom-52'>
				<FlutteringSVG type='left' />
			</div>
			<div className='absolute right-0 top-64'>
				<FlutteringSVG type='right' />
			</div>
			{/* <Image
				src='/gridLeft.svg'
				alt='SVG of a grid'
				width={274}
				height={264}
			/> */}
			{/* <Image
				src='/gridRight.svg'
				alt='SVG of a grid'
				width={438}
				height={465}
				className='absolute right-0 top-64'
			/> */}
		</div>
	)
}
