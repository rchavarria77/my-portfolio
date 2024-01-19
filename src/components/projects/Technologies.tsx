// Interfaces
import { ITag } from '@/interfaces';

export const Technologies = ({ tags }: { tags: ITag[] }) => {
  return (
    <ul className='flex flex-row mb-2 gap-x-2'>
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
