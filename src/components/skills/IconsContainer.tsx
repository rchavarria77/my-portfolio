// Interfaces
import { ITag } from '@/interfaces';

export const IconsContainer = ({ icons }: { icons: ITag[] }) => {
  return (
    <ul className='flex flex-wrap justify-center gap-10'>
      {icons.map((item) => (
        <li
          key={item.name}
          className='flex flex-col items-center font-semibold gap-y-2 text-cod-gray-100'
        >
          <item.icon className='size-12' />
          {item.name}
        </li>
      ))}
    </ul>
  );
};
