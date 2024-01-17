export const SocialPill = ({
  children,
  href = '',
}: {
  children: any;
  href: string;
}) => {
  return (
    <a
      href={href}
      className='flex items-center justify-center px-2 py-1 text-xs transition'
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
};
