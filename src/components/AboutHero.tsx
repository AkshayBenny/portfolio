import FlutteringSVG from '@/app/animations/FlutteringSvg'
import { ParallaxWrapper } from '@/app/animations/ParallaxWrapper'
import Image from 'next/image'

export default function AboutHero() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen md:min-h-[94vh] mx-auto relative pb-14 md:pb-0'>
			<ParallaxWrapper>
				<Image
					unoptimized={true}
					quality={100}
					src='/profile.jpg'
					height={272}
					width={272}
					alt='A picture of Akshay'
					className='aspect-square z-10 object-cover grayscale pt-6 md:pt-0'
				/>
			</ParallaxWrapper>
			<p className='font-robotoMono-regular text-start w-full md:text-center pt-[60px]'>
				Hello Again!
			</p>
			<h1 className='font-roboto-extrabold pt-4 text-start w-full md:text-center'>
				I&apos;m Akshay Benny
			</h1>
			<p className='font-robotoMono-regular text-start w-full md:text-center leading-6 pt-4 max-w-3xl'>
				I love turning ideas into interactive experiences that feel
				smooth and intuitive. Whether it&apos;s crafting sleek web
				interfaces, designing efficient backends, or fine-tuning
				performance to make things lightning-fast, I enjoy creating
				products that people love to use. I earned a master's in
				Software Development from the University of Strathclyde and have
				worked on everything from social platforms, e-commerce web
				applications to AI-driven tools, along with Chrome extensions
				and Figma plugins. I&apos;m always looking for ways to make
				things more efficient, accessible, and engaging. You&apos;ll
				find me exploring new tech or brainstorming my next project when
				I&apos;m not coding.
			</p>
			<div className='hidden md:flex absolute left-0 bottom-52'>
				<ParallaxWrapper>
					<FlutteringSVG />
				</ParallaxWrapper>
			</div>
			<div className='absolute z-0 right-[-60px] md:right-0 top-96 md:top-64'>
				<ParallaxWrapper>
					<FlutteringSVG type='right' />
				</ParallaxWrapper>
			</div>
		</div>
	)
}
