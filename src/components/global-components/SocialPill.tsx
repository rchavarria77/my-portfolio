// Dependencies
import { twMerge } from 'tailwind-merge';

export const SocialPill = ({
  children,
  className,
  target = '_blank',
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: any;
  className?: string;
  target?: string;
}) => {
  return (
    <a
      {...props}
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
