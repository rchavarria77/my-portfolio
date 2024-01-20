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
    role: 'Full Stack Developer',
    date: 'May 2019 - present',
    company: 'Freelance',
    description:
      'Contributed to the development of responsive web applications for various clients across diverse industries using cutting-edge technologies such as React, Next.js, Node.js, GraphQL, and Express.js.',
    achievements: [
      {
        id: 1,
        text: 'Created custom reusable web components, enhancing application scalability through the utilization of cutting-edge Front End Technologies.',
      },
      {
        id: 2,
        text: 'Collaborated closely with project managers to establish precise project requirements that met client objectives.',
      },
      {
        id: 3,
        text: 'Provided ongoing maintenance and support for over 4 client websites, ensuring their optimal performance.',
      },
      {
        id: 4,
        text: 'Conducted thorough testing and debugging, identifying and resolving errors and technical issues before and after implementation through both unit and manual testing.',
      },
      {
        id: 5,
        text: 'Utilized AWS services for the deployment, scaling, and monitoring of web applications and services.',
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
    role: 'Junior Application Developer',
    date: 'July 2018 - December 2018',
    company: 'Fundación Omar Dengo',
    description:
      'Contribute to the development of an educational web application using technologies such as PHP and Slim framework, Ajax, JavaScript, jQuery, HTML5, CSS, Bootstrap, and SQL Server',
    achievements: [
      {
        id: 1,
        text: 'Worked within the Scrum development methodology, achieving a 95% completion rate for sprint tasks.',
      },
      {
        id: 2,
        text: 'Collaborated closely with design teams to meet development requirements and enhance the overall user experience.',
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
  return (
    <SectionContainer
      id='experience'
      className='flex flex-col items-center justify-center w-full px-4 my-16 lg:px-0'
    >
      <h2 className='flex items-center mb-6 text-3xl font-semibold gap-x-3 text-[rgb(255,255,255)]/80'>
        <BriefcaseIcon className='size-7' />
        Experience
      </h2>
      <Timeline experiences={workExperience} />
    </SectionContainer>
  );
};
