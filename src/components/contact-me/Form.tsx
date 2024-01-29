// Dependencies
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { object, string } from 'zod';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  //#region constants
  const { t } = useTranslation();
  const methods = useForm<IFormData>({
    resolver: zodResolver(schema),
    defaultValues: initialFormData,
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;
  //#endregion

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
          labelText={t('contact.form.input1.title')}
          placeholder='John Doe'
          isRequired
        />
        <TextInput
          fieldName='email'
          labelText={t('contact.form.input2.title')}
          placeholder='johndoe@gmail.com'
          isRequired
        />
        <TextAreaInput
          fieldName='message'
          labelText={t('contact.form.input3.title')}
          placeholder={t('contact.form.input3.placeholder')}
          isRequired
        />
        <div className='mt-10'>
          <button
            type='submit'
            disabled={isSubmitting}
            className='block w-full rounded-md bg-ebony-600 dark:bg-ebony-600 px-3.5 py-2.5 text-center text-sm font-semibold text-ebony-50 shadow-sm hover:bg-ebony-500 dark:hover:bg-ebony-500 disabled:bg-ebony-800/40 disabled:text-ebony-100 dark:disabled:bg-ebony-800/40 dark:disabled:text-ebony-100 disabled:cursor-progress'
          >
            {t('contact.form.buttonText')}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
