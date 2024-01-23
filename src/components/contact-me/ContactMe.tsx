// Components
import { SectionContainer } from '@/components/global-components';

export const ContactMe = () => {
  return (
    <SectionContainer
      id='contact'
      className='flex flex-col items-center justify-center w-full px-6 mt-16 mb-8 sm:px-12 lg:px-0 scroll-m-24'
    >
      <h2
        className='flex items-center mb-6 text-3xl font-semibold gap-x-3 text-[rgb(255,255,255)]/80'
        aria-label='Contact Me heading'
      >
        Contact Me
      </h2>
    </SectionContainer>
  );
};
