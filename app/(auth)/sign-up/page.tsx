import AuthForm from '@/components/AuthForm';
import React from 'react';

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = props => {
	return (
		<section className='max-sm:px-6 py-4 border-2 border-red-500 w-full flex justify-center items-center'>
			<AuthForm type='sign-up' />
		</section>
	);
};

export default SignUp;
