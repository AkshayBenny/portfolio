'use client'
import { BgColorContextType } from '@/types/bgColor'
import {
	createContext,
	useEffect,
	useState,
	ReactNode,
	useContext,
} from 'react'
const BgColorContext = createContext<BgColorContextType>({ bgColor: '#ffffff' })
export const useBgColor = () => useContext(BgColorContext)
const BgColorProvider = ({ children }: { children: ReactNode }) => {
	const [bgColor, setBgColor] = useState<string>('#ffffff')
	useEffect(() => {
		const storedColor = sessionStorage.getItem('bgColor')
		if (storedColor) {
			setBgColor(storedColor)
		} else {
			const colors = ['#0A0A0A',]
			//  '#020122', '#14281D'
			const randomColor =
				colors[Math.floor(Math.random() * colors.length)]
			setBgColor(randomColor)
			sessionStorage.setItem('bgColor', randomColor)
		}
	}, [])
	return (
		<BgColorContext.Provider value={{ bgColor }}>
			{children}
		</BgColorContext.Provider>
	)
}
export default BgColorProvider
