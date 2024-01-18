// Dependencies
import { SVGProps } from 'react';
import { JSX } from 'react/jsx-runtime';

export const MessageIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      {...props}
      width='256'
      height='250'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 20 18'
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z'
      />
    </svg>
  );
};
