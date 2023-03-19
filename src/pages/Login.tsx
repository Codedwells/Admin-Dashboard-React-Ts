import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import 'tw-elements';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const AdminLoginForm = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	const [preview, setPreview] = useState<boolean>(false);

	return (
		<section className='flex items-center justify-center bg-[#363740] h-screen'>
			<form
				onSubmit={formik.handleSubmit}
				className='bg-white p-[2rem] md:p-[3rem] rounded-lg'
			>
				<div>
					<h1 className='text-center font-[600] text-2xl text-[#A4A6B3] hover:text-[#898ca1]'>
						<Link to={'/'}>Admin Dashboard</Link>
					</h1>
					<h3 className='mt-4 text-center font-[500] text-xl text-[#252733]'>
						Admin login
					</h3>
					<p className='text-sm mt-2 font-[500] text-center text-[#9FA2B4] '>
						Enter your email and password below
					</p>
				</div>
				<div className='mt-9'>
					<div className='flex flex-col space-y-1'>
						<label
							htmlFor='email'
							className='uppercase font-[500] text-sm text-[#9FA2B4]'
						>
							Email
						</label>
						<input
							type='email'
							name='email'
							id='email'
							onChange={formik.handleChange}
							value={formik.values.email}
							placeholder='Email address'
							className='border border-[#F0F1F7] text-[#9FA2B4] font-semibold p-3 pl-6 rounded-lg focus:bg-[#e8f0fe] focus:outline-none'
						/>
					</div>
					<div className='flex flex-col h-[5rem] space-y-1 mt-4'>
						<label
							htmlFor='password'
							className=' uppercase font-[500] bg-emerald-400d   text-sm text-[#9FA2B4] '
						>
							{' '}
							Password
						</label>
						<div className='absolute '>
							<input
								type={preview ? 'text' : 'password'}
								name='password'
								id='password'
								onChange={formik.handleChange}
								value={formik.values.password}
								placeholder='Confirm Password'
								className='border mt-4 border-[#F0F1F7] p-3 pl-6 font-semibold text-[#9FA2B4] rounded focus:bg-[#e8f0fe] focus:outline-none'
							/>
							{!preview ? (
								<EyeIcon
									onClick={() => setPreview(true)}
									className='absolute top-[30px] right-[12px] w-[1.4rem]'
								/>
							) : (
								<EyeSlashIcon
									onClick={() => setPreview(false)}
									className='absolute top-[30px] right-[12px] w-[1.4rem]'
								/>
							)}
						</div>
					</div>
				</div>

				<div className='flex flex-col mt-[1rem]'>
					<button
						data-te-ripple-init
						data-te-ripple-color='light'
						className='bg-[#3751ff] text-white p-3 rounded-lg hover:bg-[#3b50d4] active:bg-[#3751ff] transition-colors duration-200'
					>
						Login
					</button>
				</div>
			</form>
		</section>
	);
};

export default AdminLoginForm;
