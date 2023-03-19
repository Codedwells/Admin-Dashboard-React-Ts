import LineChart from '../components/LineChart';
import RadialChart from '../components/RadialChart';
import Stats from '../components/Stats';

const AdminHome = () => {
	return (
		<>
			<section className='flex-1 flex flex-col mt-6'>
				<Stats />
				<div className='flex mx-[4rem] bg-white mt-[4rem] h-[25rem] p-[1rem] rounded-xl shadow-md'>
					<div className='flex-1 w-fit h-[23rem] shadow shadow-slate-100'>
						<LineChart />
					</div>
					<div>
						<RadialChart />
					</div>
				</div>
			</section>
		</>
	);
};

export default AdminHome;
