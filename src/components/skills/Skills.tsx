// Dependencies
import { useTranslation } from 'react-i18next';

// Components
import { Card, SectionContainer, Tags } from '@/components/global-components';
import { IconsContainer } from '@/components';

// Icons
import { ToolsIcon } from '@/components/icons/ToolsIcon';

// Interfaces
import { ITag } from '@/interfaces';

// Constants
const skillSet: ITag[] = [
  Tags.REACT,
  Tags.NEXT,
  Tags.NODE,
  Tags.EXPRESS,
  Tags.JAVASCRIPT,
  Tags.TYPESCRIPT,
  Tags.GRAPHQL,
  Tags.TAILWIND,
  Tags.MATERIAL,
  Tags.HTML,
  Tags.CSS,
  Tags.JEST,
  Tags.AWS,
  Tags.POSTGRE,
];

export const Skills = () => {
  //#region constants
  const { t } = useTranslation();
  //#endregion

  return (
    <SectionContainer
      id='skills'
      className='flex flex-col items-center justify-center w-full px-6 mt-16 mb-8 sm:px-12 lg:px-0 scroll-m-24'
    >
      <h2
        className='flex items-center mb-6 text-2xl font-semibold md:text-3xl gap-x-3 text-shark-950/80 dark:text-shark-100/80'
        aria-label={`${t('skills.title')} heading`}
      >
        <ToolsIcon className='size-7' />
        <span className='c-underline-animation before:bg-shark-950 dark:before:bg-shark-100'>
          {t('skills.title')}
        </span>
      </h2>
      <div className='flex flex-wrap w-full'>
        <Card className='flex-col w-full max-w-full min-h-full text-start'>
          <h3 className='mb-6 text-base font-normal text-center md:text-lg text-pretty'>
            {t('skills.subTitle')}
          </h3>
          <IconsContainer icons={skillSet} />
        </Card>
      </div>
    </SectionContainer>
  );
};
