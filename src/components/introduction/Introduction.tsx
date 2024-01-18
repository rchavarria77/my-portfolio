// Components
import { Badge, SectionContainer } from '@/components/global-components';
import { Description, Documentation, SocialLinks } from '@/components';

export const Introduction = () => {
  return (
    <SectionContainer id='introduction'>
      <div className='py-8 lg:py-0 lg:my-24 flex flex-col items-center justify-between lg:flex-row gap-4 px-12 md:px-32 lg:px-[140px]'>
        <div className='flex flex-col order-1 gap-5'>
          <Badge>Open to work!</Badge>
          <Description />
          <SocialLinks />
        </div>
        <img
          src='/assets/avatar_laptop.webp'
          alt='roberto avatar photo'
          className='order-2 w-full max-w-48 lg:max-w-sm'
        />
        <Documentation />
      </div>
    </SectionContainer>
  );
};