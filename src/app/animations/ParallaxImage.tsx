'use client'

import { useLenis } from 'lenis/react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const lerp = (start: number, end: number, factor: number): number =>
	start + (end - start) * factor

interface Props {
	src: string
	alt: string
	className?: string
	height?: number
	width?: number
	priority?: boolean
	quality?: number
	unoptimized?: boolean
}

interface Bounds {
	top: number
	bottom: number
}

export const ParallaxImage = ({
	src,
	alt,
	className = '',
	height,
	width,
	priority,
	quality,
	unoptimized,
}: Props) => {
	const imageRef = useRef<HTMLImageElement | null>(null)
	const bounds = useRef<Bounds | null>(null)
	const currentTranslateY = useRef(0)
	const targetTranslateY = useRef(0)
	const refId = useRef<number | null>(null)

	useEffect(() => {
		const updateBounds = () => {
			if (imageRef.current) {
				const rect = imageRef.current.getBoundingClientRect()
				bounds.current = {
					top: rect.top + window.scrollY,
					bottom: rect.bottom + window.scrollY,
				}
			}
		}

		updateBounds()
		window.addEventListener('resize', updateBounds)

		const animate = () => {
			if (imageRef.current) {
				currentTranslateY.current = lerp(
					currentTranslateY.current,
					targetTranslateY.current,
					0.1
				)

				if (
					Math.abs(
						currentTranslateY.current - targetTranslateY.current
					) > 0.1
				) {
					imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.25)`
				}
			}
			refId.current = requestAnimationFrame(animate)
		}
		animate()
		return () => {
			window.removeEventListener('resize', updateBounds)
			if (refId.current) {
				cancelAnimationFrame(refId.current)
			}
		}
	}, [])

	useLenis(({ scroll }) => {
		if (!bounds.current) return
		const relativeScroll = scroll - bounds.current.top
		targetTranslateY.current = relativeScroll * 0.1
	})
	return (
		<Image
			ref={imageRef}
			src={src}
			alt={alt}
			width={width ? width : 100}
			height={height ? height : 100}
			className={className}
			style={{
				willChange: 'transform',
				transform: 'translateY(0) scale(1.25)',
			}}
		/>
	)
}
