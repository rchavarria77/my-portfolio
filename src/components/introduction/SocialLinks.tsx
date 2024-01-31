// Components
import { SocialPill } from '@/components/global-components';

// Icons
import { GitHubIcon, LinkedInIcon, MailForwardIcon } from '@/components/icons';

export const SocialLinks = () => {
  return (
    <div className='flex items-center'>
      <SocialPill
        href='https://www.linkedin.com/in/rchavarria7/'
        className='hover:scale-110'
        aria-label='LinkedIn'
      >
        <LinkedInIcon className='size-5 md:size-6' fill='#0000 dark:#FFFF' />
      </SocialPill>
      <SocialPill
        href='https://github.com/rchavarria77'
        className='hover:scale-110'
        aria-label='GitHub'
      >
        <GitHubIcon className='size-5 md:size-6' />
      </SocialPill>
      <SocialPill
        href='mailto:rchavarria77@outlook.com'
        className='hover:scale-110'
        aria-label='Mail'
      >
        <MailForwardIcon className='size-5 md:size-6' />
      </SocialPill>
    </div>
  );
};
