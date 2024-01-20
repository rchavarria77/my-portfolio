// Dependencies
import { twMerge } from 'tailwind-merge';

// Interfaces
import { ITag } from '@/interfaces';

export const TechnologiesStack = ({
  tags,
  className,
}: {
  tags: ITag[];
  className?: string;
}) => {
  return (
    <ul className={twMerge('w-full flex flex-wrap mb-2 gap-2', className)}>
      {tags.map((tag) => (
        <li key={tag.name}>
          <span
            className={`flex gap-x-2 rounded-full text-xs ${tag.className} py-1 px-2`}
          >
            <tag.icon className='size-4' />
            {tag.name}
          </span>
        </li>
      ))}
    </ul>
  );
};
