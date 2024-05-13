import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

type AuthLayoutProps = {
	children: React.ReactNode;
};

// export const metadata: Metadata = {
// 	title: 'Horizon | ',
// 	description:
// 		'Horizon is a modern banking platform for everyone',
// 	icons: {
// 		icon: '/icons/logo.svg',
// 	},
// };

const AuthLayout: React.FC<AuthLayoutProps> = ({
	children,
}) => {
	return (
		<main className='w-full min-h-screen flex font-inter justify-between'>
			{children}
			<div className='bg-sky-50 w-[85%] pl-8 flex justify-end items-center max-lg:hidden'>
				<div>
					<Image
						src='/icons/auth-image.svg'
						width={500}
						height={500}
						alt='Auth image'
						className='rounded-l-xl object-contain'
					/>
				</div>
			</div>
		</main>
	);
};

export default AuthLayout;
