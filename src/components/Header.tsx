// Components
import { Navbar } from '@/components';

// Interfaces
import { IMenuOption } from '@/interfaces';

export const Header = ({ options = [] }: { options: IMenuOption[] }) => {
  return (
    <header className='sticky top-0 left-0 z-10 flex flex-col items-center justify-center w-full overflow-x-hidden subpixel-antialiased min-h-20 lg:flex-row bg-opacity-70 backdrop-blur-lg'>
      <Navbar navigation={options} />
    </header>
  );
};
