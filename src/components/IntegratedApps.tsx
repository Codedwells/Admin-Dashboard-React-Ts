import 'tw-elements';
import { useState } from 'react';
import ModalPopUp from './ModalPopUp';

interface Props {
	appName: string;
	appDescription: string;
	appImage?: string;
}

const IntegratedApps = ({ appName, appDescription, appImage }: Props) => {
	const image =
		appImage || 'https://img.icons8.com/color/80/null/facebook-gaming.png';
	const shortDescription =
		appDescription.split('').slice(0, 94).join('') + '...';

	const [showModal, setShowModal] = useState(false);

	const updateShowModel = () => {
		setShowModal(false);
	};

	return (
		<>
			<section>
				<div className='space-y-2'>
					<section className='mt-[2rem] px-3 py-1 border max-w-[22rem] rounded-lg bg-gray-50 '>
						<div>
							<div className='flex justify-between items-center'>
								<div>
									<h3 className='font-Nunito capitalize'>{appName}</h3>
									<p className='text-xs'>link.com</p>
								</div>
								<div>
									<img src={image} />
								</div>
							</div>
							<div className='mb-[1rem] mt-2'>
								<p className=' font-Nunito '>{shortDescription}</p>
							</div>
							<hr />
							<div className='mt-[0.5rem] flex  space-x-4 p-2 items-center justify-end'>
								<button
									type='button'
									data-te-ripple-init
									data-te-ripple-color='light'
									onClick={() => setShowModal(true)}
									className='py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#22d3ee] focus: focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
								>
									View Integration
								</button>
							</div>
						</div>
					</section>
				</div>

				<ModalPopUp
					name={appName}
					longDesc={appDescription}
					showModal={showModal}
					setShowModel={updateShowModel}
				/>
			</section>
		</>
	);
};

export default IntegratedApps;
