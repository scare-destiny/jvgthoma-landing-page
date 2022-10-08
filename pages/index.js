import Head from 'next/head'
import {
	Hero,
	Heading,
	Form,
	Divider,
	CookieBanner,
	Features,
	SectionTitle,
	About,
	Testimonials,
	Services,
	Footer,
} from '../components/index.js'
import image from '../public/solar-plant.jpg'

export default function Home() {
	return (
		<>
			<Head>
				<title>JvG Thoma</title>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='w-full border-box'>
				<Hero
					image='https://www.pvknowhow.com/wp-content/uploads/2019/08/solar-cell-4045029_1920-e1623041372880.jpg'
					width='1200'
					height='634'
					priority='true'
				/>
				<div className='content'>
					<div className='w-full border-box  pl-2 pr-2 '>
						<div className='mx-auto max-w-xl'>
							<div className='wrapper break-words text-center text-textColor '>
								<h2 className='text-4xl font-bold tracking-tight  sm:text-5xl  '>
									<strong>Make Profit with your own Solar Module Production Line</strong>
								</h2>
							</div>
						</div>
					</div>
					<Form buttonText='Sign Up Now 🍿' />
					<Divider />
					<Features />

					<Hero image={image} width='1200' height='634' />
					<Services />
					{/* <CookieBanner/> */}
					{/* <SectionTitle
						text='Starte jetzt 🙌
'
					/> */}
					{/* <About
						sectionTitle='Über uns 👇'
						headingTitle='Wir helfen Software-Unternehmen mit ihrer Community zu skalieren
'
					/> */}
					<Testimonials />
					<Divider />
					<Heading text='Make Profit with your own Solar Module Production Line' />
					<Form buttonText='Sign Up Now 🍿' />
				</div>
			</main>
			<Footer />
		</>
	)
}
