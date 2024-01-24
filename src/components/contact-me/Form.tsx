// Dependencies
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { object, string } from 'zod';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

// Components
import { TextAreaInput, TextInput } from '@/components/global-components';

// Interfaces
import { IFormData } from '@/interfaces';

// Services
import { sendEmail } from '@/services/mailService';

// Constants
const schema = object({
  name: string().min(1, { message: 'This field is required' }).max(50),
  email: string().email({ message: 'Email format is not valid.' }),
  message: string().min(1, { message: 'This field is required.' }).max(500),
});

const initialFormData: IFormData = {
  name: '',
  email: '',
  message: '',
};

export const Form = () => {
  const methods = useForm<IFormData>({
    resolver: zodResolver(schema),
    defaultValues: initialFormData,
  });
  const { handleSubmit, reset } = methods;

  //#region useStates
  const [formKey, setFormKey] = useState<number>(0);
  //#endregion

  //#region functions
  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const { email, name, message } = data;
    await sendEmail(email, name, message).finally(() => {
      reset();
      setFormKey((prevKey) => prevKey + 1);
    });
  };
  //#endregion

  return (
    <FormProvider {...methods}>
      <form
        key={formKey}
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col w-full mt-8 md:mt-0 gap-y-4'
      >
        <TextInput
          fieldName='name'
          labelText='Full Name'
          placeholder='John Doe'
          isRequired
        />
        <TextInput
          fieldName='email'
          labelText='Email'
          placeholder='johndoe@gmail.com'
          isRequired
        />
        <TextAreaInput
          fieldName='message'
          labelText='Message'
          placeholder='Type your message'
          isRequired
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
    </FormProvider>
  );
};
