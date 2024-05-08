import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SideBar: React.FC<SideBarProps> = ({ user }) => {
	return (
		<section className='sidebar'>
			<nav className='flex flex-col gap-4 border border-red-500'>
				<Link
					href='/'
					className='flex text-black-1 justify-center items-center gap-1 cursor-pointer'
				>
					<Image
						src='/icons/logo.svg'
						width={34}
						height={34}
						alt='logo'
						className='size-[24px]'
					/>
					<span className='font-bold text-[26px] 2xl:text-26 font-ibm-plex-serif max-xl:hidden '>
						Horizon
					</span>
				</Link>
			</nav>
		</section>
	);
};

export default SideBar;
