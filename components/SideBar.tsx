import React from 'react';
import DesktopNav from './DesktopNav';
import { sidebarLinks } from '@/constants';
import Logo from './Logo';
import Footer from './Footer';

const SideBar: React.FC<SideBarProps> = ({ user }) => {
	return (
		<section className='sidebar'>
			<nav className='flex flex-col gap-10 max-xl:items-center'>
				<Logo
					textStyles='max-xl:hidden'
					imgStyles='size-[50px] xl:size-[36px]'
				/>

				<div className='w-fit'>
					<DesktopNav links={sidebarLinks} />
				</div>
				{/* TODO: Render user data */}
			</nav>

			{/* TODO: Create footer content */}
			<Footer
				user={user}
			/>
		</section>
	);
};

export default SideBar;
