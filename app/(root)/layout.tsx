import MobileNav from '@/components/MobileNav';
import SideBar from '@/components/SideBar';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'Horizon',
	description:
		'Horizon is a modern banking platform for everyone',
	icons: {
		icon: '/icons/logo.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const loggedIn = {
		$id: 'abc123',
		email: 'example@example.com',
		userId: 'user123',
		dwollaCustomerUrl: 'https://www.dwolla.com/user123',
		dwollaCustomerId: 'dwolla123',
		address1: '123 Street',
		city: 'Cityville',
		state: 'State',
		postalCode: '12345',
		dateOfBirth: '1990-01-01',
		ssn: '123-45-6789',
		firstName: 'Daniel',
		lastName: 'Ubah',
	};
	return (
		<main className='flex h-screen w-full font-inter'>
			<SideBar user={loggedIn} />
			<div className='flex size-full flex-col'>
				<div>
					<MobileNav user={loggedIn} />
				</div>
				{children}
			</div>
		</main>
	);
}
