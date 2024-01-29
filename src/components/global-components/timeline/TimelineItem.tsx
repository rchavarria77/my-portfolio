// Dependencies
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import {
  Button,
  Card,
  TechnologiesStack,
} from '@/components/global-components';

// Icons
import {
  BriefcaseIcon,
  CalendarIcon,
  ChevronsRightIcon,
  ChevronsUpIcon,
  MapPinIcon,
} from '@/components/icons';

// Interfaces
import { IExperience } from '@/interfaces';

export const TimelineItem = ({
  id,
  role,
  date,
  company,
  description,
  achievements,
  tags,
}: IExperience) => {
  //#region constants
  const { t } = useTranslation();
  //#endregion

  //#region useStates
  const [readMore, setReadMore] = useState(false);
  //#endregion

  return (
    <li className='mb-10 ms-6'>
      <span className='ml-[-2.3rem] flex items-center justify-center w-6 h-6 rounded-full bg-light-400 ring-light-400 dark:bg-dark-900 -start-3 ring-8 dark:ring-dark-900'>
        <BriefcaseIcon />
      </span>
      <Card className='min-h-full'>
        <div className='flex flex-col justify-between sm:flex-row'>
          <h3 className='flex items-center mb-1 text-lg font-semibold md:text-2xl text-light-900 dark:text-dark-200'>
            {t(`experience.role${id}.${role}`)}
          </h3>
          <time className='flex items-center justify-start gap-1 mb-2 text-xs font-normal leading-none md:text-sm dark:text-dark-300 text-light-800 sm:items-center sm:flex-row'>
            <CalendarIcon className='size-6 md:size-4' />{' '}
            {t(`experience.role${id}.${date}`)}
          </time>
        </div>
        <span className='flex items-center gap-1 mb-2 text-sm font-normal leading-none dark:text-dark-300 text-light-800'>
          <MapPinIcon className='size-4' />{' '}
          {t(`experience.role${id}.${company}`)}
        </span>
        <span className='flex flex-col mb-4 text-base font-normal md:text-lg text-pretty'>
          {t(`experience.role${id}.${description}`)}
          <span className='pl-4 mt-2 text-md'>
            <ul
              className={twMerge(
                'space-y-1 list-disc list-inside ',
                readMore
                  ? 'animate-fade-down animate-duration-[1000ms]'
                  : 'hidden'
              )}
            >
              {achievements.map(({ id: achievementId, text }) => (
                <li key={achievementId}>
                  {t(`experience.role${id}.achievements.${text}`)}
                </li>
              ))}
            </ul>
          </span>
        </span>
        <Button
          className='text-xs md:text-sm'
          handleClick={() => setReadMore(!readMore)}
        >
          {t(`experience.buttonText.main`)}{' '}
          {readMore
            ? t(`experience.buttonText.less`)
            : t(`experience.buttonText.more`)}{' '}
          {readMore ? <ChevronsUpIcon /> : <ChevronsRightIcon />}
        </Button>
        <TechnologiesStack tags={tags} className='mt-4' />
      </Card>
    </li>
  );
};
