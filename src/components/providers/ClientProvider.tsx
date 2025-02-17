import React from 'react'
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
				<Navbar />
				<div className='max-w-screen-xl mx-auto px-6 md:px-0 md:py-10'>
					{children}
					<Footer />
				</div>
			</BgColorWrapper>
		</BgColorProvider>
	)
}
