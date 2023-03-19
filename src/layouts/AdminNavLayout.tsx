import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

import {
	ChartPieIcon,
	UserGroupIcon,
	AdjustmentsHorizontalIcon,
	WrenchIcon,
	PencilSquareIcon,
	ArrowLeftOnRectangleIcon,
	PresentationChartLineIcon,
} from '@heroicons/react/20/solid';

interface ActiveTabState {
	overview: boolean;
	users: boolean;
	settings: boolean;
	tools: boolean;
	advanced: boolean;
	messages: boolean;
}

type ActiveTabKey = keyof ActiveTabState;

const AdminNavLayout = () => {
	const [activeTab, setActiveTab] = useState<ActiveTabState>({
		overview: false,
		users: false,
		settings: false,
		tools: false,
		advanced: false,
		messages: false,
	});

	const handleTabClick = (tabName: keyof ActiveTabState) => {
		setActiveTab((prevState) => {
			const newState: ActiveTabState = {} as ActiveTabState;
			for (const key in prevState) {
				if (key === tabName) {
					newState[key] = true;
				} else {
					let stateKey = key as ActiveTabKey;
					newState[stateKey] = false;
				}
			}
			return newState;
		});
	};

	const location = useLocation();

	useEffect(() => {
		switch (location.pathname) {
			case '':
				handleTabClick('overview');
				break;
			case '/users':
				handleTabClick('users');
				break;
			case '/settings':
				handleTabClick('settings');
				break;
			case '/tools':
				handleTabClick('tools');
				break;
			case '/advanced':
				handleTabClick('advanced');
				break;
		}
	}, []);
	return (
		<>
			<section className='flex font-Poppins'>
				<nav className='h-screen flex flex-col justify-between  w-64 py-4 bg-[#363740] text-[#A4A6B3]'>
					<div>
						<div className='flex space-x-1 justify-center text-[#cde2e6] text-xl font-bold cursor-pointer font-Poppins'>
							<p className=''>Admin Dashboard</p>
							<PresentationChartLineIcon className='w-[1.4rem]' />
						</div>
						<div className='mt-[2rem]'>
							<Link
								to='/'
								className={`flex space-x-4 p-[1rem] pl-[1.5rem]  items-center text-[#A4A6B3] hover:text-[#DDE2FF] border-l-[3px]  transition-colors duration-300 ${
									activeTab.overview
										? 'bg-[#3e4049] border-l-[#22d3ee] text-[#DDE2FF]'
										: 'border-l-transparent'
								}`}
								onClick={() => {
									handleTabClick('overview');
								}}
							>
								<ChartPieIcon className='w-[1.5rem]' />

								<p className='text-[16px]'>Overview</p>
							</Link>

							<Link
								to='/users '
								className={`flex space-x-4 p-[1rem] pl-[1.5rem]  items-center text-[#A4A6B3] hover:text-[#DDE2FF] border-l-[3px]   transition-colors duration-300 ${
									activeTab.users
										? 'bg-[#3e4049] border-l-[#22d3ee] text-[#DDE2FF]'
										: 'border-l-transparent'
								}`}
								onClick={() => {
									handleTabClick('users');
								}}
							>
								<UserGroupIcon className='w-[1.5rem]' />

								<p className='text-[16px]'>Users</p>
							</Link>

							<Link
								to='/tools '
								className={`flex space-x-4 p-[1rem] pl-[1.5rem]  items-center text-[#A4A6B3] hover:text-[#DDE2FF] border-l-[3px]   transition-colors duration-300 ${
									activeTab.tools
										? 'bg-[#3e4049] border-l-[#22d3ee] text-[#DDE2FF]'
										: 'border-l-transparent'
								}`}
								onClick={() => handleTabClick('tools')}
							>
								<WrenchIcon className='w-[1.5rem]' />

								<p className='text-[16px]'>Tools</p>
							</Link>

							<Link
								to='/terms'
								className={`flex space-x-4 p-[1rem] pl-[1.5rem]  items-center text-[#A4A6B3] hover:text-[#DDE2FF] border-l-[3px] transition-colors duration-300 ${
									activeTab.advanced
										? 'bg-[#3e4049] border-l-[#22d3ee] text-[#DDE2FF]'
										: 'border-l-transparent'
								}`}
								onClick={() => handleTabClick('advanced')}
							>
								<PencilSquareIcon className='w-[1.5rem]' />

								<p className='text-[16px]'>Terms</p>
							</Link>

							<Link
								to='/settings'
								className={`flex space-x-4 p-[1rem] pl-[1.5rem]  items-center text-[#A4A6B3] hover:text-[#DDE2FF] border-l-[3px] transition-colors duration-300 ${
									activeTab.settings
										? 'bg-[#3e4049] border-l-[#22d3ee] text-[#DDE2FF]'
										: 'border-l-transparent'
								}`}
								onClick={() => handleTabClick('settings')}
							>
								<AdjustmentsHorizontalIcon className='w-[1.5rem]' />

								<p className='text-[16px]'>Settings</p>
							</Link>
						</div>
					</div>
					<div className='mt-auto'>
						<Link
							to='/login'
							className={`flex space-x-4 p-[1rem]  items-center text-[#A4A6B3] hover:text-[#DDE2FF] transition-colors duration-300
							`}
						>
							<ArrowLeftOnRectangleIcon className='w-[1.5rem]' />

							<p className='text-[16px]'>Logout</p>
						</Link>
					</div>
				</nav>

				<main className='flex flex-col flex-1 pt-[1rem] bg-[#F7F8FC]'>
					<header className='flex mx-[4rem] mb-[2rem] bg-white p-4 rounded-lg shadow shadow-slate-200'>
						<div className=' flex-1 p-1'>
							<h1 className='font-[600] text-lg font-Nunito capitalize text-[#252733]'>
								{location.pathname === '/'
									? 'Admin'
									: location.pathname.split('/').slice(-1)}
							</h1>
						</div>
						<div className='p-1 bg-slate-800 text-white rounded'>
							<p className='font-Raleway font-[500] '>
								{new Date().toLocaleDateString('en-US', {
									day: 'numeric',
									month: 'long',
									year: 'numeric',
								})}
							</p>
						</div>
					</header>
					<Outlet />
				</main>
			</section>
		</>
	);
};

export default AdminNavLayout;
