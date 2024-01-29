// Dependencies
import { Tooltip } from 'react-tooltip';
import { useTranslation } from 'react-i18next';

// Components
import { SocialPill } from '@/components/global-components';

// Icons
import {
  ExternalLinkIcon,
  GitHubIcon,
  LinkedInIcon,
  ReactIcon,
  TailwindIcon,
  ViteIcon,
} from '@/components/icons';

export const Footer = () => {
  //#region constants
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  //#endregion

  return (
    <>
      <footer className='flex flex-col items-center justify-center w-full px-6 py-8 bg-black/20 sm:px-12 lg:px-0 scroll-m-24'>
        <div className='flex flex-col items-center w-full max-w-sm gap-4 px-4 mx-auto text-sm font-medium sm:items-start lg:px-0 xs:max-w-xl sm:max-w-2xl md:max-w-4xl xl:max-w-6xl sm:flex-row lg:pt-2 sm:justify-between text-ebony-950 dark:text-ebony-50'>
          <p className='flex flex-col order-1 py-2 text-center sm:text-left'>
            Copyright © Roberto Chavarria | {currentYear}
            <span>{t('footer.text1')}</span>
          </p>
          <div className='flex flex-col order-3 sm:order-2'>
            <p className='flex flex-col py-2 text-center '>
              <span>
                {t('footer.text2')}{' '}
                <a
                  href='https://www.twitch.tv/midudev'
                  target='_blank'
                  className='text-[#6441A4]/80 hover:cursor-pointer'
                  aria-label='Twitch @midudev'
                  rel='noreferrer'
                >
                  @midudev
                </a>{' '}
                {t('footer.text3')}.
              </span>
              {t('footer.text4')}:
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
            <a
              href='https://github.com/rchavarria77/my-portfolio'
              target='_blank'
              rel='noreferrer'
              className='flex items-center justify-center mt-2 text-gray-200 dark:text-gray-500 gap-x-1 hover:underline'
            >
              View Code
              <ExternalLinkIcon className='size-5' />
            </a>
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
