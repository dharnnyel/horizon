import React from 'react';

const Header: React.FC<HeaderProps> = ({
	title,
	subtext,
	type,
	user,
}) => {
	return (
		<div className='header'>
			<h1 className='text-24 font-semibold lg:text-30'>
				{title}
				{','}
				{type === 'greeting' && (
					<span className='text-bankGradient'>
						&nbsp;
						{user}
					</span>
				)}
			</h1>
			<p className='text-14 lg:text-16 font-normal text-gray-600'>
				{subtext}
			</p>
		</div>
	);
};

export default Header;
