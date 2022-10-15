import Head from 'next/head'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import {
	Hero,
	Heading,
	Form,
	Divider,
	Features,
	Testimonials,
	Services,
	CookieBanner,
	Footer,
} from '../components/index.js'
import image from '../public/solar-plant.webp'
import heroImage from '../public/hero-image.webp'

const fadeIn = {
	visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
	hidden: { opacity: 0, scale: 1 },
}

export default function Home() {
	const control = useAnimation()
	const [ref, inView] = useInView({})

	useEffect(() => {
		if (inView) {
			control.start('visible')
		}
		{
			/* later enable conditional fadein based on oberserver */
		}
		// else {
		// 	control.start('hidden')
		// }
	}, [control, inView])

	return (
		<>
			<Head>
				<title>JvG Thoma</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{/* TODO Add fadein for all divs*/}
			<div>
				<main className='w-full'>
					<motion.div ref={ref} variants={fadeIn} initial='hidden' animate={control}>
						<Hero image={heroImage} width='608' height='321' priority='true' />
					</motion.div>

					<div className='w-full border-box  pl-2 pr-2 '>
						<div className='mx-auto max-w-xl'>
							<motion.div
								className='wrapper break-words text-center text-textColor'
								ref={ref}
								variants={fadeIn}
								initial='hidden'
								animate={control}
							>
								<h2 className='text-4xl font-bold tracking-tight  sm:text-5xl  '>
									<strong>Make Profit with your own Solar Module Production Line</strong>
								</h2>
							</motion.div>
						</div>
						<motion.div
							ref={ref}
							variants={fadeIn}
							initial='hidden'
							animate={control}
						>
							<Form buttonText='Sign Up Now ' />
						</motion.div>
						<Divider />
						<Features />
						<Hero image={image} width='608' height='321' />
						<Services />
						<Testimonials />
						<Divider />
						<Heading text='Make Profit with your own Solar Module Production Line' />
						<Form buttonText='Sign Up Now ' />
					</div>
					{/* <CookieBanner
						modalHeader='Cookie Einstellungen'
						modalText='Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und deine Erfahrung zu verbessern.'
					/> */}
				</main>
				<Footer />
			</div>
		</>
	)
}
