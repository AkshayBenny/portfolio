'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Image from 'next/image'

gsap.registerPlugin(ScrollToPlugin)

const BackToTopButton: React.FC = () => {
	const btnRef = useRef<HTMLButtonElement>(null)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 300) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		if (btnRef.current) {
			gsap.to(btnRef.current, {
				opacity: isVisible ? 1 : 0,
				pointerEvents: isVisible ? 'auto' : 'none',
				duration: 0.3,
				ease: 'power2.out',
			})
		}
	}, [isVisible])

	const scrollToTop = () => {
		gsap.to(window, {
			scrollTo: { y: 0, autoKill: true },
			duration: 0.5,
			ease: 'power2.out',
		})
	}

	return (
		<button
			ref={btnRef}
			onClick={scrollToTop}
			className='fixed bottom-12 right-12 p-3 bg-[#1a1a1a]  rounded-full hover:bg-gray-900 focus:outline-none'
			aria-label='Back to Top'>
			<Image
				src='/arrow_up.svg'
				height={24}
				width={24}
				alt='Arrow up icon'
			/>
		</button>
	)
}

export default BackToTopButton
