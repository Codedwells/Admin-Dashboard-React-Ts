const SettingsSecurity = () => {
	return (
		<>
			<section className='mt-[3rem]'>
				<div>
					<p className='font-Nunito text-lg pl-1 font-[600] text-gray-700 capitalize'>
						Update Email
					</p>
					<div className='flex items-center space-x-4 mt-[1rem]'>
						<input
							type='text'
							placeholder='admin@admin.com'
							className='text-sm font-medium border text-gray-700 bg-[#fafbfc] p-4 rounded-lg focus:outline-none'
						/>

						<button
							type='button'
							data-te-ripple-init
							data-te-ripple-color='light'
							className='py-3 px-6   text-sm font-medium text-white focus:outline-none bg-primary rounded-lg border border-gray-200 hover:bg-primay-600 focus:z-10 focus:ring-4 focus:ring-gray-200 '
						>
							Update
						</button>
					</div>
				</div>
				<div className='mt-[4rem]'>
					<p className='font-Nunito text-lg pl-1 font-[600] text-gray-700 capitalize'>
						Update Password
					</p>
					<div className='flex flex-col space-y-8  mt-[1rem]'>
						<div className='flex  space-x-4'>
							<input
								type='text'
								placeholder='New password'
								className='text-sm font-medium border  text-gray-700 bg-[#fafbfc] p-4 rounded-lg focus:outline-none'
							/>

							<input
								type='text'
								placeholder='Confirm password'
								className='text-sm font-medium border  text-gray-700 bg-[#fafbfc] p-4 rounded-lg focus:outline-none'
							/>
						</div>
						<div className='flex items-center space-x-4'>
							<input
								type='text'
								placeholder='Previous password'
								className='text-sm font-medium border  text-gray-700 bg-[#fafbfc] p-4 rounded-lg focus:outline-none'
							/>
							<button
								type='button'
								data-te-ripple-init
								data-te-ripple-color='light'
								className='py-3 px-6   text-sm font-medium text-white focus:outline-none bg-primary rounded-lg border border-gray-200 hover:bg-primay-600 focus:z-10 focus:ring-4 focus:ring-gray-200 '
							>
								Update
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SettingsSecurity;
