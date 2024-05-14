import React, { HTMLInputTypeAttribute } from 'react';
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import formSchema from '@/schemas/formSchemas';

const schema = formSchema('sign-up');

type FormControlsProps = {
	name: FieldPath<z.infer<typeof schema>>;
	label: string;
	inputType: HTMLInputTypeAttribute;
	control: Control<z.infer<typeof schema>>;
	placeholder: string;
};

const FormControls: React.FC<FormControlsProps> = ({
	name,
	label,
	placeholder,
	control,
	inputType,
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className='mt-3 flex flex-col w-full gap-1'>
					<>
						<FormLabel>{label}</FormLabel>
						<FormControl>
							<Input
								type={inputType}
								placeholder={placeholder}
								{...field}
								className='focus-visible:ring-offset-0 focus-visible:ring-0'
							/>
						</FormControl>
						<FormMessage className='mt-2 text-12 text-red-500' />
					</>
				</FormItem>
			)}
		/>
	);
};

export default FormControls;
