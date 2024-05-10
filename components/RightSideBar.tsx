import React from 'react';

const RightSideBar: React.FC<RightSidebarProps> = ({
	user,
	banks,
	transactions,
}) => {
	return (
		<aside className='hidden xl:flex border-gray-200 h-screen max-h-screen min-w-[355px] no-scrollbar border-l-2'>
			RightSideBar
		</aside>
	);
};

export default RightSideBar;
