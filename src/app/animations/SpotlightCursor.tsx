'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function InvertCursor() {
	const circleRef = useRef<HTMLDivElement>(null)

	const isMobile =
		typeof window !== 'undefined' &&
		window.matchMedia &&
		window.matchMedia('(pointer: coarse)').matches

	useEffect(() => {
		if (isMobile) return

		if (circleRef.current) {
			gsap.set(circleRef.current, {
				xPercent: -50,
				yPercent: -50,
				scale: 1,
			})
		}

		function handleMouseMove(e: MouseEvent) {
			gsap.to(circleRef.current, {
				x: e.clientX,
				y: e.clientY,
				duration: 0.3,
				ease: 'power2.out',
			})

			const targetEl = document.elementFromPoint(e.clientX, e.clientY)
			const isClickable = targetEl
				? Boolean(
						targetEl.closest(
							'a, button, input, img, [role="button"], .clickable'
						)
				  )
				: false

			gsap.to(circleRef.current, {
				scale: isClickable ? 1.5 : 1,
				duration: 0.56,
				ease: 'power2.out',
			})
		}

		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [isMobile])

	if (isMobile) return null

	return (
		<div
			className='hidden md:flex'
			ref={circleRef}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '200px',
				height: '200px',
				borderRadius: '50%',

				backgroundColor: 'rgba(255,255,255,0.3)',
				backdropFilter: 'invert(1)',
				WebkitBackdropFilter: 'invert(1)',
				pointerEvents: 'none',
				zIndex: 9999,
			}}
		/>
	)
}
