// Components
import { Badge, SectionContainer } from '@/components/global-components';
import { Description, Documentation, SocialLinks } from '@/components';

export const Introduction = () => {
  return (
    <SectionContainer id='introduction'>
      <div className='flex flex-col items-center justify-between gap-4 py-8 lg:py-0 lg:my-12 lg:flex-row'>
        <div className='flex flex-col order-1 gap-5'>
          <Badge>Open to work!</Badge>
          <Description />
          <SocialLinks />
        </div>
        <img
          src='/assets/avatar_laptop.webp'
          alt='roberto avatar photo'
          loading='lazy'
          className='order-2 w-full max-w-48 lg:max-w-xs animate-fade-up animate-duration-[2000ms] animate-once'
        />
        <Documentation />
      </div>
    </SectionContainer>
  );
};
