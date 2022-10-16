const ButtonComponent = ({ buttonText }) => {
	return (
		<div className='mx-auto max-w-xl  sm:max-w-xl w-full mt-4'>
			<button
				type='submit'
				className='py-4 px-6 rounded-md mx-auto
				 max-w-md block cursor-pointer border-none
				 w-full font-semibold box-border button transition text-center 
				 transform active:scale-90 text-base leading-normal
				 text-buttonColor
				 bg-buttonBgColor
				 hover:bg-buttonBgColorDark
				 '
			>
				{buttonText}
			</button>
		</div>
	)
}

export default ButtonComponent
