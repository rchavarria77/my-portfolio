// Dependencies
import { JSX } from 'react/jsx-runtime';
import { SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const ChevronsUpIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      className={twMerge(
        'icon icon-tabler icon-tabler-chevrons-up',
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
      <path d='M7 11l5 -5l5 5' />
      <path d='M7 17l5 -5l5 5' />
    </svg>
  );
};
