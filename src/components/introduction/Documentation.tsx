// Components
import { SocialPill } from '@/components/global-components';

// Icons
import { DownloadIcon, MessageIcon } from '@/components/icons';

export const Documentation = () => {
  return (
    <div className='flex flex-col items-start order-3 gap-4 pt-8 md:pt-0'>
      <SocialPill href='' customClass='hover:scale-110 gap-1 min-w-max'>
        <p className='text-sm text-shark-300'>Download CV</p>
        <DownloadIcon className='size-4 md:size-4 text-shark-300' />
      </SocialPill>
      <SocialPill
        href='#contact-me'
        target='_self'
        customClass='flex flex-row justify-around w-full border border-gray-300 rounded-full hover:scale-110'
      >
        <MessageIcon className='size-4 md:size-4 text-shark-300' />
        <p className='text-sm text-shark-300'>Let's Talk</p>
      </SocialPill>
    </div>
  );
};
