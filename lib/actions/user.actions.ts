'use server';

import { cookies } from 'next/headers';

import { ID } from 'node-appwrite';
import {
	createAdminClient,
	createSessionClient,
} from '../server/appwrite';

import { parseStringify } from '../utils';

const signIn = async (data: signInProps) => {
	const { email, password } = data;

	try {
		const { account } = await createAdminClient();

		const response =
			await account.createEmailPasswordSession(
				email,
				password
			);

		return parseStringify(response);
		
	} catch (error) {
		console.log('Error', error);
	}
};

const signUp = async (userData: SignUpParams) => {
	const { email, password, firstName, lastName } = userData;

	try {
		const { account } = await createAdminClient();
		const newUserAccount = await account.create(
			ID.unique(),
			email,
			password,
			`${firstName} ${lastName}`
		);

		const session =
			await account.createEmailPasswordSession(
				email,
				password
			);

		cookies().set('appwrite-session', session.secret, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: true,
		});

		return parseStringify(newUserAccount);
	} catch (error) {
		console.log('Error', error);
	}
};

const getLoggedInUser = async () => {
	try {
		const { account } = await createSessionClient();
		const user = await account.get();

		return parseStringify(user);
	} catch (error) {
		return null;
	}
};

export { signIn, signUp, getLoggedInUser };
