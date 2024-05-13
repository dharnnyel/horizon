import { z } from 'zod';

const formSchema = z.object({
	email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  address: z.string().min(3),
  state: z.string().min(3),
  postalCode: z.string().min(3),
  dateOfBirth: z.string().min(3),
  ssn: z.string().min(3),
});

export default formSchema;
