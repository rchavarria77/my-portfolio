// Dependencies
import { useTranslation } from 'react-i18next';

// Icons
import { FlutterIcon, PythonIcon, ReactIcon } from '@/components/icons';

export const DescriptionContainer = () => {
  //#region constants
  const { t } = useTranslation();
  //#endregion

  return (
    <div className='flex flex-col w-full md:w-[60%] gap-y-4 text-base text-center md:text-start md:text-lg order-2 md:order-1'>
      <p>
        {t('about.text1.pt1')}{' '}
        <span className='text-yellow-200'>{t('about.text1.hgt1')}</span>
      </p>
      <p>
        {t('about.text2.pt1')}{' '}
        <span className='text-yellow-200'>{t('about.text2.hgt1')}</span>{' '}
        {t('about.text2.pt2')}{' '}
        <span className='text-yellow-200'>{t('about.text2.hgt2')}</span>{' '}
      </p>
      <p>{t('about.text3')}</p>
      <span className='mt-4'>{t('about.text4')}:</span>
      <div className='flex justify-center text-xs md:justify-start md:text-sm gap-x-4'>
        <span className='flex flex-col items-center gap-y-1'>
          <PythonIcon className='size-8' />
          Python
        </span>
        <span className='flex flex-col items-center gap-y-1'>
          <FlutterIcon className='size-8' />
          Flutter
        </span>
        <span className='flex flex-col items-center gap-y-1'>
          <ReactIcon className='size-8' />
          React Native
        </span>
      </div>
    </div>
  );
};
