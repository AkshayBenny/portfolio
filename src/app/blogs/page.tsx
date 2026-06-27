import FadeInWrapper from '@/app/animations/FadeInWrapper'
import { AnimatedText } from '@/app/animations/AnimateText'
import { BlogData } from '@/types/blog' // Adjust path as needed
import Button from '@/components/Button'

export default function Blogs() {
	const blogs: BlogData[] = [
		{
			id: 0,
			title: 'Understanding React Server Components',
			excerpt:
				'A deep dive into how Server Components change the way we build Next.js applications, offering better performance and smaller bundle sizes.',
			date: 'Oct 12, 2025',
			readTime: '5 min read',
			url: 'https://medium.com/@yourusername/react-server-components',
		},
		{
			id: 1,
			title: 'Optimizing Spring Boot Backends for Scale',
			excerpt:
				'Practical tips and architectural patterns for ensuring your Spring Boot microservices can handle high traffic efficiently.',
			date: 'Aug 04, 2025',
			readTime: '8 min read',
			url: 'https://medium.com/@yourusername/spring-boot-scale',
		},
		{
			id: 2,
			title: 'Why I Prefer Drizzle ORM over Prisma',
			excerpt:
				'Comparing the two popular TypeScript ORMs and why Drizzle has become my go-to choice for edge-compatible database management.',
			date: 'Jun 22, 2025',
			readTime: '6 min read',
			url: 'https://medium.com/@yourusername/drizzle-vs-prisma',
		},
	]

	return (
		<div className='w-full md:mt-80'>
			<FadeInWrapper>
				<h4 className='font-roboto-extrabold'>My Articles</h4>
			</FadeInWrapper>
			<div className='border-t border-[#F5F5F5] border-opacity-10 mt-5 pt-4 md:pt-10'>
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
											<AnimatedText
												href={blog.url}
												text={blog.title}
												type='dark'
											/>
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
									{blog.title}
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
