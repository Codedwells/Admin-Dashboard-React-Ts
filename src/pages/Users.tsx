import { useState } from 'react';
import {UserCircleIcon } from '@heroicons/react/20/solid';

import PaginationNav1 from '../components/Paginate';

type userType = {
	name: string;
	email: string;
	lastLogin: string;
	signUp: string;
};

const AdminUsers = () => {
	const [pageIndex, setPageIndex] = useState(0);
	const pageCount = 20;

	const users: userType[] = [
		{
			name: 'John Doe',
			email: 'john@doe.com',
			lastLogin: 'March 14, 2023 12:32 pm',
			signUp: 'Feb 12,2023',
		},
		{
			name: 'John Doe',
			email: 'john@doe.com',
			lastLogin: 'March 14, 2023 12:32 pm',
			signUp: 'Feb 12,2023',
		},
		{
			name: 'John Doe',
			email: 'john@doe.com',
			lastLogin: 'March 14, 2023 12:32 pm',
			signUp: 'Feb 12,2023',
		},
		{
			name: 'John Doe',
			email: 'john@doe.com',
			lastLogin: 'March 14, 2023 12:32 pm',
			signUp: 'Feb 12,2023',
		},
		{
			name: 'John Doe',
			email: 'john@doe.com',
			lastLogin: 'March 14, 2023 12:32 pm',
			signUp: 'Feb 12,2023',
		},
		{
			name: 'John Doe',
			email: 'john@doe.com',
			lastLogin: 'March 14, 2023 12:32 pm',
			signUp: 'Feb 12,2023',
		},
		{
			name: 'John Doe',
			email: 'john@doe.com',
			lastLogin: 'March 14, 2023 12:32 pm',
			signUp: 'Feb 12,2023',
		},
		
	];
	return (
		<>
			<main className='flex-1 flex flex-col p-4 mx-[4rem] mb-[1rem] rounded-xl bg-white border'>
				<div>
					<p className='font-[600] text-[1.2em] font-Nunito'>All Users</p>
				</div>

				<section className='relative mt-[1.5rem] overflow-x-auto'>
					<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
						<thead className='text-xs text-gray-700 border-b-2 uppercase dark:bg-gray-700 dark:text-gray-400'>
							<tr className=' text-[#9FA2B4]'>
								<th scope='col' className='px-6 py-3'>
									User
								</th>
								<th scope='col' className='px-6 py-3'>
									Email
								</th>
								<th scope='col' className='px-6 py-3'>
									Last Login
								</th>
								<th scope='col' className='px-6 py-3'>
									Sign Up
								</th>
							</tr>
						</thead>
						<tbody>
							{users.map((curr) => {
								return (
									<tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
										<th
											scope='row'
											className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white '
										>
											<div className='flex space-x-2 items-center'>
												<span className='text-teal-600'>
													<UserCircleIcon className='w-[2rem]' />
												</span>
												<p>{curr.name}</p>
											</div>
										</th>
										<td className='px-6 py-4'>
											<div className='flex space-x-2'>
												<a
													href={`mailto:${curr.email}`}
													className='hover:text-teal-600 text-[1em] hover:underline'
												>
													{curr.email}
												</a>
											</div>
										</td>
										<td className='px-6 py-4'>{curr.lastLogin}</td>
										<td className='px-6 py-4'>{curr.signUp}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
					<div className=' mt-[1.5rem] border rounded-xl p-4 flex items-center justify-between '>
						<p className='font-[600] text-lg text-[#9FA2B4]'>
							Page: <span className='text-[#1ba9be]'>{pageIndex + 1}</span>/{pageCount}{' '}
						</p>
						<PaginationNav1
							gotoPage={setPageIndex}
							canPreviousPage={pageIndex > 0}
							canNextPage={pageIndex < pageCount - 1}
							pageCount={pageCount}
							pageIndex={pageIndex}
						/>
					</div>
				</section>
			</main>
		</>
	);
};

export default AdminUsers;
