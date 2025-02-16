'use client'

import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from '../../utils/animations'

interface Props {
	href: string
	label: string
}

export const TransitionLink = ({ href, label }: Props) => {
	const router = useRouter()
	const pathname = usePathname()

	const handleTransition = async () => {
		if (pathname !== href) {
			animatePageOut(href, router)
		}
	}

	return <button onClick={handleTransition}>{label}</button>
}
