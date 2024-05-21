'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import { logoutAccount } from '@/lib/actions/user.actions';
import { cn } from '@/lib/utils';

const Footer: React.FC<FooterProps> = ({ user, type }) => {
	const router = useRouter();

	const handleLogOut = async () => {
		const loggedOut = await logoutAccount();

		if (loggedOut) router.push('/sign-in');
	};

	return (
		<footer
			className={cn(
				'text-black-3 cursor-pointer flex py-4 md:px-0 gap-5 md:items-center md:justify-center border-collapse xl:border-t xl:border-t-gray-200',
				{
					'py-1 pt-4 border-t border-t-gray-200 items-center justify-between px-0 gap-5':
						type === 'mobile',
				}
			)}
		>
			<div
				className={cn(`hidden xl:flex gap-3`, {
					flex: type === 'mobile',
				})}
			>
				<div className='bg-gray-100 shadow-profile border-2 border-white w-10 h-10 rounded-full flex items-center justify-center'>
					<span className='text-2xl font-bold text-blue-500'>{`${user?.name[0]}`}</span>
				</div>
				<div className='flex flex-col'>
					<h2 className={cn('font-semibold text-16')}>
						{user?.name}
					</h2>
					<p className='text-14'>{user?.email}</p>
				</div>
			</div>

			<div
				className={cn(
					'flex items-center md:w-8 md:h-8 lg:w-6 lg:h-6',
					{
						'h-6 w-6': type === 'mobile',
					}
				)}
				onClick={handleLogOut}
			>
				<Image
					src='/icons/logout.svg'
					width={34}
					height={34}
					alt='profile picture'
				/>
			</div>
		</footer>
	);
};

export default Footer;
