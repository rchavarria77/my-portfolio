// Dependencies
import { JSX } from 'react/jsx-runtime';
import { SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const BuildingIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      className={twMerge(
        'icon icon-tabler icon-tabler-building',
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
      <path d='M3 21l18 0' />
      <path d='M9 8l1 0' />
      <path d='M9 12l1 0' />
      <path d='M9 16l1 0' />
      <path d='M14 8l1 0' />
      <path d='M14 12l1 0' />
      <path d='M14 16l1 0' />
      <path d='M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16' />
    </svg>
  );
};
