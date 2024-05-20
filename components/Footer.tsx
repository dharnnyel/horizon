import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const Footer: React.FC<FooterProps> = ({ user, type }) => {
	return (
		<footer
			className={cn(
        'text-black-3 cursor-pointer flex py-4 px-2 md:px-0 gap-14 md:items-center md:justify-center border-collapse xl:border-t xl:border-t-gray-200',
        {
          'flex items-center': type === 'mobile'
        }
			)}
		>
			<div
				className={cn(`hidden xl:flex gap-3`, {
					'flex py-2 px-1 border-t border-t-gray-200': type === 'mobile',
				})}
			>
				<Image
					src='/icons/jsm.svg'
					width={40}
					height={40}
					alt='profile picture'
				/>
				<div className='flex flex-col'>
					<h2 className='font-semibold text-16'>{`${user.firstName} ${user.lastName}`}</h2>
					<p className='text-14'>{user.email}</p>
				</div>
			</div>

			<div className='flex items-center w-8 h-8'>
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
