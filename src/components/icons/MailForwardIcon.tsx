// Dependencies
import { JSX } from 'react/jsx-runtime';
import { SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const MailForwardIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      className={twMerge(
        'icon icon-tabler icon-tabler-mail-forward',
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
      <path d='M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5' />
      <path d='M3 6l9 6l9 -6' />
      <path d='M15 18h6' />
      <path d='M18 15l3 3l-3 3' />
    </svg>
  );
};
