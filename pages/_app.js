import Script from 'next/script'
import { CookieConsentProvider } from '@use-cookie-consent/react'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<CookieConsentProvider>
				<Component {...pageProps} />
			</CookieConsentProvider>
		</ChakraProvider>
	)
}

export default MyApp
