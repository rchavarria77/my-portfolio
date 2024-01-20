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
        className='flex flex-col items-center justify-center w-full px-4 my-24 lg:px-0 '
      >
        <h2 className='flex items-center mb-6 text-3xl font-semibold gap-x-3 text-[rgb(255,255,255)]/80'>
          <CodeIcon className='size-7' />
          Projects
        </h2>
        <div className='flex flex-col gap-4 md:flex-row'>
          {PROJECTS.map(
            ({ id, title, description, url, image, tags, type }: IProject) => (
              <article key={id} className='flex'>
                <Card className='justify-between'>
                  <div className='flex flex-row items-center justify-between'>
                    <h3 className='text-2xl font-semibold text-[rgb(254,240,138)] mb-2'>
                      {title}
                    </h3>
                    <ProjectType type={type} />
                  </div>

                  <p className='mb-4 text-lg text-pretty'>{description}</p>
                  <TechnologiesStack tags={tags} />
                  <img
                    src={image}
                    alt={`Project screenshot of ${image}`}
                    loading='lazy'
                    className='rounded shadow-2xl shadow-[rgb(255,255,255)]/10 aspect-video'
                  />
                  <div className='flex items-end justify-start mt-4 gap-x-4'>
                    <LinkButton href={url} ariaLabel='Visit the website'>
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
