// Dependencies
import { twMerge } from 'tailwind-merge';

export const SectionContainer = ({
  customClass,
  id,
  children,
}: {
  customClass?: string;
  id: string;
  children: any;
}) => {
  return (
    <section
      id={id}
      data-section={id}
      className={twMerge('section w-full mx-auto', customClass)}
    >
      {children}
    </section>
  );
};
