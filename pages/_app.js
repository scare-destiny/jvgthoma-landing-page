import Script from 'next/script'
import { CookieConsentProvider } from '@use-cookie-consent/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<CookieConsentProvider>
			<Component {...pageProps} />
		</CookieConsentProvider>
	)
}

export default MyApp
