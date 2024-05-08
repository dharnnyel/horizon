import Header from '@/components/Header';
import TotalBalance from '@/components/TotalBalance';
import React from 'react';

type HomeProps = {};

const Home: React.FC<HomeProps> = props => {
	const loggedIn = { firstName: 'Daniel' };

	return (
		<div className='home'>
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
			</div>
		</div>
	);
};

export default Home;
