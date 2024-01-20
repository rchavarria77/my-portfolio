// Dependencies
import { JSX } from 'react/jsx-runtime';
import { SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const CalendarIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      className={twMerge(
        'icon icon-tabler icon-tabler-calendar',
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
      <path d='M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z' />
      <path d='M16 3v4' />
      <path d='M8 3v4' />
      <path d='M4 11h16' />
      <path d='M11 15h1' />
      <path d='M12 15v3' />
    </svg>
  );
};
