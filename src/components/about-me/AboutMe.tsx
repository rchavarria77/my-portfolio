// Components
import { Card, SectionContainer } from '@/components/global-components';
import { DescriptionContainer, ImageContainer } from '@/components';

// Icons
import { UserCheckIcon } from '@/components/icons';

export const AboutMe = () => {
  return (
    <SectionContainer
      id='about-me'
      className='flex flex-col items-center justify-center w-full px-6 mt-16 mb-8 sm:px-12 lg:px-0 scroll-m-24'
    >
      <h2
        className='flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white/80'
        aria-label='About Me heading'
      >
        <UserCheckIcon className='size-7' />
        <span className='c-underline-animation before:bg-black dark:before:bg-white'>
          About Me
        </span>
      </h2>
      <Card className='justify-center max-w-full'>
        <div className='flex flex-col items-center md:flex-row gap-x-4 gap-y-4'>
          <DescriptionContainer />
          <ImageContainer />
        </div>
      </Card>
    </SectionContainer>
  );
};
