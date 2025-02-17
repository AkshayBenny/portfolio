// import FlutteringSvg from '@/app/animations/FlutteringSvg'
import Image from 'next/image'

export default function AboutHero() {
	return (
		<div className='flex flex-col items-center justify-center h-dvh  mx-auto relative'>
			<Image
				src='/akshay-2.jpg'
				height={272}
				width={272}
				alt='A picture of Akshay'
				className='aspect-square z-10 object-cover grayscale'
			/>
			<p className='font-robotoMono-regular pt-[60px]'>Hello World</p>
			<h1 className='font-roboto-extrabold pt-4'>
				I&apos;m Akshay Benny
			</h1>
			<p className='font-robotoMono-regular text-center leading-6 pt-4 max-w-3xl'>
				Passionate software developer with hands-on experience in mobile
				and web application development. Adept at building scalable
				solutions that enhance user engagement while leveraging agile
				methodologies. Skilled in SEO, accessibility improvements, and
				performance optimization to drive measurable results. Always
				eager to collaborate and solve complex challenges with
				innovative solutions.
			</p>
			{/* <FlutteringSvg /> */}
			<Image
				src='/gridLeft.svg'
				alt='SVG of a grid'
				width={274}
				height={264}
				className='absolute z-0 left-0 bottom-52'
			/>
			<Image
				src='/gridRight.svg'
				alt='SVG of a grid'
				width={438}
				height={465}
				className='absolute z-0 right-0 top-64'
			/>
		</div>
	)
}
