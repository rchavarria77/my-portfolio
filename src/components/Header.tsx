// Icons
import { MenuIcon } from '@/components/icons';

// Interfaces
import { IMenuOption } from '@/interfaces/Interfaces';

export const Header = ({ options = [] }: { options: IMenuOption[] }) => {
  return (
    <header className='sticky top-0 z-10 bg-shark-950 backdrop-blur-2xl'>
      <nav className='flex flex-wrap items-center justify-between py-4 px-12 md:px-32 lg:px-[140px]'>
        <img src='/logo-no-background.svg' className='w-16 h-8' alt='' />
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <MenuIcon />
        </button>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            {options.map(({ id, name, href }) => (
              <li key={id}>
                <a
                  href={href}
                  className='block px-2 py-2 text-white rounded-full hover:bg-woodsmoke-900'
                  aria-current='page'
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
