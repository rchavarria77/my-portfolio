// Dependencies
import { useTranslation } from 'react-i18next';

export const Description = () => {
  //#region constants
  const { t } = useTranslation();
  //#endregion

  return (
    <>
      <h1 className='text-5xl lg:text-8xl lg:leading-[5rem] text-pretty font-bold max-w-56 lg:max-w-[28rem] leading-none water-text-background dark:grayscale-[40%] grayscale-[90%]'>
        Roberto Chavarria
      </h1>
      <h2 className='max-w-lg text-lg font-medium lg:text-2xl text-balance '>
        <span>{t('description.experience')}</span>{' '}
        <span className='text-red-600/70 dark:text-yellow-200'>
          {t('description.role')}
        </span>{' '}
        <span className='text-yellow-600/70 dark:text-red-200'>
          {t('description.location')}
        </span>
      </h2>
    </>
  );
};
