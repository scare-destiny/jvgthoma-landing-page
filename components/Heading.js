const Heading = ({ text }) => {
	return (
		<div className='w-full border-box pt-2 pl-8 pr-8 pb-4'>
			<div className='mx-auto max-w-xl'>
				<div className='wrapper break-words text-center text-textColor '>
					<h2 className='text-3xl  '>
						<strong>{text}</strong>
					</h2>
				</div>
			</div>
		</div>
	)
}

export default Heading
