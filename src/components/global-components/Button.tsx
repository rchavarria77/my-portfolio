// Dependencies
import { twMerge } from 'tailwind-merge';

export const Button = ({
  className,
  handleClick,
  children,
  ...props
}: {
  className?: string;
  handleClick?: any;
  children: any;
}) => {
  return (
    <button
      {...props}
      onClick={handleClick}
      className={twMerge(
        'w-fit inline-flex items-center justify-center px-2 py-1 text-xs transition rounded-full gap-x-2 md:py-2 md:px-4 md:text-base hover:scale-110 bg-ebony-950/15 dark:bg-ebony-100/15',
        className
      )}
    >
      {children}
    </button>
  );
};
