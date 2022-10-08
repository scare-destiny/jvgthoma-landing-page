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
	Footer,
} from '../components/index.js'
import image from '../public/solar-plant.jpg'

export default function Home() {
	return (
		<>
			<Head>
				<title>JvG Thoma</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='w-full '>
				<Hero
					image='https://www.pvknowhow.com/wp-content/uploads/2019/08/solar-cell-4045029_1920-e1623041372880.jpg'
					width='1200'
					height='634'
					priority
				/>
				<div className='content'>
					<div className='w-full border-box  pl-2 pr-2 '>
						<div className='mx-auto max-w-xl'>
							<div className='wrapper break-words text-center text-textColor '>
								<h2 className='text-2xl  '>
									<strong>Make Profit with your own Solar Module Production Line</strong>
								</h2>
							</div>
						</div>
					</div>
					<Form buttonText='Jetzt anmelden und Community-Bundle kostenlos erhalten 🍿' />
					<Divider />
					<Features />
					<Divider />
					<Hero image={image} width='1200' height='634' />
					<Divider />
					<Divider />
					{/* <CookieBanner/> */}
					<SectionTitle
						text='Starte jetzt 🙌
'
					/>
					<About
						sectionTitle='Über uns 👇'
						headingTitle='Wir helfen Software-Unternehmen mit ihrer Community zu skalieren
'
					/>
					<Testimonials />
					<Heading text='Lade dir jetzt das Community-Bundle kostenlos herunter' />
					<Form buttonText='Jetzt anmelden und Community-Bundle kostenlos erhalten 🍿' />
				</div>
			</main>
			<Footer />
		</>
	)
}
