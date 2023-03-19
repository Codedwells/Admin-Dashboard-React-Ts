const Stats = () => {
	return (
		<>
			<div className='flex justify-between mx-[4rem] '>
				<div className='flex flex-col items-center bg-white p-4 h-[134px] w-[258px] rounded-xl   shadow shadow-slate-200 hover:shadow-cyan-400  hover:text-[#3751FF] transition-all duration-300'>
					<p className='text-[#9FA2B4] text-lg font-[600] font-Nunito capitalize'>
						accouts created
					</p>
					<p className='font-[700] text-4xl mt-[0.5rem] text-[#252733]'>501</p>
				</div>
				<div className='flex flex-col items-center  bg-white p-4 h-[134px] w-[258px] rounded-xl   shadow shadow-slate-200 hover:shadow-cyan-400 hover:text-[#3751FF] transition-all duration-300'>
					<p className='text-[#9FA2B4] text-lg font-[600] font-Nunito capitalize'>
						Accounts created today
					</p>
					<p className='font-[700] text-4xl mt-[0.5rem] text-[#252733]'>20</p>
				</div>
				<div className='flex flex-col items-center bg-white p-4 h-[134px] w-[258px] rounded-xl   shadow shadow-slate-200 hover:shadow-cyan-400 hover:text-[#3751FF] transition-all duration-300'>
					<p className='text-[#9FA2B4] text-lg font-[600] font-Nunito capitalize'>
						API Calls Today
					</p>
					<p className='font-[700] text-4xl mt-[0.5rem] text-[#252733]'>309</p>
				</div>
				<div className='flex flex-col items-center bg-white p-4 h-[134px] w-[258px] rounded-xl   shadow shadow-slate-200 hover:shadow-cyan-400 hover:text-[#3751FF] transition-all duration-300'>
					<p className='text-[#9FA2B4] text-lg font-[600] font-Nunito capitalize'>
						Total API Calls
					</p>
					<p className='font-[700] text-4xl mt-[0.5rem] text-[#252733]'>4037</p>
				</div>
			</div>
		</>
	);
};

export default Stats;
