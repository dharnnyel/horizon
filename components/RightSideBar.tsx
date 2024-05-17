import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BankCard from './BankCard';

const RightSideBar: React.FC<RightSidebarProps> = ({
	user,
	banks,
	transactions,
}) => {
	return (
		<aside className='hidden xl:flex xl:flex-col border-gray-200 h-screen max-h-screen w-fit no-scrollbar xl:overflow-y-scroll border-l'>
			{/* TODO: Check if the width property on this item affects the layout of the right sidebar */}
			<section className='flex relative flex-col w-[355px]'>
				<div className='profile-banner' />
				<div className='relative'>
					<div className='absolute bg-gray-100 shadow-profile border-4 border-white left-5 -top-8 w-24 h-24 rounded-full flex items-center justify-center'>
						<span className='text-5xl font-bold text-blue-500'>{`${user?.name[0]}`}</span>
					</div>

					<div className='pt-24 pl-7 gap-1 flex flex-col'>
						<h2 className='text-2xl font-semibold'>{`${user?.name}`}</h2>
						<p className='text-base font-light text-gray-600'>
							{user?.email}
						</p>
					</div>
				</div>
			</section>

			<section className='banks'>
				<div className='flex justify-between items-center'>
					<h2 className='header-2'>My Banks</h2>
					<Link
						href='/'
						className='flex gap-2'
					>
						<Image
							src='/icons/plus.svg'
							width={20}
							height={20}
							alt='plus'
						/>
						<p className='text-14 text-gray-600 font-semibold'>
							Add bank
						</p>
					</Link>
				</div>

				{banks.length > 0 && (
					<div className='relative'>
						<div className='absolute z-10 right-3 -top-9 w-full'>
							<BankCard
								key={banks[0].$id}
								account={banks[0]}
								userName={`${user?.name}`}
                showBalance={false}
                card={0}
							/>
						</div>
						{banks[1] && (
							<div className='absolute z-0 -right-5 w-full'>
								<BankCard
									key={banks[0].$id}
									account={banks[1]}
									userName={`${user?.name}`}
                  showBalance={false}
                  card={1}
								/>
							</div>
						)}
					</div>
				)}
			</section>
		</aside>
	);
};

export default RightSideBar;
