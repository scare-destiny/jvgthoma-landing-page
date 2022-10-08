import { SectionTitle, Hero, Heading } from '../components/index.js'

const About = ({ sectionTitle, headingTitle }) => {
	return (
		<>
			<SectionTitle text={sectionTitle} />
			<Heading text={headingTitle} />
			<Hero
				image='
https://images.unsplash.com/photo-1633114072836-15d933c6d3a7'
				width={607}
				height={450}
			/>
		</>
	)
}

export default About
