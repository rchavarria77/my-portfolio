// Dependencies
import { twMerge } from 'tailwind-merge';

export const SectionContainer = ({
  className,
  id,
  children,
}: {
  className?: string;
  id: string;
  children: any;
}) => {
  return (
    <section
      id={id}
      data-section={id}
      className={twMerge(
        'w-full mx-auto max-w-sm px-4 lg:px-0 xs:max-w-xl sm:max-w-2xl md:max-w-4xl xl:max-w-6xl backdrop-blur-sm',
        className
      )}
    >
      {children}
    </section>
  );
};
