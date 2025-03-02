'use client'
import { motion } from 'framer-motion'

interface FadeInSectionProps {
	children: React.ReactNode
	delay?: number
	duration?: number
}

export default function FadeInSection({
	children,
	delay = 0.3,
	duration = 1.5,
}: FadeInSectionProps) {
	return (
		<motion.div
			variants={{
				hidden: {
					opacity: 0,
					y: 150,
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
