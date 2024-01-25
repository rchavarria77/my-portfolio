// Components
import {
  Card,
  LinkButton,
  SectionContainer,
  Tags,
  TechnologiesStack,
} from '@/components/global-components';
import { ProjectType } from '@/components';

// Icons
import { CodeIcon, InternetIcon } from '@/components/icons';

// Interfaces
import { IProject } from '@/interfaces';

// Constants
const PROJECTS: IProject[] = [
  {
    id: 1,
    title: 'CPI Website',
    description:
      'Official site for CPI Spanish Immersion School located in Costa Rica. This website provides a comprehensive overview of their programs, locations, and the unique experiences they offer.',
    url: 'https://www.cpi-edu.com/',
    image: '/assets/cpi.webp',
    type: 'client',
    tags: [Tags.REACT, Tags.TAILWIND, Tags.JEST],
  },
  {
    id: 2,
    title: 'Touring Regal',
    description:
      'Touring Regal is dedicated to transforming the transportation experience in Costa Rica, aligning with a distinctive mission and vision that encapsulates their commitment to excellence, safety, and sustainability.',
    url: 'https://touringregal.com/',
    image: '/assets/tr.webp',
    type: 'client',
    tags: [Tags.REACT, Tags.TAILWIND],
  },
];

export const Projects = () => {
  return (
    <>
      <SectionContainer
        id='projects'
        className='flex flex-col items-center justify-center w-full px-6 mt-16 mb-8 sm:px-12 lg:px-0 scroll-m-24'
      >
        <h2
          className='flex items-center mb-6 text-2xl font-semibold md:text-3xl gap-x-3 text-shark-950/80 dark:text-shark-100/80'
          aria-label='Projects heading'
        >
          <CodeIcon className='size-7' />
          <span className='c-underline-animation before:bg-shark-950 dark:before:bg-shark-100'>
            Projects
          </span>
        </h2>
        <div className='flex flex-col gap-4 md:flex-row'>
          {PROJECTS.map(
            ({ id, title, description, url, image, tags, type }: IProject) => (
              <article key={id} className='flex'>
                <Card className='justify-between'>
                  <div className='flex flex-row items-center justify-between'>
                    <h3 className='mb-2 text-lg font-semibold md:text-2xl text-cararra-900 dark:text-ebony-200'>
                      {title}
                    </h3>
                    <ProjectType type={type} />
                  </div>
                  <p className='text-base font-normal md:text-lg text-pretty'>
                    {description}
                  </p>
                  <TechnologiesStack tags={tags} className='mt-4' />
                  <img
                    src={image}
                    alt={`Project screenshot of ${image}`}
                    loading='lazy'
                    className='rounded shadow-2xl shadow-cararra-950/10 dark:shadow-shark-100/10 aspect-video'
                  />
                  <div className='flex items-end justify-start mt-6 gap-x-4'>
                    <LinkButton
                      href={url}
                      ariaLabel='Visit the website'
                      className='text-xs md:text-sm'
                    >
                      <InternetIcon />
                      Visit the website
                    </LinkButton>
                  </div>
                </Card>
              </article>
            )
          )}
        </div>
      </SectionContainer>
    </>
  );
};
