import { useState } from 'react';
import SettingsSecurity from '../components/SettingsSecurity';
import SettingsAdvanced from '../components/SettingsAdvanced';
import EmailSmtp from '../components/EmailSmtp';

type activeTabType = 'login' | 'advanced' | 'email';

const AdminSettings = () => {
	const [activeTab, setActiveTab] = useState<activeTabType>('login');

	return (
		<>
			<main className='flex-1 bg-white mx-[4rem] mb-[2rem] border p-4 rounded-lg'>
				<nav className='flex  space-x-6 font-[500] border-b-2 pb-1 font-Manrope text-[#4C535F] transition-all duration-300'>
					<p
						onClick={() => setActiveTab('login')}
						className={` transition-color pb-2 duration-300 cursor-pointer ${
							activeTab === 'login'
								? 'border-b-2 border-[#22d3ee] -mb-[5.5px]'
								: '-mb-[5.5px] border-b-2 border-transparent'
						}`}
					>
						Login & Security
					</p>
					<p
						onClick={() => setActiveTab('advanced')}
						className={` transition-color pb-2 duration-300 cursor-pointer ${
							activeTab === 'advanced'
								? 'border-b-2 border-[#22d3ee] -mb-[5.5px]'
								: '-mb-[5.5px] border-b-2 border-transparent'
						}`}
					>
						Advanced
					</p>
					<p
						onClick={() => setActiveTab('email')}
						className={` transition-color pb-2 duration-300 cursor-pointer ${
							activeTab === 'email'
								? 'border-b-2 border-[#22d3ee] -mb-[5.5px]'
								: '-mb-[5.5px] border-b-2 border-transparent'
						}`}
					>
						Email Smtp
					</p>
				</nav>
				{activeTab == 'login' ? (
					<SettingsSecurity />
				) : activeTab == 'advanced' ? (
					<SettingsAdvanced />
				) : activeTab == 'email' ? (
					<EmailSmtp />
				) : (
					''
				)}
			</main>
		</>
	);
};

export default AdminSettings;
