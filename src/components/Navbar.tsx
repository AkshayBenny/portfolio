'use client'

import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { TransitionLink } from '@/app/animations/TransitionLink'
import ContactButton from './providers/ContactButtonWrapper'

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const navRef = useRef<HTMLElement>(null)
	const mobileMenuRef = useRef<HTMLDivElement>(null)

	const toggleMenu = () => setIsMenuOpen((prev) => !prev)

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				isMenuOpen &&
				navRef.current &&
				!navRef.current.contains(event.target as Node)
			) {
				setIsMenuOpen(false)
			}
		}

		document.addEventListener('mousedown', handleOutsideClick)
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick)
		}
	}, [isMenuOpen])

	useEffect(() => {
		const updateMenuState = () => {
			if (mobileMenuRef.current) {
				if (window.innerWidth >= 768) {
					gsap.set(mobileMenuRef.current, {
						height: 'auto',
						opacity: 1,
					})
				} else {
					if (isMenuOpen) {
						gsap.to(mobileMenuRef.current, {
							height: 'auto',
							opacity: 1,
							duration: 0.2,
							ease: 'power2.out',
						})
					} else {
						gsap.to(mobileMenuRef.current, {
							height: 0,
							opacity: 0,
							duration: 0.3,
							ease: 'power2.in',
						})
					}
				}
			}
		}

		updateMenuState()
		window.addEventListener('resize', updateMenuState)
		return () => window.removeEventListener('resize', updateMenuState)
	}, [isMenuOpen])

	useEffect(() => {
		if (!isMenuOpen) return

		const handleScroll = () => {
			// You can adjust the breakpoint as needed
			if (window.innerWidth < 768) {
				setIsMenuOpen(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [isMenuOpen])

	return (
		<nav
			ref={navRef}
			className='bg-[#0A0A0A] backdrop-blur-md fixed top-0 w-full z-40 font-robotoMono-regular px-6 md:px-0'>
			<div className='max-w-screen-xl flex justify-between flex-wrap mx-auto py-6 md:py-8'>
				<div className='flex items-center justify-between w-full md:w-fit'>
					<TransitionLink
						href='/'
						label='Akshay Benny'
					/>
					<button
						onClick={toggleMenu}
						type='button'
						className='inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
						aria-controls='mobile-menu'
						aria-expanded={isMenuOpen}>
						<span className='sr-only'>Open main menu</span>
						<svg
							className='w-5 h-5'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 17 14'>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M1 1h15M1 7h15M1 13h15'
							/>
						</svg>
					</button>
				</div>
				<div
					ref={mobileMenuRef}
					className='w-full md:block md:w-auto overflow-hidden'
					id='mobile-menu'>
					<ul className='flex flex-col gap-12 mt-12 rounded-lg text-lightText md:p-0 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent'>
						{/* <li>
							<TransitionLink
								href='/playground'
								label='Playground'
								className='w-full md:w-fit'
								onClick={() => setIsMenuOpen(false)}
							/>
						</li> */}
						<li>
							<TransitionLink
								href='/about'
								label='About'
								className='w-full md:w-fit'
								onClick={() => setIsMenuOpen(false)}
							/>
						</li>
						<li>
							<ContactButton>
								<TransitionLink
									label='Contact'
									className='w-full md:w-fit'
									onClick={() => setIsMenuOpen(false)}
								/>
							</ContactButton>
						</li>
						<li>
							<a
								href='/resume.pdf'
								download='AkshayBenny_Resume.pdf'>
								<TransitionLink
									label='Resume'
									className='w-full md:w-fit'
									onClick={() => setIsMenuOpen(false)}
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
