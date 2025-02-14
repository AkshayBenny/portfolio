import EmblaCarousel from './EmblaCarousel'

export default function Project() {
	const slideImages: string[] = [
		'/project/one.png',
		'/project/two.png',
		'/project/three.png',
	]
	return (
		<div>
			<EmblaCarousel slides={slideImages} />
			<div className='max-w-5xl mx-auto pt-[60px]'>
				<h2 className='font-roboto-extrabold'>Local Shopper</h2>
				<div className='flex mt-5 pt-10 border-t border-[#F5F5F5] border-opacity-10'>
					<div>
						<h4 className='font-robotoMono-bold  pb-4'>
							Project Description
						</h4>
						<p className=''>
							An e-commerce platform that enables local businesses
							to sell their products online, making it easier for
							customers to discover and purchase from nearby
							stores. Designed for seamless transactions and an
							intuitive shopping experience.
						</p>
						<div className='font-robotoMono-medium flex gap-6 pt-8'>
							<button className='shadow-inset-border px-5 py-[10px]'>
								View Code
							</button>
							<button className='text-[#0A0A0A] bg-[#F5F5F5] px-5 py-[10px]'>
								View Live
							</button>
						</div>
					</div>
					<div>
						<h4 className='font-robotoMono-bold'>Stack</h4>
						<div className='pt-4'>
							<p>Spring Boot</p>
							<p>React Native</p>
							<p>Tailwind</p>
							<p>Next</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
