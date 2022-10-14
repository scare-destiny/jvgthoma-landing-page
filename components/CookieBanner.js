import { useState, useEffect, useRef } from 'react'
import { useCookieConsentContext } from '@use-cookie-consent/react'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	Text,
	ModalBody,
	Link,
	useDisclosure,
	Button,
	Flex,
	HStack,
	VStack,
	Switch,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from '@chakra-ui/react'
import Cookies from 'js-cookie'
import NextLink from 'next/link'

const CookieBanner = ({ modalHeader, modalText }) => {
	// useEffect(() => {
	// 	console.log('test!!')
	// 	if (!isClientConsentCookieExists()) {
	// 		onOpen()
	// 	}
	// }, [])

	const { acceptAllCookies, declineAllCookies, acceptCookies } =
		useCookieConsentContext()
	const { consent } = useCookieConsentContext()

	const { isOpen, onOpen, onClose } = useDisclosure()

	const initialRef = useRef(null)

	const generateClientConsentCookie = () => {
		if (!isClientConsentCookieExists()) {
			Cookies.set('COOKIE_CONSENT_PERMISSION', 'true')
		}
	}

	const isClientConsentCookieExists = () => {
		if (Cookies.get('COOKIE_CONSENT_PERMISSION')) {
			return true
		}
		return false
	}

	const toggleMarketingCookies = () => {
		// setCheckedAll(!thirdPartyCookiesChecked)
		!consent.thirdParty
			? acceptCookies({ thirdParty: true })
			: acceptCookies({ thirdParty: false })
	}

	const handleAllCookies = () => {
		acceptAllCookies()
		onClose()
		generateClientConsentCookie()
	}

	const handleAllCookiesDecline = () => {
		declineAllCookies()
		acceptCookies({ necessary: true })
		onClose()
		generateClientConsentCookie()
	}

	const OverlayOne = () => (
		<ModalOverlay
			bg='rgba(0, 0, 0, 0.2)'
			backdropFilter='auto'
			backdropInvert='10%'
			backdropBlur='2px'
		/>
	)
	const [overlay, setOverlay] = useState(<OverlayOne />)
	return (
		<>
			<Modal
				size='sm'
				isOpen={isOpen}
				closeOnOverlayClick={false}
				isCentered
				blockScrollOnMount={false}
				initialFocusRef={initialRef}
			>
				{overlay}
				<ModalContent ref={initialRef}>
					<ModalHeader>{modalHeader}</ModalHeader>
					<ModalBody>
						<Text size='sm' py={2}>
							{modalText}
						</Text>
						<Flex gap={2}>
							<NextLink href='/home' passHref>
								<Link style={{ textDecoration: 'underline' }}>Impressum</Link>
							</NextLink>
							<NextLink href='/home' passHref>
								<Link style={{ textDecoration: 'underline' }}>Datenschutz</Link>
							</NextLink>
							<NextLink href='/home' passHref>
								<Link style={{ textDecoration: 'underline' }}>Cookie Richtlinien</Link>
							</NextLink>
						</Flex>
						<HStack spacing={8}>
							<Accordion pt='4' allowToggle w='100%'>
								<AccordionItem>
									<h2>
										<AccordionButton>
											<Flex alignItems='center' textAlign='left'>
												<AccordionIcon />
												Necessary Cookies
												<Switch
													isDisabled
													isChecked
													float='right'
													colorScheme='red'
													pos='absolute'
													left='60'
												></Switch>
											</Flex>
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}></AccordionPanel>
								</AccordionItem>
							</Accordion>
						</HStack>
						<HStack spacing={8}>
							<Accordion allowToggle w='100%'>
								<AccordionItem>
									<h2>
										<AccordionButton>
											<Flex alignItems='center' textAlign='left'>
												<AccordionIcon />
												Third party cookies
												<Switch
													float='right'
													colorScheme='red'
													pos='absolute'
													left='60'
													onChange={() => toggleMarketingCookies()}
												></Switch>
											</Flex>
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}></AccordionPanel>
								</AccordionItem>
							</Accordion>
						</HStack>
					</ModalBody>
					<VStack alignItems='center' pb='2'>
						<Button w='90%' colorScheme='red' mr={3} onClick={handleAllCookies}>
							Accept All
						</Button>
						<Button w='90%' variant='ghost' onClick={handleAllCookiesDecline}>
							Only Necessary
						</Button>
					</VStack>
				</ModalContent>
			</Modal>
		</>
	)
}

export default CookieBanner
