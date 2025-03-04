'use client'
import { useRef, useEffect } from 'react'
import { useLenis } from 'lenis/react'

const lerp = (start: number, end: number, factor: number): number =>
	start + (end - start) * factor

interface ParallaxWrapperProps {
	children: React.ReactNode
}

export const ParallaxWrapper = ({ children }: ParallaxWrapperProps) => {
	const wrapperRef = useRef<HTMLDivElement | null>(null)
	const currentTranslateY = useRef(0)
	const targetTranslateY = useRef(0)
	const rafId = useRef<number | null>(null)

	useEffect(() => {
		const update = () => {
			currentTranslateY.current = lerp(
				currentTranslateY.current,
				targetTranslateY.current,
				0.1
			)
			if (wrapperRef.current) {
				wrapperRef.current.style.transform = `translateY(${currentTranslateY.current}px)`
			}
			rafId.current = requestAnimationFrame(update)
		}
		update()
		return () => {
			if (rafId.current) cancelAnimationFrame(rafId.current)
		}
	}, [])

	useLenis(({ scroll }) => {
		targetTranslateY.current = scroll * 0.1
	})

	return <div ref={wrapperRef}>{children}</div>
}
