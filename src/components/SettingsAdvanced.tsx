import {
	DocumentDuplicateIcon,
	TrashIcon,
	CheckIcon,
} from '@heroicons/react/24/solid';

const SettingsAdvanced = () => {
	return (
		<>
			<section className='mt-[3rem] p-1'>
				<p className='font-Nunito text-lg pl-1 font-[600] text-gray-700'>
					Available API keys
				</p>

				<div className='mt-[0.5rem] max-h-[30rem] overflow-y-scroll'>
					<table className='w-full text-sm border text-left text-gray-500 dark:text-gray-400'>
						<thead className='text text-gray-700 border-b-2 dark:bg-gray-700 dark:text-gray-400'>
							<tr className=''>
								<th scope='col' className='px-6 py-4 border-r'>
									API key name
								</th>
								<th scope='col' className='px-6 py-4 border-r'>
									API key
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className='bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'>
								<th
									scope='row'
									className='px-6 py-4 border-r font-thin text-gray-700 capitalize whitespace-nowrap dark:text-white '
								>
									<div className='flex space-x-2 items-center'>
										<p>blue prism</p>
									</div>
								</th>
								<td className='px-6 w-[26rem] border-r py-4'>
									<div className='flex h-[2rem] '>
										<button className='border border-[#1abfd8] border-r-none px-2 rounded-l hover:border-[#33d1e9]'>
											<DocumentDuplicateIcon className='w-[1rem] text-[#1abfd8] hover:text-[#33d1e9] active:text-[#1ba9be] transition-colors duration-200' />
										</button>
										<input
											type='text'
											className='p-1 w-[22rem] text-center  font-mono bg-[#e9ecef] border border-l-0 border-r-0 border-gray-300 focus:outline-none'
											placeholder='dfkd-fks4-fskk-f4ksh-fs2k-lkj8'
										/>
										<button className='border border-[#1abfd8] border-l-none px-2 rounded-r hover:border-[#33d1e9] hover:bg-[#1abfd8] text-[#1ba9be] hover:text-white active:text-[#1ba9be] active:bg-white transition-all duration-300'>
											<CheckIcon className='w-[1rem]' />
										</button>
									</div>
								</td>
								<td className='pl-4 py-4'>
									<button
										type='button'
										className='flex items-center space-x-2 text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-4 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
									>
										<TrashIcon className='w-[1rem]' />
										<span>Delete API key</span>
									</button>
								</td>
							</tr>
							<tr className='bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'>
								<th
									scope='row'
									className='px-6 py-4 border-r font-thin text-gray-700 capitalize whitespace-nowrap dark:text-white '
								>
									<div className='flex space-x-2 items-center'>
										<p>blue prism</p>
									</div>
								</th>
								<td className='px-6 w-[26rem] border-r py-4'>
									<div className='flex h-[2rem] '>
										<button className='border border-[#1abfd8] border-r-none px-2 rounded-l hover:border-[#33d1e9]'>
											<DocumentDuplicateIcon className='w-[1rem] text-[#1abfd8] hover:text-[#33d1e9] active:text-[#1ba9be] transition-colors duration-200' />
										</button>
										<input
											type='text'
											className='p-1 w-[22rem] text-center  font-mono bg-[#e9ecef] border border-l-0 border-r-0 border-gray-300 focus:outline-none'
											placeholder='dfkd-fks4-fskk-f4ksh-fs2k-lkj8'
										/>
										<button className='border border-[#1abfd8] border-l-none px-2 rounded-r hover:border-[#33d1e9] hover:bg-[#1abfd8] text-[#1ba9be] hover:text-white active:text-[#1ba9be] active:bg-white transition-all duration-300'>
											<CheckIcon className='w-[1rem]' />
										</button>
									</div>
								</td>
								<td className='pl-4 py-4'>
									<button
										type='button'
										className='flex items-center space-x-2 text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-4 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
									>
										<TrashIcon className='w-[1rem]' />
										<span>Delete API key</span>
									</button>
								</td>
							</tr>
							<tr className='bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'>
								<th
									scope='row'
									className='px-6 py-4 border-r font-thin text-gray-700 capitalize whitespace-nowrap dark:text-white '
								>
									<div className='flex space-x-2 items-center'>
										<p>blue prism</p>
									</div>
								</th>
								<td className='px-6 w-[26rem] border-r py-4'>
									<div className='flex h-[2rem] '>
										<button className='border border-[#1abfd8] border-r-none px-2 rounded-l hover:border-[#33d1e9]'>
											<DocumentDuplicateIcon className='w-[1rem] text-[#1abfd8] hover:text-[#33d1e9] active:text-[#1ba9be] transition-colors duration-200' />
										</button>
										<input
											type='text'
											className='p-1 w-[22rem] text-center  font-mono bg-[#e9ecef] border border-l-0 border-r-0 border-gray-300 focus:outline-none'
											placeholder='dfkd-fks4-fskk-f4ksh-fs2k-lkj8'
										/>
										<button className='border border-[#1abfd8] border-l-none px-2 rounded-r hover:border-[#33d1e9] hover:bg-[#1abfd8] text-[#1ba9be] hover:text-white active:text-[#1ba9be] active:bg-white transition-all duration-300'>
											<CheckIcon className='w-[1rem]' />
										</button>
									</div>
								</td>
								<td className='pl-4 py-4'>
									<button
										type='button'
										className='flex items-center space-x-2 text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-4 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
									>
										<TrashIcon className='w-[1rem]' />
										<span>Delete API key</span>
									</button>
								</td>
							</tr>
							<tr className='bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'>
								<th
									scope='row'
									className='px-6 py-4 border-r font-thin text-gray-700 capitalize whitespace-nowrap dark:text-white '
								>
									<div className='flex space-x-2 items-center'>
										<p>blue prism</p>
									</div>
								</th>
								<td className='px-6 w-[26rem] border-r py-4'>
									<div className='flex h-[2rem] '>
										<button className='border border-[#1abfd8] border-r-none px-2 rounded-l hover:border-[#33d1e9]'>
											<DocumentDuplicateIcon className='w-[1rem] text-[#1abfd8] hover:text-[#33d1e9] active:text-[#1ba9be] transition-colors duration-200' />
										</button>
										<input
											type='text'
											className='p-1 w-[22rem] text-center  font-mono bg-[#e9ecef] border border-l-0 border-r-0 border-gray-300 focus:outline-none'
											placeholder='dfkd-fks4-fskk-f4ksh-fs2k-lkj8'
										/>
										<button className='border border-[#1abfd8] border-l-none px-2 rounded-r hover:border-[#33d1e9] hover:bg-[#1abfd8] text-[#1ba9be] hover:text-white active:text-[#1ba9be] active:bg-white transition-all duration-300'>
											<CheckIcon className='w-[1rem]' />
										</button>
									</div>
								</td>
								<td className='pl-4 py-4'>
									<button
										type='button'
										className='flex items-center space-x-2 text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-4 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
									>
										<TrashIcon className='w-[1rem]' />
										<span>Delete API key</span>
									</button>
								</td>
							</tr>
							<tr className='bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'>
								<th
									scope='row'
									className='px-6 py-4 border-r font-thin text-gray-700 capitalize whitespace-nowrap dark:text-white '
								>
									<div className='flex space-x-2 items-center'>
										<p>blue prism</p>
									</div>
								</th>
								<td className='px-6 w-[26rem] border-r py-4'>
									<div className='flex h-[2rem] '>
										<button className='border border-[#1abfd8] border-r-none px-2 rounded-l hover:border-[#33d1e9]'>
											<DocumentDuplicateIcon className='w-[1rem] text-[#1abfd8] hover:text-[#33d1e9] active:text-[#1ba9be] transition-colors duration-200' />
										</button>
										<input
											type='text'
											className='p-1 w-[22rem] text-center  font-mono bg-[#e9ecef] border border-l-0 border-r-0 border-gray-300 focus:outline-none'
											placeholder='dfkd-fks4-fskk-f4ksh-fs2k-lkj8'
										/>
										<button className='border border-[#1abfd8] border-l-none px-2 rounded-r hover:border-[#33d1e9] hover:bg-[#1abfd8] text-[#1ba9be] hover:text-white active:text-[#1ba9be] active:bg-white transition-all duration-300'>
											<CheckIcon className='w-[1rem]' />
										</button>
									</div>
								</td>
								<td className='pl-4 py-4'>
									<button
										type='button'
										className='flex items-center space-x-2 text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-4 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
									>
										<TrashIcon className='w-[1rem]' />
										<span>Delete API key</span>
									</button>
								</td>
							</tr>
							<tr className='bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'>
								<th
									scope='row'
									className='px-6 py-4 border-r font-thin text-gray-700 capitalize whitespace-nowrap dark:text-white '
								>
									<div className='flex space-x-2 items-center'>
										<p>blue prism</p>
									</div>
								</th>
								<td className='px-6 w-[26rem] border-r py-4'>
									<div className='flex h-[2rem] '>
										<button className='border border-[#1abfd8] border-r-none px-2 rounded-l hover:border-[#33d1e9]'>
											<DocumentDuplicateIcon className='w-[1rem] text-[#1abfd8] hover:text-[#33d1e9] active:text-[#1ba9be] transition-colors duration-200' />
										</button>
										<input
											type='text'
											className='p-1 w-[22rem] text-center  font-mono bg-[#e9ecef] border border-l-0 border-r-0 border-gray-300 focus:outline-none'
											placeholder='dfkd-fks4-fskk-f4ksh-fs2k-lkj8'
										/>
										<button className='border border-[#1abfd8] border-l-none px-2 rounded-r hover:border-[#33d1e9] hover:bg-[#1abfd8] text-[#1ba9be] hover:text-white active:text-[#1ba9be] active:bg-white transition-all duration-300'>
											<CheckIcon className='w-[1rem]' />
										</button>
									</div>
								</td>
								<td className='pl-4 py-4'>
									<button
										type='button'
										className='flex items-center space-x-2 text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-4 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
									>
										<TrashIcon className='w-[1rem]' />
										<span>Delete API key</span>
									</button>
								</td>
							</tr>
							<tr className='bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'>
								<th
									scope='row'
									className='px-6 py-4 border-r font-thin text-gray-700 capitalize whitespace-nowrap dark:text-white '
								>
									<div className='flex space-x-2 items-center'>
										<p>blue prism</p>
									</div>
								</th>
								<td className='px-6 w-[26rem] border-r py-4'>
									<div className='flex h-[2rem] '>
										<button className='border border-[#1abfd8] border-r-none px-2 rounded-l hover:border-[#33d1e9]'>
											<DocumentDuplicateIcon className='w-[1rem] text-[#1abfd8] hover:text-[#33d1e9] active:text-[#1ba9be] transition-colors duration-200' />
										</button>
										<input
											type='text'
											className='p-1 w-[22rem] text-center  font-mono bg-[#e9ecef] border border-l-0 border-r-0 border-gray-300 focus:outline-none'
											placeholder='dfkd-fks4-fskk-f4ksh-fs2k-lkj8'
										/>
										<button className='border border-[#1abfd8] border-l-none px-2 rounded-r hover:border-[#33d1e9] hover:bg-[#1abfd8] text-[#1ba9be] hover:text-white active:text-[#1ba9be] active:bg-white transition-all duration-300'>
											<CheckIcon className='w-[1rem]' />
										</button>
									</div>
								</td>
								<td className='pl-4 py-4'>
									<button
										type='button'
										className='flex items-center space-x-2 text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-4 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
									>
										<TrashIcon className='w-[1rem]' />
										<span>Delete API key</span>
									</button>
								</td>
							</tr>
							<tr className='bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'>
								<th
									scope='row'
									className='px-6 py-4 border-r font-thin text-gray-700 capitalize whitespace-nowrap dark:text-white '
								>
									<div className='flex space-x-2 items-center'>
										<p>blue prism</p>
									</div>
								</th>
								<td className='px-6 w-[26rem] border-r py-4'>
									<div className='flex h-[2rem] '>
										<button className='border border-[#1abfd8] border-r-none px-2 rounded-l hover:border-[#33d1e9]'>
											<DocumentDuplicateIcon className='w-[1rem] text-[#1abfd8] hover:text-[#33d1e9] active:text-[#1ba9be] transition-colors duration-200' />
										</button>
										<input
											type='text'
											className='p-1 w-[22rem] text-center  font-mono bg-[#e9ecef] border border-l-0 border-r-0 border-gray-300 focus:outline-none'
											placeholder='dfkd-fks4-fskk-f4ksh-fs2k-lkj8'
										/>
										<button className='border border-[#1abfd8] border-l-none px-2 rounded-r hover:border-[#33d1e9] hover:bg-[#1abfd8] text-[#1ba9be] hover:text-white active:text-[#1ba9be] active:bg-white transition-all duration-300'>
											<CheckIcon className='w-[1rem]' />
										</button>
									</div>
								</td>
								<td className='pl-4 py-4'>
									<button
										type='button'
										className='flex items-center space-x-2 text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-4 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
									>
										<TrashIcon className='w-[1rem]' />
										<span>Delete API key</span>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</>
	);
};

export default SettingsAdvanced;
