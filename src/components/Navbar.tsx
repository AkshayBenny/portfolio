import Link from 'next/link'

export default function Navbar() {
	return (
		<nav className='font-robotoMono-regular flex items-center justify-between'>
			<div>
				<Link href='/'>Akshay/ Pro Dev</Link>
			</div>
			<ul className='flex items-center justify-end lg:gap-12'>
				<li>Work</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>Contact</li>
				<li>Resume</li>
			</ul>
		</nav>
	)
}
