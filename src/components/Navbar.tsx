// Dependencies
import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from 'react';

// Components
import { ThemeSwitcher } from '@/components';

// Icons
import { CloseIcon, MenuIcon } from '@/components/icons';

// Interfaces
import { IMenuOption } from '@/interfaces';

export const Navbar = ({ navigation }: { navigation: IMenuOption[] }) => {
  //#region useStates
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  //#endregion

  //#region functions
  const handleScroll = () => {
    navigation.some((link) => {
      const sectionElement: HTMLElement | null = document.querySelector(
        link.href
      );
      if (!sectionElement) return false;

      const sectionTop = sectionElement.offsetTop;

      if (window.scrollY <= sectionTop) {
        setActiveLink(link.href);
        return true;
      }

      return false;
    });
  };
  //#endregion

  //#region useEffects
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //#endregion

  return (
    <nav
      className='flex flex-wrap items-center justify-between w-full max-w-sm p-4 lg:px-0 xs:max-w-xl sm:max-w-2xl md:max-w-4xl xl:max-w-6xl'
      aria-label='Global'
    >
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <a href='#' className='flex'>
          <img
            src='/assets/logo-black.svg'
            className='w-20'
            alt='roberto logo photo'
          />
        </a>
        <button
          data-collapse-toggle='mobile-menu'
          type='button'
          className='inline-flex items-center justify-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300'
          aria-controls='mobile-menu-2'
          aria-expanded='false'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className='sr-only'>Open main menu</span>
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <div
          className={twMerge(
            'w-full md:block md:w-auto',
            mobileMenuOpen
              ? 'animate-fade-down animate-duration-[1000ms]'
              : 'hidden'
          )}
          id='mobile-menu'
        >
          <ul className='flex flex-col items-center p-4 mt-4 font-medium rounded-lg md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0'>
            {navigation.map(({ id, name, href }) => (
              <li key={id}>
                <a
                  href={href}
                  className={twMerge(
                    'block px-2 py-2 rounded-full hover:bg-cararra-500 hover:text-shark-100 dark:hover:bg-ebony-200 dark:hover:text-shark-950 hover:scale-110',
                    activeLink === href
                      ? 'bg-cararra-500 text-shark-100 dark:bg-ebony-200  dark:text-shark-950'
                      : ''
                  )}
                  aria-current='page'
                  aria-label='hamburger menu'
                >
                  {name}
                </a>
              </li>
            ))}
            <li className='pt-6 mt-2 border-t md:m-0 md:pt-0 md:border-none'>
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
