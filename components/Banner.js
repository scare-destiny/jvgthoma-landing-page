import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Textarea,
	Button,
} from '@chakra-ui/react'

import ShakingButton from './ShakingButton'
const Banner = ({
	heading,
	strongHeading,
	text,
	buttonText,
	secondButtonText,
	formLabelText,
	placeholder,
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

					<p className=' sm:text-xl sm:leading-relaxed'>{text}</p>
				</div>
			</div>
			<FormControl py={1}>
				<Textarea
					placeholder={placeholder}
					focusBorderColor='blue.300'
					isRequired
				/>
				<ShakingButton buttonText={buttonText} />
				<FormLabel py={2} textAlign='center'>
					{formLabelText}
				</FormLabel>
			</FormControl>
		</section>
	)
}

export default Banner
