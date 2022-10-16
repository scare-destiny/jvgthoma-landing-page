import {
	Hero,
	Heading,
	SectionTitle,
	ButtonComponent,
	Features,
	Banner,
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

	useEffect(() => {
		setTimeout(() => setRun(false), 10000)
	}, [])

	return (
		<div>
			<Suspense fallback={`Loading...`}>
				<DynamicConfetti
					width={width}
					height={height}
					numberOfPieces={20}
					run={run}
				/>
			</Suspense>

			{/* <Confetti width={width} height={height} numberOfPieces={50} /> */}
			<div className=' border-box pt-6 pl-2 pr-2 pb-6 mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl'>
				<SectionTitle text='Super! Dein Bundle wird gleich per Email an dich versendet 🦄' />
				<Heading text='Du möchtest wissen, wie du mit einer Community treue Fans gewinnst?' />
				<div className='w-full border-box pt-2 pl-4 pr-4 pb-10mx-auto max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl text-center'>
					<Hero image={image} />
					<Banner
						heading='	Understand User Flow.'
						strongHeading='			Increase Conversion.'
						text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!'
						buttonText='	Get Started'
						secondButtonText='Learn More'
					/>
					<FormControl py={4}>
						<FormLabel>Schau dir jetzt das Video an und erfahre mehr:</FormLabel>
						<Textarea
							placeholder='Here is a sample placeholder'
							focusBorderColor='blue.300'
						/>
						<FormHelperText>Select only if you&apos;re a fan.</FormHelperText>
						<Button mt={4} colorScheme='red' type='submit'>
							Submit
						</Button>
					</FormControl>
					{/* <Button buttonText='Sign Up Now 🍿' /> */}
					<Features />
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
