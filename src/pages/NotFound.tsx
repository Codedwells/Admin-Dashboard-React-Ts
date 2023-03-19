import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<>
			<section className='h-screen w-screen flex flex-col justify-center items-center'>
				<p className='text-[2em]  font-[500] font-Nunito'>Error</p>
				<p className='text-[8em]'>404</p>
				<p className='font-[500] text-center px-2'>
					We could not find what you were looking for! Are you lost?
				</p>
				<Link
					to='/'
					className='flex justify-center items-center text-slate-100 mt-[1rem] bg-blue-800 p-2 text-sm font-Poppins font-semibold rounded w-[10rem] hover:bg-blue-600 active:bg-blue-800 transition-colors duration-300'
				>
					Go home
				</Link>
			</section>
		</>
	);
};

export default NotFound;
