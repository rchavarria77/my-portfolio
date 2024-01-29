// Dependencies
import { useTranslation } from 'react-i18next';

// Components
import {
  SectionContainer,
  Tags,
  Timeline,
} from '@/components/global-components';

// Icons
import { BriefcaseIcon } from '@/components/icons';

// Interfaces
import { IExperience } from '@/interfaces';

// Constants
const workExperience: IExperience[] = [
  {
    id: 1,
    role: 'title',
    date: 'date',
    company: 'company',
    description: 'description',
    achievements: [
      {
        id: 1,
        text: 'achievement1',
      },
      {
        id: 2,
        text: 'achievement2',
      },
      {
        id: 3,
        text: 'achievement3',
      },
      {
        id: 4,
        text: 'achievement4',
      },
      {
        id: 5,
        text: 'achievement5',
      },
    ],
    tags: [
      Tags.NEXT,
      Tags.REACT,
      Tags.TAILWIND,
      Tags.JEST,
      Tags.JAVASCRIPT,
      Tags.TYPESCRIPT,
      Tags.NODE,
      Tags.GRAPHQL,
    ],
  },
  {
    id: 2,
    role: 'title',
    date: 'date',
    company: 'company',
    description: 'description',
    achievements: [
      {
        id: 1,
        text: 'achievement1',
      },
      {
        id: 2,
        text: 'achievement2',
      },
    ],
    tags: [
      Tags.PHP,
      Tags.BOOTSTRAP,
      Tags.JAVASCRIPT,
      Tags.HTML,
      Tags.CSS,
      Tags.SQL,
    ],
  },
];

export const Experience = () => {
  //#region constants
  const { t } = useTranslation();
  //#endregion

  return (
    <SectionContainer
      id='experience'
      className='flex flex-col items-center justify-center w-full px-6 mt-16 mb-8 sm:px-12 lg:px-0 scroll-m-24'
    >
      <h2
        className='flex items-center mb-6 text-2xl font-semibold md:text-3xl gap-x-3 text-ebony-950/80 dark:text-ebony-100/80'
        aria-label={`${t('experience.title')} heading`}
      >
        <BriefcaseIcon className='size-7' />
        <span className='c-underline-animation before:bg-ebony-950 dark:before:bg-ebony-100'>
          {t('experience.title')}
        </span>
      </h2>
      <Timeline experiences={workExperience} />
    </SectionContainer>
  );
};
