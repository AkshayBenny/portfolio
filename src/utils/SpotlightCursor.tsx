'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function InvertCursor() {
	const circleRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// Center the element relative to its own dimensions
		if (circleRef.current) {
			gsap.set(circleRef.current, { xPercent: -50, yPercent: -50 })
		}

		function handleMouseMove(e: MouseEvent) {
			gsap.to(circleRef.current, {
				x: e.clientX,
				y: e.clientY,
				duration: 0.6,
				ease: 'power2.out',
			})
		}

		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	return (
		<div
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
