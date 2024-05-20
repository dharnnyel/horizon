'use client';

import Image from 'next/image';
import React from 'react';

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import Footer from './Footer';

const MobileNav: React.FC<MobileNavProps> = ({ user }) => {
	const pathname = usePathname();

	return (
		<div className='root-layout'>
			<Image
				src='/icons/logo.svg'
				width={30}
				height={30}
				alt='logo'
			/>
			<section className='max-w-[264px]'>
				<Sheet>
					<SheetTrigger>
						<Image
							src='/icons/hamburger.svg'
							width={30}
							height={30}
							alt='menu'
							className='cursor-pointer'
						/>
					</SheetTrigger>
					<SheetContent className='backdrop-blur-sm backdrop-filter w-80 border-y border-l border-l-gray-300 border-y-gray-300 md:hidden'>
						<Logo
							to='/'
							imgStyles='size-[30px]'
						/>

						<div className='mobilenav-sheet'>
							<SheetClose asChild>
								<nav className='flex h-full flex-col gap-6 pt-10 text-white'>
									{sidebarLinks.map(link => {
										const isActive =
											pathname === link.route ||
											pathname.startsWith(`${link.route}/`);

										return (
											<SheetClose
												asChild
												key={link.route}
											>
												<Link
													href={link.route}
													key={link.label}
													className={cn(
														'mobilenav-sheet_close',
														{
															'bg-bank-gradient': isActive,
														}
													)}
												>
													<div className='relative size-6 text-black-3'>
														<Image
															src={link.imgURL}
															alt={link.label}
															fill
															className={cn({
																'brightness-[3] invert-0':
																	isActive,
															})}
														/>
													</div>
													<p
														className={cn(
															'text-xl font-medium text-black-3',
															{
																'text-white': isActive,
															}
														)}
													>
														{link.label}
													</p>
												</Link>
											</SheetClose>
										);
									})}

									{/* TODO: render user info */}
								</nav>
							</SheetClose>

							{/* TODO: Create footer content */}
							<Footer
								user={user}
								type='mobile'
							/>
						</div>
					</SheetContent>
				</Sheet>
			</section>
		</div>
	);
};

export default MobileNav;
