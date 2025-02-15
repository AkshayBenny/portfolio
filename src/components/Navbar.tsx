import { TransitionLink } from '@/utils/TransitionLink'

export default function Navbar() {
	return (
		<nav className='font-robotoMono-regular flex items-center justify-between'>
			<div>
				<TransitionLink
					href='/'
					label='Akshay/ Pro Dev'
				/>
			</div>
			<ul className='flex items-center justify-end lg:gap-12'>
				<li>Work</li>
				<li>
					<TransitionLink
						href='/about'
						label='About'
					/>
				</li>
				<li>Contact</li>
				<li>Resume</li>
			</ul>
		</nav>
	)
}
