const Banner = ({
	heading,
	strongHeading,
	text,
	buttonText,
	secondButtonText,
}) => {
	return (
		<section>
			<div class='mx-auto max-w-screen-xl px-4 py-4  lg:items-center'>
				<div class='mx-auto max-w-xl text-center'>
					<h1 class='text-3xl font-extrabold sm:text-5xl'>
						{heading}
						<strong class='font-extrabold text-red-700 sm:block'>
							{strongHeading}
						</strong>
					</h1>

					<p class='mt-4 sm:text-xl sm:leading-relaxed'>{text}</p>

					{/* <div class='mt-8 flex flex-wrap justify-center gap-4'>
						<a
							class='block w-full rounded bg-buttonBgColor px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'
							href='/get-started'
						>
							{buttonText}
						</a>

						<a
							class='block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto'
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
