import React from 'react'
// import SeoProvider from '@/components/SeoProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ClientProviders({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			{/* <SeoProvider /> */}

			<div className='max-w-7xl mx-auto py-10'>
				<Navbar />
				{children}
				<Footer />
			</div>
		</>
	)
}
