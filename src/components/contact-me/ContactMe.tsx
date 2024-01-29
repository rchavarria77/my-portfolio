// Dependencies
import { useTranslation } from 'react-i18next';

// Components
import { Form } from '@/components';
import { SectionContainer } from '@/components/global-components';

// Icons
import { AddressBookIcon } from '@/components/icons';

export const ContactMe = () => {
  //#region constants
  const { t } = useTranslation();
  //#endregion

  return (
    <SectionContainer
      id='contact'
      className='flex flex-col items-center justify-center w-full px-6 mt-16 mb-8 sm:px-12 lg:px-0 scroll-m-24'
    >
      <h2
        className='flex items-center mb-6 text-2xl font-semibold md:text-3xl gap-x-3 text-ebony-950/80 dark:text-ebony-100/80'
        aria-label={`${t('contact.title')} heading`}
      >
        <AddressBookIcon className='size-7' />
        <span className='c-underline-animation before:bg-ebony-950 dark:before:bg-ebony-100'>
          {t('contact.title')}
        </span>
      </h2>
      <div className='flex flex-col w-full mt-6 md:flex-row'>
        <div className='flex flex-col items-center justify-center gap-3 px-2 text-center md:items-start md:w-1/2 text-pretty md:text-start'>
          <h3 className='text-xl md:text-5xl'>{t('contact.subTitle')}</h3>
          <p className='text-sm md:text-md'>{t('contact.text')}</p>
        </div>
        <div className='flex px-2 md:w-1/2'>
          <Form />
        </div>
      </div>
    </SectionContainer>
  );
};
