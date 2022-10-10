import { SectionTitle, Heading, Feature } from '../components/index'

const Features = () => {
	return (
		<>
			<SectionTitle text='Solar Panels for Hot Areas ☀️' />
			<Heading
				text='We are the Inventor of the Original DESERT Technology
'
			/>
			<div className='w-full border-box pt-6 pl-6 pr-6 pb-6'>
				<div className='mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl'>
					<div className='grid text-left grid-cols-1 gap-8 md:grid-cols-2'>
						<Feature
							icon='😀'
							strongText='
							90% of all panels wich are older than 12 years are installed in the mid of Europe / Germany.  '
							text=' This means all long term experiences with normal panels are made in moderate climates (0-25° C).'
						/>
						<Feature
							icon='😀'
							strongText='
							The J.v.G. Thoma DESERT solar panel is the only panel with a long term experience. '
							text='Over 10 years research, development and more than 5 years in mass production.'
						/>
						<Feature
							icon='😀'
							strongText='
							Our turnkey production is flexible for all types and all sizes. '
							text=' Also highly flexible for panel size.'
						/>
						<Feature
							icon='😀'
							strongText='
							We teach you step by step how to invest in solar module production '
							text='No knowledge needed, we are your partner for the whole project.

							'
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Features
