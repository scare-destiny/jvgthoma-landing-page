import Button from './ButtonComponent'

const Form = ({ buttonText }) => {
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
										Join our free E-Course and learn how to build your own high profitable
										solar modules production line. <strong>It&apos;s free! </strong>
									</div>
								</div>
							</div>
						</div>
						<form
							method='POST'
							action='https://ingbrohansthoma.activehosted.com/proc.php'
							id='_form_121_'
							className='sm:mt-2 max-w-2xl _form _form_121 _inline-form  _dark'
						>
							<div className='wrapper flex items-center relative box-border overflow-hidden rounded-t-lg'>
								<u className='absolute no-underline h-[18px] left-6 select-none flex items-center'>
									<span style={{ fontSize: '24px' }}>👋</span>
								</u>
								<input
									type='email'
									id='email'
									name='email'
									required
									className='input 
		placeholder-gray-400 box-border w-full h-[64px] px-6 border-0 border-l border-r border-t mb-0 
		font-ui text-base align-middle bg-white transition 
		appearance-none font-light focus:outline-none focus:bg-gray-50 rounded-none
		 border-black/10 rounded-t-lg pl-[70px] svelte-1ruxt0u'
									placeholder='Your E-mail Address'
								/>
							</div>
							<div className='wrapper checkbox flex items-center px-6 min-h-[68px] relative box-border overflow-hidden bg-white border-t border-l border-r border-b rounded-b-lg border-black/10'>
								<div className='checkbox undefined' style={{ width: '24px' }}>
									<input
										type='checkbox'
										required
										name='checkbox'
										className='accent-red-500 focus:accent-red-800 w-5 h-5 default:border-rose-600'
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
												I accept the Privacy Policy
											</h4>
											<input type='hidden' name='u' value='121' />
											<input type='hidden' name='f' value='121' />
											<input type='hidden' name='s' />
											<input type='hidden' name='c' value='0' />
											<input type='hidden' name='m' value='0' />
											<input type='hidden' name='act' value='sub' />
											<input type='hidden' name='v' value='2' />
											<input
												type='hidden'
												name='or'
												value='995ac286ea3b29a058eaf0af6bcece89'
											/>
										</div>
									</div>
								</div>
							</div>
							<Button buttonText={buttonText} />
						</form>
						<div className='w-full border-box pt-6 pl-8 pr-8 pb-2 mx-auto max-w-md sm:max-w-xl  md:max-w-4xl lg:max-w-5xl'>
							<div className='break-words text-center'>
								<h4>Your data will be securely encrypted and transmitted 🔐</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Form
