import FlutteringSVG from '@/app/animations/FlutteringSvg'
import Image from 'next/image'

export default function AboutHero() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen md:min-h-[94vh] mx-auto relative pb-14 md:pb-0'>
			<Image
				priority
				unoptimized={true}
				quality={100}
				src='/akshay-2.jpg'
				height={272}
				width={272}
				alt='A picture of Akshay'
				className='aspect-square z-10 object-cover grayscale pt-6 md:pt-0'
			/>
			<p className='font-robotoMono-regular text-start w-full md:text-center pt-[60px]'>
				Hello Again!
			</p>
			<h1 className='font-roboto-extrabold pt-4 text-start w-full md:text-center'>
				I&apos;m Akshay Benny
			</h1>
			<p className='font-robotoMono-regular text-start w-full md:text-center leading-6 pt-4 max-w-3xl'>
				A software developer with +2 years and hands-on experience in
				mobile and web application development. Adept at building
				scalable solutions that enhance user engagement while leveraging
				agile methodologies. Skilled in SEO, accessibility improvements,
				and performance optimization to drive measurable results. Always
				eager to collaborate and solve complex challenges with
				innovative solutions.
			</p>
			<div className='hidden md:flex absolute left-0 bottom-52'>
				<FlutteringSVG />
			</div>
			<div className='absolute z-0 right-0 top-64'>
				<FlutteringSVG type='right' />
			</div>
		</div>
	)
}
