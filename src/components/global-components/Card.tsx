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
        'flex flex-col bg-cod-gray-900/25 w-full max-w-4xl min-h-[460px] rounded-3xl p-6',
        className
      )}
    >
      {children}
    </div>
  );
};
