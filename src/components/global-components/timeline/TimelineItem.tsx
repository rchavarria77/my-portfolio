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
  achievements,
  company,
  date,
  description,
  id,
  role,
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
      <span className='ml-[-2.3rem] flex items-center justify-center w-6 h-6 rounded-full bg-ebony-400 ring-ebony-400 dark:bg-ebony-900 -start-3 ring-8 dark:ring-ebony-900'>
        <BriefcaseIcon />
      </span>
      <Card className='min-h-full'>
        <div className='flex flex-col justify-between sm:flex-row'>
          <h3 className='flex items-center mb-1 text-lg font-semibold md:text-2xl text-ebony-900 dark:text-ebony-200'>
            {t(`experience.role${id}.${role}`)}
          </h3>
          <time className='flex items-center justify-start gap-1 mb-2 text-xs font-normal leading-none md:text-sm dark:text-ebony-300 text-ebony-800 sm:items-center sm:flex-row'>
            <CalendarIcon className='size-6 md:size-4' />{' '}
            {t(`experience.role${id}.${date}`)}
          </time>
        </div>
        <span className='flex items-center gap-1 mb-2 text-sm font-normal leading-none dark:text-ebony-300 text-ebony-800'>
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
