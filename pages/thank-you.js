import {
	Hero,
	Heading,
	SectionTitle,
	ButtonComponent,
	Features,
	Banner,
	ShakingButton,
} from '../components/index'
import { useState, useEffect } from 'react'
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Textarea,
	Button,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import image from '../public/thank-you-image.webp'

const DynamicConfetti = dynamic(() => import('react-confetti'), {
	ssr: false,
})

const ThankYou = () => {
	const { width, height } = useWindowSize()
	const [run, setRun] = useState(true)
	const [numberOfPieces, setNumberOfPieces] = useState(200)

	useEffect(() => {
		setTimeout(() => setNumberOfPieces(0), 3000)
		setTimeout(() => setRun(false), 7000)
	}, [])

	return (
		<div>
			<Suspense fallback={`Loading...`}>
				<DynamicConfetti
					width={width}
					height={height}
					numberOfPieces={numberOfPieces}
					run={run}
				/>
			</Suspense>

			{/* <Confetti width={width} height={height} numberOfPieces={50} /> */}
			<div className=' border-box pt-6 pl-2 pr-2 pb-6 mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl'>
				{/* <SectionTitle
					text='Thank you for your request! Your course will be emailed to you right away ⚡️
'
				/> */}
				<Heading text='Thank you for your request! Your course will be emailed to you right away ⚡️' />
				<div className='w-full border-box pt-2 pl-4 pr-4 pb-10mx-auto max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl text-center'>
					<Hero image={image} priority={true} />
					<Banner
						heading='	Ready To Start?'
						strongHeading='			 Send Us Request Right Now.'
						// text='Tailor-made services and high-level performance made for you.'
						buttonText='Send Request'
						formLabelText='The solar industry offers many opportunities and right now it makes
						extremely good sense to enter the solar production sector - in fact,
						chances have never been better!'
						placeholder='Hello, I need a complete solar plant for 4Mw... '
					/>

					<Features />
					<Banner
						heading='	Still Not Sure?'
						strongHeading='			 Let Us Know.'
						// text='Tailor-made services and high-level performance made for you.'
						buttonText='Send My Question'
						formLabelText="We'll answer all your questions!"
						placeholder='I want to start a solar module production line, but need help and expertise...'
					/>
				</div>
			</div>
		</div>
	)
}

function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	})

	useEffect(() => {
		// only execute all the code below in client side
		if (typeof window !== 'undefined') {
			// Handler to call on window resize
			function handleResize() {
				// Set window width/height to state
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				})
			}

			// Add event listener
			window.addEventListener('resize', handleResize)

			// Call handler right away so state gets updated with initial window size
			handleResize()

			// Remove event listener on cleanup
			return () => window.removeEventListener('resize', handleResize)
		}
	}, []) // Empty array ensures that effect is only run on mount
	return windowSize
}

export default ThankYou
