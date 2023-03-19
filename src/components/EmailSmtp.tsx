import {
	DocumentDuplicateIcon,
	TrashIcon,
	CheckIcon,
} from '@heroicons/react/24/solid';

const EmailSmtp = () => {
	return (
		<>
			<section className='mt-[3rem] p-1'>
				<p className='font-Nunito text-lg pl-1 font-[600] text-gray-700 capitalize'>
					Setup Email Smtp
				</p>

				<div className='mt-[0.5rem] max-h-[30rem] overflow-y-scroll'>
					<form className='flex flex-col items-start space-y-4 mt-[1rem]'>
						<div className='flex space-x-[3rem]'>
							<div className='flex  flex-col space-y-4'>
								<div>
									<p className='font-Nunito capitalize pl-2 text-gray-700 font-semibold'>
										username
									</p>

									<input
										type='text'
										placeholder='Username'
										className='text-sm font-medium border text-gray-700 bg-[#fafbfc] p-4 rounded-lg focus:outline-none'
									/>
								</div>
								<div>
									<p className='font-Nunito capitalize pl-2 text-gray-700 font-semibold'>
										password
									</p>

									<input
										type='text'
										placeholder='Password'
										className='text-sm font-medium border text-gray-700 bg-[#fafbfc] p-4 rounded-lg focus:outline-none'
									/>
								</div>
							</div>
							<div className='flex  flex-col space-y-4'>
								<div>
									<p className='font-Nunito capitalize pl-2 text-gray-700 font-semibold '>
										host
									</p>

									<input
										type='number'
										placeholder='Host'
										className='text-sm font-medium border text-gray-700 bg-[#fafbfc] p-4 rounded-lg focus:outline-none'
									/>
								</div>
								<div>
									<p className='font-Nunito capitalize pl-2 text-gray-700 font-semibold'>
										port
									</p>

									<input
										type='number'
										placeholder='Port'
										className='text-sm font-medium border text-gray-700 bg-[#fafbfc] p-4 rounded-lg focus:outline-none'
									/>
								</div>
							</div>
						</div>

						<button
							type='button'
							data-te-ripple-init
							data-te-ripple-color='light'
							className='py-3 px-6   text-sm font-medium text-white focus:outline-none bg-primary rounded-lg border border-gray-200 hover:bg-primay-600 focus:z-10 focus:ring-4 focus:ring-gray-200 '
						>
							Update
						</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default EmailSmtp;
