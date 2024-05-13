import AuthForm from '@/components/AuthForm';
import React from 'react';

type SignInProps = {};

const SignIn: React.FC<SignInProps> = props => {
	return (
		<section className='max-sm:px-6 w-full py-4 flex justify-center items-center border-4 border-red-500'>
			<AuthForm type='sign-in' />
		</section>
	);
};

export default SignIn;
