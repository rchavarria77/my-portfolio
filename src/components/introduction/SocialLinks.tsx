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
      >
        <LinkedInIcon className='size-5 md:size-6' />
      </SocialPill>
      <SocialPill
        href='https://github.com/rchavarria77'
        className='hover:scale-110'
      >
        <GitHubIcon className='size-5 md:size-6' />
      </SocialPill>
      <SocialPill
        href='mailto:rchavarria77@outlook.com'
        className='hover:scale-110'
      >
        <MailForwardIcon className='size-5 md:size-6' />
      </SocialPill>
    </div>
  );
};
