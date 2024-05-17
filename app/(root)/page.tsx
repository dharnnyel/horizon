import Header from '@/components/Header';
import RightSideBar from '@/components/RightSideBar';
import TotalBalance from '@/components/TotalBalance';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react';

type HomeProps = {};

const Home: React.FC<HomeProps> = async props => {
	const loggedInUser = await getLoggedInUser();

	return (
		<section className='home'>
			<div className='home-content'>
				<header className='home-header'>
					<Header
						type='greeting'
						title='Welcome'
						user={loggedInUser?.name || 'Guest'}
						subtext='Access and manage your accounts and transactions efficiently.'
					/>

					<TotalBalance
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1250.35}
					/>
				</header>
				{/* TODO: Recent Transactions */}
				RECENT TRANSACTIONS
			</div>

			<RightSideBar
				user={loggedInUser}
				transactions={[]}
				banks={[{}, {}]}
			/>
		</section>
	);
};

export default Home;
