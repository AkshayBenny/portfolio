export default function Experience() {
	return (
		<div className='w-full mt-80'>
			<h4 className='font-roboto-extrabold pb-4'>My Experience</h4>

			{/* Table container with top border and spacing */}
			<div className='border-t border-[#F5F5F5] border-opacity-10 mt-5 pt-10'>
				<table className='w-full table-auto border-collapse'>
					<thead>
						<tr></tr>
					</thead>

					<tbody className='align-top'>
						<tr>
							<td className='w-1/3 font-robotmono-bold text-lg p-3 text-lightText align-top'>
								Software Developer, Lascade
							</td>
							<td className='w-2/3 p-3 align-top'>
								<ul className='list-disc list-inside space-y-2 text-lightText'>
									<li>
										Leading the development of a SaaS
										product by designing and implementing
										the software architecture.
									</li>
									<li>
										The project employs a robust tech stack,
										including a Next.js frontend, Spring
										Boot backend, and PostgreSQL for
										database management.
									</li>
									<li>
										Leveraging AWS services for scalability
										and reliability.
									</li>
								</ul>
								<button className='shadow-inset-border px-5 py-[10px] mt-10'>
									View Works
								</button>
							</td>
						</tr>
						<tr>
							<td className='w-1/3 font-robotmono-bold text-lg p-3 text-lightText align-top'>
								Software Developer, Lascade
							</td>
							<td className='w-2/3 p-3 align-top'>
								<ul className='list-disc list-inside space-y-2 text-lightText'>
									<li>
										Leading the development of a SaaS
										product by designing and implementing
										the software architecture.
									</li>
									<li>
										The project employs a robust tech stack,
										including a Next.js frontend, Spring
										Boot backend, and PostgreSQL for
										database management.
									</li>
									<li>
										Leveraging AWS services for scalability
										and reliability.
									</li>
								</ul>
								<button className='shadow-inset-border px-5 py-[10px] mt-10'>
									View Works
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
