import IntegratedApps from '../components/IntegratedApps';
const AdminTools = () => {
	return (
		<>
			<main className='flex-1 mx-[4rem] mb-[1rem] rounded-lg border p-4 bg-white'>
				<div>
					<p className='font-Nunito text-2xl pl-1 font-[500] text-gray-800'>
						Integration and connected tools
					</p>
				</div>

				<div className='grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[38rem] overflow-y-scroll'>
					<IntegratedApps
						appDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin. App Name 1'
						appName='App Name 1'
						appImage='https://img.icons8.com/color/80/null/facebook-gaming.png'
					/>
					<IntegratedApps
						appDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin.App Name 2'
						appName='App Name 2'
						appImage='https://img.icons8.com/color/80/null/facebook-gaming.png'
					/>
					<IntegratedApps
						appDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin. App Name 3'
						appName='App Name 3'
						appImage='https://img.icons8.com/color/80/null/facebook-gaming.png'
					/>
					<IntegratedApps
						appDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin.App Name 4'
						appName='App Name 4'
						appImage='https://img.icons8.com/color/80/null/facebook-gaming.png'
					/>
					<IntegratedApps
						appDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin. App Name 5'
						appName='App Name 5'
						appImage='https://img.icons8.com/color/80/null/facebook-gaming.png'
					/>
					<IntegratedApps
						appDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin. App Name 6'
						appName='App Name 6'
						appImage='https://img.icons8.com/color/80/null/facebook-gaming.png'
					/>
					<IntegratedApps
						appDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a corrupti obcaecatin. App Name 7'
						appName='App Name 7'
						appImage='https://img.icons8.com/color/80/null/facebook-gaming.png'
					/>
				</div>
			</main>
		</>
	);
};

export default AdminTools;
