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
} from '../components/index.js'
import image from '/Users/zhenavenger/Programming and TCCC/Projects/Patrick/jvgthoma-landing/public/solar-plant.jpg'

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='w-full '>
				<Hero image={image} width='1200' height='634' />
				<div className='content'>
					<Heading
						text='Mit diesen Vorlagen haben wir unsere Community auf 2.500 aktive Mitglieder
					in nur 6 Monaten skaliert'
					/>
					<Form buttonText='Jetzt anmelden und Community-Bundle kostenlos erhalten 🍿' />
					<Divider />
					<Features />
					<Divider />
					<Hero
						image='https://perspective.imgix.net/618ad60c0b4af90020dd71d5.png'
						width='1200'
						height='634'
					/>
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
					<Heading text='Lade dir jetzt das Community-Bundle kostenlos herunter' />
					<Form buttonText='Jetzt anmelden und Community-Bundle kostenlos erhalten 🍿' />
				</div>
			</main>
		</>
	)
}
