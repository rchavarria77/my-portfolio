// Dependencies
import { object, string, z } from 'zod';
import { useState } from 'react';

// Components
import { TextAreaInput, TextInput } from '@/components/global-components';

// Interfaces
import { IFormData } from '@/interfaces';

// Services
import { sendEmail } from '@/services/mailService';

// Constants
const schema = object({
  name: string().min(1, { message: 'This field is required' }).max(50),
  email: string()
    .min(1, { message: 'This field is required.' })
    .email({ message: 'Email format is not valid.' }),
  message: string().min(1, { message: 'This field is required.' }).max(500),
});

const initialFormData: IFormData = {
  name: '',
  email: '',
  message: '',
};

export const Form = () => {
  //#region useStates
  const [formData, setFormData] = useState<IFormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formKey, setFormKey] = useState<number>(0);
  //#endregion

  //#region functions
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const resetFormState = () => {
    setFormErrors({});
    setFormData(initialFormData);
    setFormKey((prevKey) => prevKey + 1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      schema.parse(formData);
      const { name, email, message } = schema.parse(formData);

      await sendEmail(email, name, message);
      resetFormState();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationErrors: Record<string, string> = {};
        error.errors.forEach((validationError) => {
          const fieldName = validationError.path[0];
          validationErrors[fieldName] = validationError.message;
        });
        setFormErrors(validationErrors);
      }
    }
  };
  //#endregion

  return (
    <form
      key={formKey}
      onSubmit={handleSubmit}
      className='flex flex-col w-full gap-y-4'
    >
      <TextInput
        fieldName='name'
        errors={formErrors}
        labelText='Full Name'
        placeholder='John Doe'
        defaultValue={formData.name}
        handleChange={handleChange}
      />
      <TextInput
        fieldName='email'
        errors={formErrors}
        labelText='Email'
        placeholder='johndoe@gmail.com'
        defaultValue={formData.email}
        handleChange={handleChange}
      />
      <TextAreaInput
        fieldName='message'
        errors={formErrors}
        labelText='Message'
        placeholder='Type your message'
        defaultValue={formData.message}
        handleChange={handleChange}
      />
      <div className='mt-10'>
        <button
          type='submit'
          className='block w-full rounded-md bg-ebony-600 px-3.5 py-2.5 text-center text-sm font-semibold text-bunker-50 shadow-sm hover:bg-ebony-500'
        >
          Let's talk
        </button>
      </div>
    </form>
  );
};
