import '../styles/globals.css'
import { CookieConsentProvider } from '@use-cookie-consent/react'

function MyApp({ Component, pageProps }) {
	return (
		<CookieConsentProvider>
			<Component {...pageProps} />
		</CookieConsentProvider>
	)
}

export default MyApp
