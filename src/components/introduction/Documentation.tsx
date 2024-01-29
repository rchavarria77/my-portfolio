// Dependencies
import { useTranslation } from 'react-i18next';

// Components
import { LinkButton, SocialPill } from '@/components/global-components';

// Icons
import { DownloadIcon, MessageIcon } from '@/components/icons';

export const Documentation = () => {
  //#region constants
  const { t } = useTranslation();
  //#endregion

  return (
    <div className='flex flex-col items-center order-3 gap-4 pt-8 lg:items-start md:pt-0'>
      <LinkButton
        href='/assets/cv.pdf'
        download
        className='gap-1 bg-transparent border-none dark:bg-transparent text-light-800 dark:text-dark-300 hover:scale-110 min-w-max animate-pulse animate-infinite hover:animate-none'
      >
        <DownloadIcon className='size-4' />
        <p className='flex items-center text-sm'>
          <span className='hidden lg:flex'>
            {t('documentation.download')} &nbsp;
          </span>
          <span>CV</span>
        </p>
      </LinkButton>
      <SocialPill
        href='#contact'
        target='_self'
        className='flex flex-row justify-around w-full gap-2 border rounded-full border-light-950 dark:border-dark-300 lg:gap-0 hover:scale-110'
        ariaLabel={`Let's Talk`}
      >
        <MessageIcon className='size-4 text-light-800 dark:text-dark-300' />
        <p className='text-sm text-light-800 dark:text-dark-300'>
          {t('documentation.talk')}
        </p>
      </SocialPill>
    </div>
  );
};
