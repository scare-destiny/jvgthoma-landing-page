const Heading = ({text}) => {
	return (
		<div className='wrapper break-words text-center text-textColor '>
			<h2 className='text-3xl  '>
				<strong>
				{text}
				</strong>
			</h2>
		</div>
	)
}

export default Heading