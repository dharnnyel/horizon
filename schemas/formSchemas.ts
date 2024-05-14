import { z } from 'zod';

const formSchema = (type: string) =>
	z.object({
		// sign up
		firstName:
			type === 'sign-in'
				? z.string().optional()
				: z.string().min(3),
		lastName:
			type === 'sign-in'
				? z.string().optional()
				: z.string().min(3),
		address:
			type === 'sign-in'
				? z.string().optional()
				: z.string().min(50),
		state:
			type === 'sign-in'
				? z.string().optional()
				: z.string().min(2).max(2),
		postalCode:
			type === 'sign-in'
				? z.string().optional()
				: z.string().min(3).max(6),
		dateOfBirth:
			type === 'sign-in'
				? z.string().optional()
				: z.string().min(3),
		ssn:
			type === 'sign-in'
				? z.string().optional()
				: z.string().min(3),
		// both sign in and sign up
		email: z.string().email(),
		password: z.string().min(8),
	});

export default formSchema;
