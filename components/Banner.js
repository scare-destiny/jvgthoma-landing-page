const Banner = ({
	heading,
	strongHeading,
	text,
	buttonText,
	secondButtonText,
}) => {
	return (
		<section>
			<div className='mx-auto max-w-screen-xl px-4 py-4  lg:items-center'>
				<div className='mx-auto max-w-xl text-center'>
					<h1 className='text-3xl font-extrabold sm:text-5xl'>
						{heading}
						<strong className='font-extrabold text-red-700 sm:block'>
							{strongHeading}
						</strong>
					</h1>

					<p className='mt-4 sm:text-xl sm:leading-relaxed'>{text}</p>

					{/* <div className='mt-8 flex flex-wrap justify-center gap-4'>
						<a
							className='block w-full rounded bg-buttonBgColor px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'
							href='/get-started'
						>
							{buttonText}
						</a>

						<a
							className='block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto'
							href='/about'
						>
							{secondButtonText}
						</a>
					</div> */}
				</div>
			</div>
		</section>
	)
}

export default Banner
