// Dependencies
import { JSX } from 'react/jsx-runtime';
import { SVGProps } from 'react';

export const ChevronsRightIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-chevrons-right'
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
      <path d='M7 7l5 5l-5 5' />
      <path d='M13 7l5 5l-5 5' />
    </svg>
  );
};
