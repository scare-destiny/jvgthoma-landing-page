import { useCookieConsentContext } from '@use-cookie-consent/react'

const CookieBanner = () => {
	const { acceptAllCookies, declineAllCookies, acceptCookies } =
		useCookieConsentContext()
	const { consent } = useCookieConsentContext()

	return (
		<div>
			<div>
				<button onClick={acceptAllCookies}>Accept all</button>
				<button onClick={() => acceptCookies({ thirdParty: true })}>
					Accept third-party
				</button>
				<button onClick={() => acceptCookies({ firstParty: true })}>
					Accept first-party
				</button>
				<button onClick={declineAllCookies}>Reject all</button>
			</div>

			<div>
				<button onClick={declineAllCookies}>Decline all cookies</button>
			</div>
			<div>
				<div>
					{`Third-party cookies ${consent.thirdParty ? 'approved' : 'rejected'}`}
				</div>
				<div>
					{`First-party cookies ${consent.firstParty ? 'approved' : 'rejected'}`}
				</div>
			</div>
		</div>
	)
}

export default CookieBanner
