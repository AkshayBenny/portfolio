interface AnimatedTextProps {
	href?: string
	text: string
	className?: string
	type?: 'light' | 'dark'
}

export function AnimatedText({
	href,
	text,
	className = '',
	type = 'dark',
}: AnimatedTextProps) {
	const baseTextClasses = 'relative z-20 transition-colors duration-300'
	const hoverTextClasses =
		type === 'dark' ? 'group-hover:text-black' : 'group-hover:text-white'
	const overlayStyle = {
		backgroundColor: type === 'dark' ? 'white' : 'black',
	}
	const overlayClasses =
		'absolute inset-0 h-full w-full z-10 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0'

	const content = (
		<span
			className={`relative z-20 px-2 ${baseTextClasses} ${hoverTextClasses}`}>
			{text}
		</span>
	)

	return href ? (
		<a
			href={href}
			target='_blank'>
			<p
				className={`group relative inline-block overflow-hidden ${className}`}>
				{content}
				<span
					className={`${overlayClasses} px-2`}
					style={overlayStyle}></span>
			</p>
		</a>
	) : (
		<span className={`relative inline-block ${className}`}>{content}</span>
	)
}
