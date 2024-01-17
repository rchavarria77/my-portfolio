// Components
import { SocialPill } from '@/components/global-components';

// Icons
import { GitHubIcon, LinkedInIcon } from '@/components/icons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full py-4 bg-woodsmoke-950 backdrop-blur-lg'>
      <div className='w-full mx-auto flex flex-col sm:flex-row items-center sm:justify-between px-12 md:px-32 lg:px-[140px]'>
        <span className='py-2 text-sm text-center text-yellow-800/90 dark:text-yellow-200/90'>
          Copyright © Roberto Chavarria | {currentYear}
        </span>
        <div className='flex items-center'>
          <SocialPill href='https://www.linkedin.com/in/rchavarria7/'>
            <LinkedInIcon className='size-5 md:size-6' />
          </SocialPill>
          <SocialPill href='https://github.com/rchavarria77'>
            <GitHubIcon className='size-5 md:size-6' />
          </SocialPill>
        </div>
      </div>
    </footer>
  );
};
