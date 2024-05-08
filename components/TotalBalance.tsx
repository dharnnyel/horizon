'use client';

import Link from 'next/link';
import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

const TotalBalance: React.FC<TotalBalanceProps> = ({
	accounts = [],
	totalBanks,
	totalCurrentBalance,
}) => {
	return (
		<section className='total-balance'>
			{/* TODO: Create doughnut chart */}
			<div className='border-2 border-red-500 max-w-52'>
				<DoughnutChart accounts={accounts} />
			</div>

			<div className='flex justify-between border w-full'>
				<div className='flex flex-col gap-6'>
					<h2 className='font-semibold text-base leading-6'>
						Bank Accounts: {totalBanks}
					</h2>
					<p className='flex flex-col'>
						<span className='text-gray-600  text-14 font-medium'>
							Total Current Balance:
						</span>
						<span className='text-24 lg:text-30 font-semibold flex-1'>
							<AnimatedCounter
								amount={totalCurrentBalance}
							/>
						</span>
					</p>
				</div>
				<Link
					href='/'
					className='border self-start content-end hidden sm:block text-bankGradient'
				>
					+ Add bank
				</Link>
			</div>
		</section>
	);
};

export default TotalBalance;
