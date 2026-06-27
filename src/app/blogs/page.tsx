import FadeInWrapper from '@/app/animations/FadeInWrapper'
import { BlogData } from '@/types/blog' // Adjust path as needed
import Button from '@/components/Button'

export default function Blogs() {
	const blogs: BlogData[] = [
		{
			id: 0,
			title: 'Content Moderation With React',
			excerpt:
				'Learn how to secure React forms against offensive user-generated content using a high-performance, zero-dependency client-side architecture alongside React Hook Form.',
			date: 'May 27, 2026',
			readTime: '3 min read',
			url: 'https://medium.com/@akshaybennyajh/building-a-secure-react-profanity-filter-e7ad834c715f',
		},
		{
			id: 1,
			title: 'Next.js Content Moderation: Building a Production-Ready Filter with React Hook Form and Edge Middleware',
			excerpt:
				'Discover how to implement comprehensive multi-language content moderation using Next.js Edge Middleware and Server Actions, keeping your client bundle entirely clean.',
			date: 'June 27, 2026',
			readTime: '5 min read',
			url: 'https://medium.com/@akshaybennyajh/next-js-content-moderation-building-a-production-ready-filter-with-react-hook-form-and-edge-ec6faf8ca97d?postPublishedType=repub',
		},
	]

	return (
		<div className='w-full md:mt-80 pt-40'>
			<FadeInWrapper>
				<h4 className='font-roboto-extrabold'>My Articles</h4>
			</FadeInWrapper>
			<div className='md:border-t border-[#F5F5F5] border-opacity-10 mt-5 pt-4 md:pt-10'>
				{/* Desktop Layout: Table */}
				<div className='hidden md:block'>
					<table className='w-full table-auto border-separate border-spacing-y-10'>
						<tbody className='align-top'>
							{blogs.map((blog) => (
								<FadeInWrapper
									key={blog.id}
									as='tr'>
									<td className='w-1/3 font-robotoMono-bold text-lg p-3 text-lightText align-top'>
										<span className='block text-white mb-2'>
											{blog.date}
										</span>
										<span className='text-sm opacity-70'>
											{blog.readTime}
										</span>
									</td>
									<td className='w-2/3 p-3 align-top'>
										<h3 className='font-robotoMono-bold text-xl mb-4'>
											<a
												href={blog.url}
												target='_blank'
												rel='noopener noreferrer'
												className='relative inline-block'>
												{blog.title}
											</a>
										</h3>
										<p className='text-lightText mb-6 max-w-2xl'>
											{blog.excerpt}
										</p>
										<a
											href={blog.url}
											target='_blank'
											rel='noopener noreferrer'
											className='inline-block'>
											<Button
												text='Read on Medium'
												type='light'
											/>
										</a>
									</td>
								</FadeInWrapper>
							))}
						</tbody>
					</table>
				</div>

				{/* Mobile Layout: Stacked */}
				<div className='block md:hidden space-y-16 pt-8'>
					{blogs.map((blog) => (
						<FadeInWrapper key={blog.id}>
							<div className='mb-10'>
								<div className='font-robotoMono-regular text-sm text-lightText opacity-80 mb-2 flex justify-between border-b border-[#F5F5F5] border-opacity-10 pb-2'>
									<span>{blog.date}</span>
									<span>{blog.readTime}</span>
								</div>
								<h3 className='font-robotoMono-bold text-lg pt-4 pb-3'>
									<a
										href={blog.url}
										target='_blank'
										rel='noopener noreferrer'
										className='relative inline-block'>
										{blog.title}
									</a>
								</h3>
								<p className='text-lightText mb-6 text-sm leading-relaxed'>
									{blog.excerpt}
								</p>
								<a
									href={blog.url}
									target='_blank'
									rel='noopener noreferrer'
									className='w-full block'>
									<Button
										text='Read on Medium'
										type='light'
									/>
								</a>
							</div>
						</FadeInWrapper>
					))}
				</div>
			</div>
		</div>
	)
}
