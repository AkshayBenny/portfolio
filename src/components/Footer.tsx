import FadeInSection from '@/app/animations/FadeInSection'

export default function Footer() {
	return (
		<>
			<FadeInSection>
				<div className='w-full py-80'>
					<p className='font-robotoMono-regular text-center'>
						Made it this far? Lets build something together.
					</p>
					<h4 className='font-roboto-extrabold text-center'>
						I&apos;m open to work full time!
					</h4>
				</div>
			</FadeInSection>
			<footer className='flex items-center  justify-center flex-col md:flex-row md:justify-between'>
				<ul className='flex justify-center items-center md:justify-start gap-12'>
					<li>
						<a
							href='https://www.linkedin.com/in/akshaybenny'
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
					<li>
						<a
							href='/resume.pdf'
							download='AkshayBenny_Resume.pdf'>
							Resume
						</a>
					</li>
				</ul>
				<p className='my-12 md:my-0 text-center md:text-right'>
					Design credits @akhil_tj
				</p>
			</footer>
		</>
	)
}
