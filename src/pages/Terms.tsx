import { useState } from 'react';
import PrivacyPolicy from '../components/PrivacyPolicy';
import TermsAndConditions from '../components/TermsAndConditions';
type activeTabType = 'terms' | 'privacy';

const AdminTerms = () => {
	const [activeTab, setActiveTab] = useState<activeTabType>('terms');

	return (
		<>
			<main className='flex-1 bg-white mx-[4rem] mb-[2rem] border p-4 rounded-lg'>
				<nav className='flex  space-x-6 font-[500] border-b-2 pb-1 font-Manrope text-[#4C535F] transition-all duration-300'>
					<p
						onClick={() => setActiveTab('terms')}
						className={` transition-color pb-2 duration-300 cursor-pointer ${
							activeTab === 'terms'
								? 'border-b-2 border-[#22d3ee] -mb-[5.5px]'
								: '-mb-[5.5px] border-b-2 border-transparent'
						}`}
					>
						Terms & Conditions
					</p>
					<p
						onClick={() => setActiveTab('privacy')}
						className={` transition-color pb-2 duration-300 cursor-pointer ${
							activeTab === 'privacy'
								? 'border-b-2 border-[#22d3ee] -mb-[5.5px]'
								: '-mb-[5.5px] border-b-2 border-transparent'
						}`}
					>
						Privacy Policy
					</p>
				</nav>

				{activeTab === 'terms' ? <TermsAndConditions /> : <PrivacyPolicy />}
			</main>
		</>
	);
};

export default AdminTerms;
