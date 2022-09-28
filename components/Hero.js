import Image from 'next/image'
import image from '/Users/zhenavenger/Programming and TCCC/Projects/Patrick/jvgthoma-landing/public/solar-plant.jpg'

const Hero = () => {
	return (
		<div className='w-full'>
			<Image src={image} alt='logo' />
		</div>
	)
}

export default Hero
