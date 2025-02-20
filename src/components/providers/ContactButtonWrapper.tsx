'use client'

export default function ContactButton({
	children,
}: {
	children: React.ReactNode
}) {
	const email = 'akshaybennyajhuk.com'
	const subject = encodeURIComponent(
		"Portfolio Inquiry: Let's Build Something Amazing Together!"
	)
	const body = encodeURIComponent(
		'Hello,\n\nI would like to get in touch with you regarding...'
	)
	const href = `mailto:${email}?subject=${subject}&body=${body}`

	return <a href={href}>{children}</a>
}
