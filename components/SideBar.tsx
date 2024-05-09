import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DesktopNav from './DesktopNav';
import { sidebarLinks } from '@/constants';

const SideBar: React.FC<SideBarProps> = ({ user }) => {
	return (
		<section className='sidebar'>
			<nav className='flex flex-col gap-10'>
				<Link
					href='/'
					className='flex text-black-1 items-center gap-1 cursor-pointer'
				>
					<Image
						src='/icons/logo.svg'
						width={34}
						height={34}
						alt='logo'
						className='size-[50px] xl:size-[36px]'
					/>
					<span className='font-bold text-[30px] font-ibm-plex-serif max-xl:hidden '>
						Horizon
					</span>
				</Link>

				<div className='w-full'>
					<DesktopNav links={sidebarLinks} />
				</div>
				{/* TODO: Render user data */}
			</nav>

			{/* TODO: Create footer content */}
		</section>
	);
};

export default SideBar;
