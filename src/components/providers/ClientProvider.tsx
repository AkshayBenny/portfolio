import React from 'react'
// import SeoProvider from '@/components/SeoProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BgColorProvider from './BgColorProvider'
import BgColorWrapper from './BgColorWrapper'

export default function ClientProviders({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<BgColorProvider>
			<BgColorWrapper>
				{/* <SeoProvider /> */}

				<Navbar />
				<div className='max-w-screen-xl mx-auto py-10'>
					{children}
					<Footer />
				</div>
			</BgColorWrapper>
		</BgColorProvider>
	)
}
