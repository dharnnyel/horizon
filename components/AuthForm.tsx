'use client';

import React, { useState } from 'react';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './ui/form';

import Logo from './Logo';
import { Button } from './ui/button';
import formSchema from '@/schemas/formSchemas';

import FormComponent from './FormComponent';

type AuthFormProps = {
	type: 'sign-in' | 'sign-up';
};

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
	const [user, setUser] = useState(null);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { email: '', password: '' },
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values);
	};

	return (
		<div className='bg-gray-500 shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-0 border-2 border-black-1 rounded-xl w-[450px] md:w-[500px] py-3 px-4'>
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
							className='space-y-8'
						>
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
							<Button type='submit'>Submit</Button>
						</form>
					</Form>
				</>
			)}
		</div>
	);
};

export default AuthForm;
