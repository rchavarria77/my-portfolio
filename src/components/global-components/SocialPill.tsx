// Dependencies
import { twMerge } from 'tailwind-merge';

export const SocialPill = ({
  children,
  href = '',
  className = '',
  target = '_blank',
}: {
  children: any;
  href: string;
  className?: string;
  target?: string;
}) => {
  return (
    <a
      href={href}
      className={twMerge(
        'flex items-center justify-center px-2 py-1 text-xs transition',
        className
      )}
      target={target}
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
};
