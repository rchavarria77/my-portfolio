// Dependencies
import { useTranslation } from 'react-i18next';

// Components
import { Button, SocialPill } from '@/components/global-components';

// Icons
import { DownloadIcon, MessageIcon } from '@/components/icons';

export const Documentation = () => {
  //#region constants
  const { t } = useTranslation();
  //#endregion

  //#region functions
  const handleDownload = () => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';

    xhr.onload = () => {
      const blob = xhr.response;
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'CV_Carlos_Roberto_Chavarria_Vega_EN.pdf'; // Set a default filename if not provided
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      window.URL.revokeObjectURL(url);
    };

    xhr.open('GET', '/assets/cv.pdf');
    xhr.send();
  };
  //#endregion

  return (
    <div className='flex flex-col items-center order-3 gap-4 pt-8 lg:items-start md:pt-0'>
      <Button
        handleClick={handleDownload}
        className='gap-1 bg-transparent border-none dark:bg-transparent text-cararra-800 dark:text-shark-300 hover:scale-110 min-w-max animate-pulse animate-infinite hover:animate-none'
      >
        <DownloadIcon className='size-4' />
        <p className='flex items-center text-sm'>
          <span className='hidden lg:flex'>
            {t('documentation.download')} &nbsp;
          </span>
          <span>CV</span>
        </p>
      </Button>
      <SocialPill
        href='#contact'
        target='_self'
        className='flex flex-row justify-around w-full gap-2 border rounded-full border-cararra-950 dark:border-shark-300 lg:gap-0 hover:scale-110'
        ariaLabel={`Let's Talk`}
      >
        <MessageIcon className='size-4 text-cararra-800 dark:text-shark-300' />
        <p className='text-sm text-cararra-800 dark:text-shark-300'>
          {t('documentation.talk')}
        </p>
      </SocialPill>
    </div>
  );
};
