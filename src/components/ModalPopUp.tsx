interface Props {
	name: string;
	longDesc: string;
	showModal: boolean;
	setShowModel: () => void;
}

const ModalPopUp = ({ name, longDesc, showModal, setShowModel }: Props) => {
	return (
		<div
			className={`${
				showModal ? 'visible' : 'hidden'
			} fixed top-0 bottom-0 left-0 right-0 bg-slate-800/75   overflow-y-auto overflow-x-hidden outline-none transition-all duration-500`}
		>
			<div className='pointer-events-none z-40 relative w-auto translate-y-[-50px] opacity-100 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-[8rem] min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]'>
				<div
					className={`pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600`}
				>
					<div className='flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
						<h5 className='text-xl font-Nunito  font-medium leading-normal text-neutral-800 dark:text-neutral-200'>
							{name}
						</h5>
						<button
							type='button'
							onClick={() => setShowModel()}
							className='box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='h-6 w-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>
					</div>
					<div className='relative mb-[2rem] p-4 px-[8rem]'>
						<p className='font-Nunito text-xl font-[500] text-slate-700'>
							Update App Description
						</p>
						<div className='mt-[1rem]'>
							<textarea
								defaultValue={longDesc}
								className='border bg-gray-50 p-4  w-full h-[20rem] focus:outline-none'
							></textarea>
							<div className='flex justify-end mt-[1rem]'>
								<button className='py-3 px-6   text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#22d3ee] focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
									{' '}
									Update
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalPopUp;
