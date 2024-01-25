// Interfaces
import { ITag } from '@/interfaces';

export const IconsContainer = ({ icons }: { icons: ITag[] }) => {
  return (
    <ul className='flex flex-wrap justify-center gap-10'>
      {icons.map((item) => (
        <li
          key={item.name}
          className='flex flex-col items-center text-xs font-normal md:text-md gap-y-2'
        >
          <item.icon className='size-12' />
          {item.name}
        </li>
      ))}
    </ul>
  );
};
