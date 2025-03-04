'use client'

import { useRef, useEffect, ReactNode, ElementType } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface FadeInWrapperProps {
	children: ReactNode
	as?: ElementType
}

const FadeInWrapper = ({
	children,
	as: Component = 'div',
}: FadeInWrapperProps) => {
	const wrapperRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const element = wrapperRef.current
		if (!element) return

		gsap.fromTo(
			element,
			{ autoAlpha: 0, y: 50 },
			{
				duration: 1,
				autoAlpha: 1,
				y: 0,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: element,
					start: 'top 80%',
					end: 'bottom 20%',
					toggleActions: 'play none none none',
					once: true,
				},
			}
		)
	}, [])

	return <Component ref={wrapperRef as any}>{children}</Component>
}

export default FadeInWrapper
