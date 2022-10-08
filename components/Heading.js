const Heading = ({ text }) => {
	return (
		<div className='w-full border-box pt-2  pb-2 pl-8 pr-8 '>
			<div className='mx-auto max-w-xl'>
				<div className='wrapper break-words text-center text-textColor '>
					<h2 className='text-4xl font-bold tracking-tight  sm:text-5xl  '>
						<strong>{text}</strong>
					</h2>
				</div>
			</div>
		</div>
	)
}

export default Heading
