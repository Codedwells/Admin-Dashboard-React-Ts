import {
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
} from '@heroicons/react/20/solid';
import { ReactNode, useCallback, useState } from 'react';

interface buttonProps {
	content: ReactNode;
	onClick: () => void;
	active?: boolean;
	disabled?: boolean;
}

interface paginationProps {
	gotoPage: React.Dispatch<React.SetStateAction<number>>;
	canPreviousPage: boolean;
	canNextPage: boolean;
	pageCount: number;
	pageIndex: number;
}

const Button2 = ({ content, onClick, active, disabled }: buttonProps) => {
	return (
		<button
			className={`flex flex-col cursor-pointer  font-[600] items-center font-Nunito justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm transition-colors rounded-lg
      ${active ? ' shadow-md shadow-gray-300 text-[#1ba9be] text-xl' : 'text-[#8f91a0]'}
      ${
				!disabled
					? 'bg-white hover:shadow'
					: 'text-[#9FA2B4] bg-white cursor-not-allowed'
			}
      `}
			onClick={onClick}
			disabled={disabled}
		>
			{content}
		</button>
	);
};

const PaginationNav1 = ({
	gotoPage,
	canPreviousPage,
	canNextPage,
	pageCount,
	pageIndex,
}: paginationProps) => {
	const renderPageLinks = useCallback(() => {
		if (pageCount === 0) return null;
		const visiblePageButtonCount = 3;
		let numberOfButtons =
			pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;
		const pageIndices = [pageIndex];
		numberOfButtons--;
		[...Array(numberOfButtons)].forEach((_item, itemIndex) => {
			const pageNumberBefore = pageIndices[0] - 1;
			const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;
			if (
				pageNumberBefore >= 0 &&
				(itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)
			) {
				pageIndices.unshift(pageNumberBefore);
			} else {
				pageIndices.push(pageNumberAfter);
			}
		});
		return pageIndices.map((pageIndexToMap) => (
			<li key={pageIndexToMap}>
				<Button2
					content={pageIndexToMap + 1}
					onClick={() => gotoPage(pageIndexToMap)}
					active={pageIndex === pageIndexToMap}
				/>
			</li>
		));
	}, [pageCount, pageIndex]);
	return (
		<ul className='flex gap-2'>
			<li>
				<Button2
					content={
						<div className='flex items-center justify-center'>
							<ChevronDoubleLeftIcon className='w-[1.3rem]' />
						</div>
					}
					onClick={() => gotoPage(0)}
					disabled={!canPreviousPage}
				/>
			</li>
			{renderPageLinks()}
			<li>
				<Button2
					content={
						<div className='flex items-center justify-center'>
							<ChevronDoubleRightIcon className='w-[1.3rem]' />
						</div>
					}
					onClick={() => gotoPage(pageCount - 1)}
					disabled={!canNextPage}
				/>
			</li>
		</ul>
	);
};

export default PaginationNav1;
