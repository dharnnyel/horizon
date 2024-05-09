'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type DesktopNavProps = {
	links: {
		imgURL: string;
		route: string;
		label: string;
	}[];
};

const DesktopNav: React.FC<DesktopNavProps> = ({
	links,
}) => {
	const pathname = usePathname();
	return (
		<div>
			{links.map(link => {
				const isActive =
					pathname === link.route ||
					pathname.startsWith(`${link.route}/`);

				return (
					<Link
						href={link.route}
						key={link.label}
						className={cn('sidebar-link', {
							'bg-bank-gradient': isActive,
						})}
					>
						<div className='relative size-6'>
							<Image
								src={link.imgURL}
								alt={link.label}
								fill
								className={cn({
									'brightness-[3] invert-0': isActive,
								})}
							/>
						</div>
						<p
							className={cn('sidebar-label text-black-2', {
								'text-white': isActive,
							})}
						>
							{link.label}
						</p>
					</Link>
				);
			})}
		</div>
	);
};

export default DesktopNav;
