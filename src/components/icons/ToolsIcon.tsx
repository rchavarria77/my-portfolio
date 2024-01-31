// Dependencies
import { JSX } from 'react/jsx-runtime';
import { SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const ToolsIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      className={twMerge('icon icon-tabler icon-tabler-tools', props.className)}
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
      <path d='M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4' />
      <path d='M14.5 5.5l4 4' />
      <path d='M12 8l-5 -5l-4 4l5 5' />
      <path d='M7 8l-1.5 1.5' />
      <path d='M16 12l5 5l-4 4l-5 -5' />
      <path d='M16 17l-1.5 1.5' />
    </svg>
  );
};
