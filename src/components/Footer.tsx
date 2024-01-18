// Components
import { SocialPill } from '@/components/global-components';

// Icons
import {
  GitHubIcon,
  LinkedInIcon,
  ReactIcon,
  TailwindIcon,
  ViteIcon,
} from '@/components/icons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full py-8 bg-[rgba(0,0,0)]/20'>
      <div className='flex flex-col items-center w-full max-w-sm gap-4 px-4 mx-auto lg:px-0 xs:max-w-xl sm:max-w-2xl md:max-w-4xl xl:max-w-6xl sm:flex-row lg:pt-2 sm:justify-between'>
        <p className='order-1 py-2 text-sm text-center text-shark-300'>
          Copyright © Roberto Chavarria | {currentYear}
        </p>
        <div className='flex flex-col order-3 sm:order-2'>
          <p className='py-2 text-sm text-center text-shark-300'>Made with:</p>
          <div className='flex flex-row justify-center gap-2'>
            <ViteIcon className='cursor-pointer size-4' />
            <ReactIcon className='cursor-pointer size-4' />
            <TailwindIcon className='cursor-pointer size-4' />
          </div>
        </div>
        <div className='flex items-center order-2 sm:order-3'>
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
