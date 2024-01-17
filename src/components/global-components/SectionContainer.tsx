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
      className={twMerge('section w-full mx-auto pb-48', className)}
    >
      {children}
    </section>
  );
};
