'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollProgressBar() {
	useEffect(() => {
		gsap.to('.progress-bar', {
			scaleX: 1,
			ease: 'none',
			scrollTrigger: {
				trigger: 'body',
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,
			},
		})
	}, [])

	return (
		<div className='fixed top-0 left-1/2 -translate-x-1/2 w-screen h-1 bg-[#0A0A0A] z-50'>
			<div className='progress-bar h-full bg-[#F5F5F5] transform origin-left scale-x-0' />
		</div>
	)
}
