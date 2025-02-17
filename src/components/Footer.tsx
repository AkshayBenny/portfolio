export default function Footer() {
	return (
		<>
			<div className='w-full py-80'>
				<p className='font-robotoMono-regular text-center'>
					Made this far? Lets build something together.
				</p>
				<h4 className='font-roboto-extrabold text-center'>
					I&apos;m open to work full time!
				</h4>
			</div>
			<footer className='flex items-center  justify-center flex-col md:flex-row md:justify-between'>
				<ul className='flex justify-center items-center md:justify-start gap-12'>
					<li>
						<a
							href='www.linkedin.com/in/akshaybenny'
							target='_blank'>
							Linkedin
						</a>
					</li>
					<li>
						<a
							href='https://github.com/AkshayBenny'
							target='_blank'>
							Github
						</a>
					</li>
					<li>Resume</li>
				</ul>
				<p className="my-12 md:my-0">Designed with 0 caffeine by Akhil T J</p>
			</footer>
		</>
	)
}
