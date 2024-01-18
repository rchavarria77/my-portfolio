// Components
import { SocialPill } from '@/components/global-components';

// Icons
import { GitHubIcon, LinkedInIcon } from '@/components/icons';

export const SocialLinks = () => {
  return (
    <div className='flex items-center'>
      <SocialPill
        href='https://www.linkedin.com/in/rchavarria7/'
        customClass='hover:scale-110'
      >
        <LinkedInIcon className='size-5 md:size-6' />
      </SocialPill>
      <SocialPill
        href='https://github.com/rchavarria77'
        customClass='hover:scale-110'
      >
        <GitHubIcon className='size-5 md:size-6' />
      </SocialPill>
    </div>
  );
};
