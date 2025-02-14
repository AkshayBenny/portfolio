import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				lightText: '#F5F5F5',
				darkText: '#0A0A0A',
			},
			fontFamily: {
				roboto: ['var(--font-roboto)', 'sans-serif'],
				robotoMono: ['var(--font-roboto-mono)', 'monospace'],
			},
			fontSize: {
				'16': '16px',
				'20': '20px',
				'64': '64px',
			},
		},
	},
	plugins: [],
} satisfies Config
