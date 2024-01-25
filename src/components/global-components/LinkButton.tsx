// Dependencies
import { twMerge } from 'tailwind-merge';

export const LinkButton = ({
  href,
  children,
  className,
  ariaLabel,
  target = '_blank',
}: {
  href: string;
  children: any;
  className?: string;
  ariaLabel?: string;
  target?: string;
}) => {
  return (
    <a
      href={href}
      target={target}
      className={twMerge(
        'w-fit inline-flex items-center justify-center px-2 py-1 text-xs transition rounded-full gap-x-2 md:py-2 md:px-4 md:text-base hover:scale-110 bg-cararra-950/15 dark:bg-shark-100/15',
        className
      )}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};
