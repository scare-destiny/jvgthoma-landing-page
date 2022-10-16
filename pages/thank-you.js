import { Hero, Heading, SectionTitle } from '../components/index'
import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'

const ThankYou = () => {
	const { width, height } = useWindowSize()
	console.log(`width is ${width / 2} and height is ${height / 2}`)
	return (
		<div>
			<Confetti width={width} height={height} numberOfPieces={50} />
			<div className=' border-box pt-6 pl-4 pr-4 pb-6 mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl'>
				<Heading text='Super! Dein Bundle wird gleich per Email an dich versendet 🦄'></Heading>
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
		function handleResize() {
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
	}, []) // Empty array ensures that effect is only run on mount
	return windowSize
}

export default ThankYou
