// Components
import { TimelineItem } from '@/components/global-components';

// Interfaces
import { IExperience } from '@/interfaces';

export const Timeline = ({ experiences }: { experiences: IExperience[] }) => {
  return (
    <ol className='relative border-s border-light-950 dark:border-dark-100'>
      {experiences.map((experience) => (
        <TimelineItem key={experience.id} {...experience} />
      ))}
    </ol>
  );
};
