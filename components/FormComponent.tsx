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

type FormControlsProps = {
	name: FieldPath<z.infer<typeof formSchema>>;
	label: string;
	inputType: HTMLInputTypeAttribute;
	control: Control<z.infer<typeof formSchema>>;
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
				<FormItem className='border border-red-500 mt-6 flex flex-col gap-1'>
					<>
						<FormLabel>{label}</FormLabel>
						<FormControl>
							<Input
								type={inputType}
								placeholder={placeholder}
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</>
				</FormItem>
			)}
		/>
	);
};

export default FormControls;
