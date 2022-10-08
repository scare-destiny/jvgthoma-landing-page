import { useForm } from 'react-hook-form'
import Button from './Button'
import Notification from './Notification'

const Form = ({ buttonText }) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm()

	const onSubmit = async (data) => {
		const fields = { fields: data }
		console.log(fields)
	}

	return (
		<>
			<div className='formContainer w-full border-box pt-4 pl-6 pr-6 pb-4'>
				<div className='mx-auto max-w-xl sm:max-w-xl w-full'>
					<div>
						<div className='w-full border-box pb-6 '>
							<div className='mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl'>
								<div>
									<div className='wrapper max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl text-center'>
										<h4 className='text-l'></h4>
										Start now for free
									</div>
								</div>
							</div>
						</div>
						<form onSubmit={handleSubmit(onSubmit)} className='sm:mt-2 max-w-2xl  '>
							<div className='wrapper flex items-center relative box-border overflow-hidden rounded-t-lg'>
								<u className='absolute no-underline h-[18px] left-6 select-none flex items-center'>
									<span style={{ fontSize: '24px' }}>👋</span>
								</u>
								<div></div>
								<input
									id='name'
									{...register('name', {
										required: 'Please share your name',
										minLength: { value: 4, message: 'Minimum length should be 4' },
									})}
									className='input 
		placeholder-gray-400 box-border w-full h-[64px] px-6 border-0 border-l border-r border-t mb-0 
		font-ui text-base align-middle bg-white transition 
		appearance-none font-light focus:outline-none focus:bg-gray-50 rounded-none
		 border-black/10 rounded-t-lg pl-[70px] svelte-1ruxt0u'
									type='text'
									placeholder='Dein Vorname'
								/>
								{errors.name && <Notification message={errors.name.message} />}
							</div>
							<div className='wrapper flex items-center relative box-border overflow-hidden rounded-t-lg'>
								<u className='absolute no-underline h-[18px] left-6 select-none flex items-center'>
									<span style={{ 'font-size': '24px' }}>✉️</span>
								</u>
								<div></div>
								<input
									id='mail'
									{...register('mail', {
										required: 'Email address is required',
										minlength: { value: 4, message: 'Minimum lenght should be 4' },
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: 'Provide valid email address',
										},
									})}
									autoFocus
									className='input 
		placeholder-gray-400 box-border w-full h-[64px] px-6 border-0 border-l border-r border-t mb-0 
		font-ui text-base align-middle bg-white transition 
		appearance-none font-light focus:outline-none focus:bg-gray-50 rounded-none
		 border-black/10 rounded-t-lg pl-[70px] svelte-1ruxt0u'
									type='text'
									placeholder='Deine E-mail Adresse'
								/>
								{errors.mail && <Notification message={errors.mail.message} />}
							</div>
							<div className='wrapper checkbox flex items-center px-6 min-h-[68px] relative box-border overflow-hidden bg-white border-t border-l border-r border-b rounded-b-lg border-black/10'>
								<div className='checkbox undefined' style={{ width: '24px' }}>
									<input
										type='checkbox'
										name='checkbox'
										{...register('checkbox', {
											required: 'Please tickle a checkbox',
										})}
										className='accent-blue-800 focus:accent-blue-800 w-5 h-5'
									/>
								</div>
								<style jsx>{`
									.checkbox {
										width: auto;
										height: 24px;
										color: #0bb648;
									}
								`}</style>
								<div className='text'>
									<div className='w-full border-box pt-4 pl-5 pr-4 pb-4'>
										<div className='mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl text-left'>
											<h4 className='text-black font-extralight leading-5 text-sm break-words'>
												Ich akzeptiere die Datenschutzbestimmungen
											</h4>
										</div>
									</div>
								</div>
								{errors.checkbox && (
									<div className='mb-3  text-sm text-red-500'>
										{/* { TODO  mark checkbox red on error errors.checkbox.message} */}
									</div>
								)}
							</div>
							<Button buttonText={buttonText} />
						</form>
						<div className='w-full border-box pt-6 pl-8 pr-8 pb-2 mx-auto max-w-md sm:max-w-xl  md:max-w-4xl lg:max-w-5xl'>
							<div className='break-words text-center'>
								<h4>Deine Daten werden sicher &amp; verschlüsselt übertragen 🔐</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Form
