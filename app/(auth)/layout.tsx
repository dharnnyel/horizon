import Image from 'next/image';
import React from 'react';

type AuthLayoutProps = {
	children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({
	children,
}) => {
	return (
		<main className='w-full min-h-screen flex font-inter justify-between'>
			{children}
			<div className='w-[85%] pl-8 h-screen flex justify-end items-center max-lg:hidden'>
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
