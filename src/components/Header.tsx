// Icons
import { MenuIcon } from '@/components/icons';

// Interfaces
import { IMenuOption } from '@/interfaces';

export const Header = ({ options = [] }: { options: IMenuOption[] }) => {
  return (
    <header className='sticky top-0 z-10 w-full overflow-x-hidden h-[5rem] flex justify-center bg-opacity-70 left-0 backdrop-blur-lg subpixel-antialiased'>
      <nav className='flex flex-wrap items-center justify-between w-full max-w-sm p-4 lg:px-0 xs:max-w-xl sm:max-w-2xl md:max-w-4xl xl:max-w-6xl'>
        <img
          src='/logo-no-background.svg'
          className='w-16 h-8'
          alt='roberto logo photo'
        />
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center justify-center w-10 h-10 p-2 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <MenuIcon />
        </button>
        <div className='hidden w-full lg:block lg:w-auto' id='navbar-default'>
          <ul className='flex flex-col p-4 mt-4 font-medium rounded-lg md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0'>
            {options.map(({ id, name, href }) => (
              <li key={id}>
                <a
                  href={href}
                  className='block px-2 py-2 text-[rgb(255,255,255)] rounded-full hover:bg-ebony-200 hover:text-cod-gray-950'
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
