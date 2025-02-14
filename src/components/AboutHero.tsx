import Image from 'next/image'

export default function AboutHero() {
	return (
		<div className='flex flex-col items-center justify-center h-dvh  mx-auto'>
			<Image
				src='/akshay.jpg'
				height={272}
				width={272}
				alt='A picture of Akshay'
				className='aspect-square object-cover grayscale'
			/>
			<p className='font-robotoMono-regular pt-[60px]'>Hello World</p>
			<h1 className='font-roboto-extrabold pt-4'>
				I&apos;m Akshay Benny
			</h1>
			<p className='font-robotoMono-regular text-center leading-6 pt-4 max-w-3xl'>
				I am a results-oriented full-stack developer that is passionate
				about creating products that are user-centric, scalable, and
				efficient. I have a solid foundation in software development and
				specialise in using streamlined architecture and peak
				performance to create flawless digital experiences. I work best
				in group settings where I can constantly learn new things and
				adjust to new difficulties.
			</p>
		</div>
	)
}
