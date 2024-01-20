// Dependencies
import { twMerge } from 'tailwind-merge';

export const Button = ({
  className,
  handleClick,
  children,
}: {
  className?: string;
  handleClick?: any;
  children: any;
}) => {
  return (
    <button
      onClick={handleClick}
      className={twMerge(
        'w-fit inline-flex items-center justify-center px-2 py-1 text-xs transition border border-[rgb(209,213,219)] rounded-full bg-[rgb(255,255,255)]/5 border-[rgb(255,255,255)]/10 gap-x-2 md:py-2 md:px-4 md:text-base hover:scale-110 hover:border-[rgb(255,255,255)]/10',
        className
      )}
    >
      {children}
    </button>
  );
};
