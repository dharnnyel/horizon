import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type LogoProps = {
	to?: string;
	textStyles?: string;
	imgStyles?: string;
};

const Logo: React.FC<LogoProps> = ({
	to,
	textStyles,
	imgStyles,
}) => {
	return (
		<Link
			href={to ? to : '/'}
			className='flex text-black-1 items-center gap-2 cursor-pointer'
		>
			<Image
				src='/icons/logo.svg'
				width={34}
				height={34}
				alt='logo'
				className={`${imgStyles}`}
			/>
			<span
				className={`font-bold text-[25px] font-ibm-plex-serif ${textStyles}`}
			>
				Horizon
			</span>
		</Link>
	);
};

export default Logo;
