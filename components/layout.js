import CookieBanner from './CookieBanner'

export default function Layout({ children }) {
	return (
		<>
			<CookieBanner
				modalHeader='Cookie Einstellungen'
				modalText='Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und deine Erfahrung zu verbessern.'
			/>
			<main>{children}</main>
		</>
	)
}
