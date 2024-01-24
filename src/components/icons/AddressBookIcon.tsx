// Dependencies
import { JSX } from 'react/jsx-runtime';
import { SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const AddressBookIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      className={twMerge(
        'icon icon-tabler icon-tabler-address-book',
        props.className
      )}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z' />
      <path d='M10 16h6' />
      <path d='M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M4 8h3' />
      <path d='M4 12h3' />
      <path d='M4 16h3' />
    </svg>
  );
};
