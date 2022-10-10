import { SectionTitle } from '../components/index'

const Testimonials = () => {
	return (
		<section className='bg' id='referenzen'>
			<div className='px-2 py-6 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
				<div className='items-end sm:flex justify-center text-center'>
					<div className='max-w-xl'>
						<h2 className='text-4xl font-bold tracking-tight  sm:text-5xl'>
							What Our Customers Say
						</h2>
						{/* 
						<SectionTitle text='	Am besten lässt man andere über sich sprechen' /> */}
					</div>
				</div>
				<div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2'>
					<blockquote className='flex flex-col justify-between h-full p-6 bg-white'>
						<div>
							<div className='flex space-x-0.5 text-green-500'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
							</div>

							<div className='mt-4'>
								<h5 className='text-xl font-bold text-textColor sm:text-2xl'>
									Patrick Answered Every Question I Had
								</h5>

								<p className='mt-4 text-gray-600'>
									For me solar business was completely new, so I had to get the full
									picture of this business. Patrick never gave me the feeling that my
									questions are stupid and I got an answer to every problem.
								</p>
							</div>
						</div>

						<footer className='mt-8 text-gray-500'>Mohammed S.</footer>
					</blockquote>

					<blockquote className='flex flex-col justify-between h-full p-6 bg-white'>
						<div>
							<div className='flex space-x-0.5 text-green-500'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
							</div>

							<div className='mt-4'>
								<h5 className='text-xl font-bold text-textColor sm:text-2xl'>
									Quality service. Quality products. Quality people.
								</h5>

								<p className='mt-4 text-gray-600'>
									I had a great experience with the company doing business and i would do
									business again with them.
								</p>
							</div>
						</div>

						<footer className='mt-8 text-gray-500'>Juan Manuel Mora</footer>
					</blockquote>

					<blockquote className='flex flex-col justify-between h-full p-6 bg-white'>
						<div>
							<div className='flex space-x-0.5 text-green-500'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
							</div>

							<div className='mt-4'>
								<h5 className='text-xl font-bold text-textColor sm:text-2xl'>
									VERY DETAILED INFORMATION
								</h5>

								<p className='mt-4 text-gray-600'>
									The information was very detailed and I got answers to every question I
									had. I liked the direct WhatsApp support. Thanks a lot!!!
								</p>
							</div>
						</div>

						<footer className='mt-8 text-gray-500'>Tirdat Hofmann</footer>
					</blockquote>

					<blockquote className='flex flex-col justify-between h-full p-6 bg-white'>
						<div>
							<div className='flex space-x-0.5 text-green-500'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
							</div>

							<div className='mt-4'>
								<h5 className='text-xl font-bold text-textColor sm:text-2xl'>
									Place to go for partnership, turn-key production factory and for any
									quality solar installations
								</h5>

								<p className='mt-4 text-gray-600'>
									J.v.G technology is a company to trust with their tech know how and
									with their first class High Tech Equipments, Quality Experienced
									professionals is a place to go for partnership, turn-key production
									factory and for any quality solar installations
								</p>
							</div>
						</div>

						<footer className='mt-8 text-gray-500'>Uzoma Samson</footer>
					</blockquote>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
