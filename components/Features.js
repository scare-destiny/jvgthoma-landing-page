import { SectionTitle, Heading, Feature } from '../components/index'

const Features = () => {
	return (
		<>
			<SectionTitle text='Das wartet auf dich 🍿' />
			<Heading text='Das umfangreichste Community Bundle im deutsch-sprachigen Raum' />
			<div className='w-full border-box pt-6 pl-6 pr-6 pb-6'>
				<div className='mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl'>
					<div className='grid text-left grid-cols-1 gap-8 md:grid-cols-2'>
						<Feature
							icon='😀'
							strongText='
Getestete Community Akquise-Strategien: '
							text=' Erhalte alle Akquise-Strategien die du brauchst um neue Mitglieder für deine Community über organische Werbung zu gewinnen.'
						/>
						<Feature
							icon='😀'
							strongText='
Getestete Community Akquise-Strategien: '
							text=' Erhalte alle Akquise-Strategien die du brauchst um neue Mitglieder für deine Community über organische Werbung zu gewinnen.'
						/>
						<Feature
							icon='😀'
							strongText='
Getestete Community Akquise-Strategien: '
							text=' Erhalte alle Akquise-Strategien die du brauchst um neue Mitglieder für deine Community über organische Werbung zu gewinnen.'
						/>
						<Feature
							icon='😀'
							strongText='
Getestete Community Akquise-Strategien: '
							text=' Erhalte alle Akquise-Strategien die du brauchst um neue Mitglieder für deine Community über organische Werbung zu gewinnen.'
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Features
