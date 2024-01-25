// Dependencies
import { twMerge } from 'tailwind-merge';

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: any;
}) => {
  return (
    <div
      className={twMerge(
        'flex flex-col bg-cararra-950/25 dark:bg-shark-900/25 w-full max-w-4xl min-h-[460px] rounded-3xl p-6 shadow-2xl',
        className
      )}
    >
      {children}
    </div>
  );
};
