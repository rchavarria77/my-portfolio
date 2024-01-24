// Dependencies
import { Tooltip } from 'react-tooltip';

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
    <>
      <footer className='w-full py-8 bg-[rgba(0,0,0)]/20 flex flex-col items-center justify-center px-6 mb-8 sm:px-12 lg:px-0 scroll-m-24'>
        <div className='flex flex-col items-center w-full max-w-sm gap-4 px-4 mx-auto lg:px-0 xs:max-w-xl sm:max-w-2xl md:max-w-4xl xl:max-w-6xl sm:flex-row lg:pt-2 sm:justify-between'>
          <p className='flex flex-col order-1 py-2 text-sm text-center sm:text-left text-shark-300'>
            Copyright © Roberto Chavarria | {currentYear}
            <span>All Rights Reserved</span>
          </p>
          <div className='flex flex-col order-3 sm:order-2'>
            <p className='flex flex-col py-2 text-sm text-center text-shark-300'>
              <span>
                Inspired by{' '}
                <a
                  href='https://www.twitch.tv/midudev'
                  target='_blank'
                  className='text-[#6441A4]/80 hover:cursor-pointer'
                  aria-label='Twitch @midudev'
                  rel='noreferrer'
                >
                  @midudev
                </a>{' '}
                design
              </span>
              Made with:
            </p>
            <div className='flex flex-row justify-center gap-2'>
              <ViteIcon
                data-tooltip-id='vite-tooltip'
                data-tooltip-content='Vite.js'
                className='cursor-pointer size-4'
              />
              <ReactIcon
                data-tooltip-id='react-tooltip'
                data-tooltip-content='React.js'
                className='cursor-pointer size-4'
              />
              <TailwindIcon
                data-tooltip-id='tailwind-tooltip'
                data-tooltip-content='Tailwind CSS'
                className='cursor-pointer size-4'
              />
            </div>
          </div>
          <div className='flex items-center order-2 sm:order-3'>
            <SocialPill
              href='https://www.linkedin.com/in/rchavarria7'
              ariaLabel='LinkedIn'
            >
              <LinkedInIcon className='size-5 md:size-6' />
            </SocialPill>
            <SocialPill
              href='https://github.com/rchavarria77'
              ariaLabel='GitHub'
            >
              <GitHubIcon className='size-5 md:size-6' />
            </SocialPill>
          </div>
        </div>
      </footer>
      <Tooltip id='vite-tooltip' />
      <Tooltip id='react-tooltip' />
      <Tooltip id='tailwind-tooltip' />
    </>
  );
};
