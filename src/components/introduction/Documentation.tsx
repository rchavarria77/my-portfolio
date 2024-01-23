// Components
import { SocialPill } from '@/components/global-components';

// Icons
import { DownloadIcon, MessageIcon } from '@/components/icons';

export const Documentation = () => {
  return (
    <div className='flex flex-col items-center order-3 gap-4 pt-8 lg:items-start md:pt-0'>
      <SocialPill
        href='https://flowcv.me/roberto-chavarria/file-r4od9wkvn68h.pdf'
        className='gap-1 hover:scale-110 min-w-max animate-pulse animate-infinite hover:animate-none'
        ariaLabel='Download CV'
      >
        <DownloadIcon className='size-4 md:size-4 text-shark-300' />
        <p className='flex items-center text-sm text-shark-300'>
          <span className='hidden lg:flex'>Download &nbsp;</span>
          <span>CV</span>
        </p>
      </SocialPill>
      <SocialPill
        href='#contact'
        target='_self'
        className='flex flex-row justify-around w-full border rounded-full hover:scale-110'
        ariaLabel={`Let's Talk`}
      >
        <MessageIcon className='size-4 md:size-4 text-shark-300' />
        <p className='text-sm text-shark-300'>Let's Talk</p>
      </SocialPill>
    </div>
  );
};
