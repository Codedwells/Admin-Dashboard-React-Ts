import 'tw-elements';

const TermsAndConditions = () => {
	return (
		<div className='mt-[1rem] mb-[2rem] p-4'>
			<p className='font-Nunito text-xl font-[500] text-slate-700'>
				Update Terms and Conditions
			</p>
			<div className='mt-[1rem] pr-[8rem]'>
				<textarea className='border bg-gray-50 p-4  w-full h-[25rem] focus:outline-none'></textarea>
				<div className='flex justify-end mt-[1rem]'>
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
	);
};

export default TermsAndConditions;
