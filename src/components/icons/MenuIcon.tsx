// Dependencies
import { SVGProps } from 'react';
import { JSX } from 'react/jsx-runtime';

export const MenuIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      {...props}
      className='w-5 h-5'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 17 14'
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M1 1h15M1 7h15M1 13h15'
      />
    </svg>
  );
};
