import Image from 'next/image'

const Hero = ({ image, width, height, priority }) => {
	return (
		<div className='mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl py-6  sm:py-6 md:px-20 md:py-10'>
			<Image
				src={image}
				alt='logo'
				layout='responsive'
				width={width}
				height={height}
				priority={priority}
			/>
		</div>
	)
}

export default Hero
