'use client'
import { useBgColor } from '../providers/BgColorProvider'

export default function BgColorWrapper({
	children,
}: {
	children: React.ReactNode
}) {
	const { bgColor } = useBgColor()
	return (
		<div style={{ backgroundColor: bgColor, minHeight: '100vh' }}>
			{children}
		</div>
	)
}
