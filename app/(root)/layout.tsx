import SideBar from '@/components/SideBar';

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
      {children}
		</main>
	);
}
