export default function Button({
	type,
	text,
}: {
	type: 'light' | 'dark'
	text: string
}) {
	return (
		<button
			className={`group relative overflow-hidden px-5 py-2 transition 
		  ${type === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
			<div className='pointer-events-none absolute inset-0 z-20 border-2 border-white' />

			<span
				className={`relative z-30 transition-colors duration-300 
			${type === 'dark' ? 'group-hover:text-black' : 'group-hover:text-white'}`}>
				{text}
			</span>

			<div
				className='absolute inset-0 h-full w-full z-10 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0'
				style={{
					backgroundColor: type === 'dark' ? 'white' : 'black',
				}}></div>
		</button>
	)
}
