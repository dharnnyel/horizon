'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form } from './ui/form';
import { Button } from './ui/button';

import { Loader2 } from 'lucide-react';

import formSchema from '@/schemas/formSchemas';
import Logo from './Logo';
import FormComponent from './FormComponent';
import { signIn, signUp } from '@/lib/actions/user.actions';

type AuthFormProps = {
	type: 'sign-in' | 'sign-up';
};

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();

	const schema = formSchema(type);

	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (data: z.infer<typeof schema>) => {
		setIsLoading(true);

		try {
			// TODO: Sign up with Appwrite and create Plaid Token

			if (type === 'sign-up') {
				const newUser = await signUp(data);
				setUser(newUser);
			}

			if (type === 'sign-in') {
				const response = await signIn({
					email: data.email,
					password: data.password,
				});

				console.log(response);
				if (response) router.push('/');
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='bg-gray-500 shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-0 border-2 border-gray-100 rounded-xl w-[450px] md:w-[520px] py-3 px-4'>
			<header className='flex flex-col gap-5'>
				<Logo />
				<div className='flex flex-col gap-2 md:gap-3'>
					<h2 className='font-semibold text-4xl text-gray-900'>
						{user
							? 'Link Account'
							: type === 'sign-in'
							? 'Sign In'
							: 'Sign Up'}
					</h2>
					<p className='text-gray-600'>
						{user
							? 'Link your account to get started'
							: 'Please enter your details'}
					</p>
				</div>
			</header>
			{user ? (
				<div className='flex flex-col gap-4'>
					{/* TODO: Create a PlaidLink */}
				</div>
			) : (
				<>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className=''
						>
							{type === 'sign-up' && (
								<div className='flex flex-col '>
									<div className='flex gap-5 flex-col md:flex-row'>
										<FormComponent
											name='firstName'
											label='First Name'
											placeholder='Example: John'
											inputType='text'
											control={form.control}
										/>
										<FormComponent
											name='lastName'
											label='Last Name'
											placeholder='Example: Doe'
											inputType='text'
											control={form.control}
										/>
									</div>

									<div>
										<FormComponent
											name='address'
											label='Address'
											placeholder='Enter your specific address'
											inputType='text'
											control={form.control}
										/>
									</div>
									<div className='flex gap-5 flex-col md:flex-row'>
										<FormComponent
											name='state'
											label='State'
											placeholder='Example: NY'
											inputType='text'
											control={form.control}
										/>
										<FormComponent
											name='postalCode'
											label='Postal Code'
											placeholder='Example: 11101'
											inputType='number'
											control={form.control}
										/>
									</div>
									<div className='flex gap-5 flex-col md:flex-row'>
										<FormComponent
											name='dateOfBirth'
											label='Date of Birth'
											placeholder='yyyy-mm-dd'
											inputType='text'
											control={form.control}
										/>
										<FormComponent
											name='ssn'
											label='SSN'
											placeholder='Example: 1234'
											inputType='number'
											control={form.control}
										/>
									</div>
								</div>
							)}

							<div>
								<FormComponent
									name='email'
									label='Email'
									placeholder='Enter Your email'
									inputType='email'
									control={form.control}
								/>
								<FormComponent
									name='password'
									label='Password'
									placeholder='Enter Your password'
									inputType='password'
									control={form.control}
								/>
							</div>

							<Button
								type='submit'
								className='w-full bg-bankGradient text-white mt-4'
								disabled={isLoading}
							>
								{isLoading ? (
									<>
										<Loader2
											size={20}
											className='animate-spin'
										/>{' '}
										&nbsp; Loading...
									</>
								) : type === 'sign-in' ? (
									'Sign In'
								) : (
									'Sign Up'
								)}
							</Button>
						</form>
					</Form>

					<footer className='flex justify-center gap-1 mt-5 text-xs'>
						<p>
							{type === 'sign-in'
								? `Don't have an account?`
								: 'Already have an account?'}
						</p>
						<Link
							href={
								type === 'sign-in' ? '/sign-up' : '/sign-in'
							}
							className='text-bankGradient'
						>
							{type === 'sign-in' ? 'Sign up' : 'Sign in'}
						</Link>
					</footer>
				</>
			)}
		</div>
	);
};

export default AuthForm;
