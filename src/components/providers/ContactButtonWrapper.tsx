'use client'

export default function ContactButton({
	children,
}: {
	children: React.ReactNode
}) {
	const email = 'akshaybennyajhuk.com'

	const body = encodeURIComponent(
		'Hello,\n\nI would like to get in touch with you regarding...'
	)
	const href = `mailto:${email}?body=${body}`

	return <a href={href}>{children}</a>
}
