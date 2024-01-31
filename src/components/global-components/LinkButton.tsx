// Dependencies
import { twMerge } from 'tailwind-merge';

export const LinkButton = ({
  children,
  className,
  target = '_blank',
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  target?: string;
}) => {
  return (
    <a
      {...props}
      target={target}
      className={twMerge(
        'w-fit inline-flex items-center justify-center px-2 py-1 text-xs transition rounded-full gap-x-2 md:py-2 md:px-4 md:text-base hover:scale-110 bg-ebony-950/15 dark:bg-ebony-100/15',
        className
      )}
    >
      {children}
    </a>
  );
};
