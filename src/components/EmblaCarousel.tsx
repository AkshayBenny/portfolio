'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

type EmblaCarouselProps = {
	slides: string[]
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ slides }) => {
	const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' })

	return (
		<div className='relative'>
			{/* Carousel viewport with the Embla ref */}
			<div
				className='overflow-clip'
				ref={emblaRef}>
				{/* Container for the slides */}
				<div className='flex gap-x-[60px]'>
					{slides.map((src, index) => (
						<div
							key={index}
							className='flex-shrink-0 w-11/12'>
							<Image
								height={520}
								width={974}
								src={src}
								alt={`Slide ${index + 1}`}
								className='w-full object-cover'
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default EmblaCarousel
