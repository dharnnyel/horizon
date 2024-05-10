import Header from '@/components/Header';
import RightSideBar from '@/components/RightSideBar';
import TotalBalance from '@/components/TotalBalance';
import React from 'react';

type HomeProps = {};

const Home: React.FC<HomeProps> = props => {
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
		<section className='home'>
			<div className='home-content'>
				<header className='home-header'>
					<Header
						type='greeting'
						title='Welcome'
						user={loggedIn.firstName || 'Guest'}
						subtext='Access and manage your accounts and transactions efficiently.'
					/>

					<TotalBalance
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1250.35}
					/>
				</header>

				{/* TODO: Recent Transactions */}
			</div>

			<RightSideBar
				user={loggedIn}
				transactions={[]}
				banks={[]}
			/>
		</section>
	);
};

export default Home;
