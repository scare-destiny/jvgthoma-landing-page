import Script from 'next/script'
import { CookieConsentProvider } from '@use-cookie-consent/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<CookieConsentProvider>
			<Script
				id='google-tag-manager'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
					(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-MGD5STT');
					`,
				}}
			/>
			<Component {...pageProps} />
		</CookieConsentProvider>
	)
}

export default MyApp
