import AuthForm from '@/components/AuthForm';
import React from 'react';

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = props => {
	return (
		<section className='max-sm:px-6 w-full h-screen flex justify-center items-center'>
			<AuthForm type='sign-in' />
		</section>
	);
};

export default SignUp;
