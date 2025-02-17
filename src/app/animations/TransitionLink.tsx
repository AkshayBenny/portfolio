'use client'

import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from '../../utils/animations'

interface Props {
	href: string
	label: string
	className?: string
	onClick?: () => void
}

export const TransitionLink = ({
	href,
	label,
	className = '',
	onClick,
}: Props) => {
	const router = useRouter()
	const pathname = usePathname()

	const handleTransition = async () => {
		if (pathname !== href) {
			animatePageOut(href, router)
		}
		if (onClick) onClick()
	}

	return (
		<button
			onClick={handleTransition}
			className={`${className}`}>
			{label}
		</button>
	)
}
