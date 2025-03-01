'use client'
import { motion } from 'framer-motion'

interface FadeInSectionProps {
	children: React.ReactNode
	delay?: number
	duration?: number
}

export default function FadeInSection({
	children,
	delay = 0.5,
	duration = 0.5,
}: FadeInSectionProps) {
	return (
		<motion.div
			variants={{
				hidden: {
					opacity: 0,
					y: 15,
				},
				visible: {
					opacity: 1,
					y: 0,
				},
			}}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			transition={{ delay, type: 'spring', duration }}>
			{children}
		</motion.div>
	)
}
