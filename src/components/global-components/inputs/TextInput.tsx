// Dependencies
import { Controller, useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

// Interfaces
import { IInput } from '@/interfaces';

export const TextInput = ({
  className,
  defaultValue,
  fieldName,
  labelText,
  placeholder,
  inputType = 'text',
  isDisabled = false,
  isRequired = false,
}: IInput) => {
  // #region context
  const {
    control,
    formState: { errors },
  } = useFormContext();
  // #endregion

  return (
    <div className='flex flex-col w-full gap-y-2'>
      {labelText && (
        <label htmlFor={fieldName} className='text-sm font-semibold leading-6'>
          {labelText}
        </label>
      )}
      <Controller
        name={fieldName}
        defaultValue={defaultValue}
        control={control}
        rules={{ required: isRequired }}
        render={({ field }) => (
          <>
            <input
              {...field}
              type={inputType}
              name={fieldName}
              id={fieldName}
              placeholder={placeholder}
              disabled={isDisabled}
              aria-describedby={`${fieldName}-error`}
              autoComplete='off'
              className={twMerge(
                'rounded-md dark:bg-ebony-100 bg-white px-3.5 py-2 sm:text-sm sm:leading-6 w-full dark:text-ebony-950',
                className,
                errors[fieldName] ? 'border-red-500 border' : ''
              )}
            />
            {errors[fieldName] && (
              <p className='mt-1 text-sm text-red-500'>{`${labelText} is required`}</p>
            )}
          </>
        )}
      />
    </div>
  );
};
