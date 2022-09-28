import Button from "./Button"

const Form = () => {
	return (
		<form className='sm:mt-2'>
			<div className='wrapper flex items-center relative box-border overflow-hidden rounded-t-lg'>
				<u className='absolute no-underline h-[18px] left-6 select-none flex items-center'>
					<span style={{ 'font-size': '24px' }}>👋</span>
				</u>
				<div></div>
				<input
					className='input 
		placeholder-gray-400 box-border w-full h-[64px] px-6 border-0 border-l border-r border-t mb-0 
		font-ui text-base align-middle bg-white transition 
		appearance-none font-light focus:outline-none focus:bg-gray-50 rounded-none
		 border-black/10 rounded-t-lg pl-[70px] svelte-1ruxt0u'
					type='text'
					placeholder='Dein Vorname'
					name='fname'
				/>
			</div>
			<div className='wrapper flex items-center relative box-border overflow-hidden rounded-t-lg'>
				<u className='absolute no-underline h-[18px] left-6 select-none flex items-center'>
					<span style={{ 'font-size': '24px' }}>✉️</span>
				</u>
				<div></div>
				<input
					className='input 
		placeholder-gray-400 box-border w-full h-[64px] px-6 border-0 border-l border-r border-t mb-0 
		font-ui text-base align-middle bg-white transition 
		appearance-none font-light focus:outline-none focus:bg-gray-50 rounded-none
		 border-black/10 rounded-t-lg pl-[70px] svelte-1ruxt0u'
					type='text'
					placeholder='Deine E-mail Adresse'
					name='email'
				/>
			</div>
			<div className='wrapper checkbox flex items-center px-6 min-h-[68px] relative box-border overflow-hidden bg-white border-t border-l border-r border-b rounded-b-lg border-black/10'>
				<div className='checkbox undefined' style={{ width: '24px' }}>
					<input type='checkbox' className='checkboxInput' />
					<svg></svg>
				</div>
				<style jsx>{`
					.checkbox {
						width: 24px;
						height: 24px;
						color: #0bb648;
					}
				`}</style>

				<div>
					<div>
						<div></div>
					</div>
				</div>
			</div>
			<Button buttonText='test'/>
		</form>
	)
}

export default Form
