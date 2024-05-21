import MobileNav from '@/components/MobileNav';
import SideBar from '@/components/SideBar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { Metadata } from 'next';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Horizon',
	description:
		'Horizon is a modern banking platform for everyone',
	icons: {
		icon: '/icons/logo.svg',
	},
};

const RootLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const loggedInUser = await getLoggedInUser();

	if(!loggedInUser) redirect('/sign-in');

	return (
		<main className='flex h-screen w-full font-inter'>
			<SideBar user={loggedInUser} />
			<div className='flex size-full flex-col'>
				<div>
					<MobileNav user={loggedInUser} />
				</div>
				{children}
			</div>
		</main>
	);
};

export default RootLayout;
