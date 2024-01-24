// Dependencies
import { twMerge } from 'tailwind-merge';

// Interfaces
import { IInput } from '@/interfaces';

export const TextInput = ({
  fieldName,
  errors,
  labelText,
  defaultValue,
  placeholder,
  className,
  inputType = 'text',
  isDisabled = false,
  handleChange,
}: IInput) => {
  return (
    <div className='flex flex-col w-full gap-y-2'>
      {labelText && (
        <label htmlFor={fieldName} className='text-sm font-semibold leading-6'>
          {labelText}
        </label>
      )}

      <input
        type={inputType}
        name={fieldName}
        id={fieldName}
        placeholder={placeholder}
        disabled={isDisabled}
        aria-describedby={`${fieldName}-error`}
        defaultValue={defaultValue}
        autoComplete='off'
        className={twMerge(
          'rounded-md bg-ebony-100 text-bunker-950 px-3.5 py-2 sm:text-sm sm:leading-6 w-full',
          className,
          errors[fieldName] ? 'border-[rgb(239,68,68)] border' : ''
        )}
        onChange={handleChange}
      />
      {errors[fieldName] && (
        <p className='mt-1 text-sm text-[rgb(239,68,68)]'>
          {errors[fieldName]}
        </p>
      )}
    </div>
  );
};
