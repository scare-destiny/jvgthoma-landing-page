import Heading from './Heading'
import Button from './Button'

const Services = () => {
	return (
		<section className='text-gray-600 body-font'>
			<div className='w-full container py-5 mx-auto'>
				<div className='text-center mb-8'>
					<Heading
						text='20 - 500 MW Solar Turnkey Lines with DESERT Technology
'
					/>
					<p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-sectionTitleColor'>
						We are a full service company for solar module production lines for:
					</p>
				</div>
				<div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2  align-center'>
					<div className='p-2 sm:w-1/2 w-full'>
						<div className='bg-gray-100 rounded flex p-4 h-full items-center'>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='3'
								className='text-buttonBgColor  w-6 h-6 flex-shrink-0 mr-4'
								viewBox='0 0 24 24'
							>
								<path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
								<path d='M22 4L12 14.01l-3-3'></path>
							</svg>
							<span className='title-font font-medium'>
								New or refurbished equipment
							</span>
						</div>
					</div>
					<div className='p-2 sm:w-1/2 w-full'>
						<div className='bg-gray-100 rounded flex p-4 h-full items-center'>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='3'
								className='text-buttonBgColor  w-6 h-6 flex-shrink-0 mr-4'
								viewBox='0 0 24 24'
							>
								<path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
								<path d='M22 4L12 14.01l-3-3'></path>
							</svg>
							<span className='title-font font-medium'>
								Completely automated solutions beginning from 100 MW
							</span>
						</div>
					</div>
					<div className='p-2 sm:w-1/2 w-full'>
						<div className='bg-gray-100 rounded flex p-4 h-full items-center'>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='3'
								className='text-buttonBgColor  w-6 h-6 flex-shrink-0 mr-4'
								viewBox='0 0 24 24'
							>
								<path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
								<path d='M22 4L12 14.01l-3-3'></path>
							</svg>
							<span className='title-font font-medium'>
								Small scale lines for cheap start of the business
							</span>
						</div>
					</div>
					<div className='p-2 sm:w-1/2 w-full'>
						<div className='bg-gray-100 rounded flex p-4 h-full items-center'>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='3'
								className='text-buttonBgColor  w-6 h-6 flex-shrink-0 mr-4'
								viewBox='0 0 24 24'
							>
								<path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
								<path d='M22 4L12 14.01l-3-3'></path>
							</svg>
							<span className='title-font font-medium'>5 - 1200 MW Lines</span>
						</div>
					</div>
					<div className='p-2 sm:w-1/2 w-full'>
						<div className='bg-gray-100 rounded flex p-4 h-full items-center'>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='3'
								className='text-buttonBgColor  w-6 h-6 flex-shrink-0 mr-4'
								viewBox='0 0 24 24'
							>
								<path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
								<path d='M22 4L12 14.01l-3-3'></path>
							</svg>
							<span className='title-font font-medium'>
								Comprehensive engineering services ranging from design to installation
								and implementation control
							</span>
						</div>
					</div>
					<div className='p-2 sm:w-1/2 w-full'>
						<div className='bg-gray-100 rounded flex p-4 h-full items-center'>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='3'
								className='text-buttonBgColor  w-6 h-6 flex-shrink-0 mr-4'
								viewBox='0 0 24 24'
							>
								<path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
								<path d='M22 4L12 14.01l-3-3'></path>
							</svg>
							<span className='title-font font-medium'>The Catcher In The Rye</span>
						</div>
					</div>
				</div>
				<Button buttonText='Sign Up' />
			</div>
		</section>
	)
}

export default Services
