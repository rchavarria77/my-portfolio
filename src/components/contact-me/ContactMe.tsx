// Components
import { SectionContainer } from '@/components/global-components';

export const ContactMe = () => {
  return (
    <SectionContainer
      id='contact-me'
      className='flex flex-col items-center justify-center w-full px-4 my-24 lg:px-0'
    >
      <h2
        aria-label='Contact Me'
        className='flex items-center mb-6 text-3xl font-semibold gap-x-3 text-[rgb(255,255,255)]/80'
      >
        Contact Me
      </h2>
    </SectionContainer>
  );
};
