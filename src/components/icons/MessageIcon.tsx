// Dependencies
import { JSX } from 'react/jsx-runtime';
import { SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const MessageIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      className={twMerge(
        'icon icon-tabler icon-tabler-message',
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
      <path d='M8 9h8' />
      <path d='M8 13h6' />
      <path d='M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z' />
    </svg>
  );
};
