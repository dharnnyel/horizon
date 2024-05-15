import AuthForm from '@/components/AuthForm';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react';

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = async props => {
	const loggedInUser = await getLoggedInUser();

	console.log(loggedInUser);
	return (
		<section className='max-sm:px-6 py-4 w-full flex justify-center items-center'>
			<AuthForm type='sign-up' />
		</section>
	);
};

export default SignUp;
