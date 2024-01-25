// Dependencies
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';

// Styles
import '@/styles/Buttons.css';

export const ThemeSwitcher = () => {
  //#region useStates
  const [isDarkMode, setTheme] = useState(true);
  const [formKey, setFormKey] = useState<number>(0);
  //#endregion

  //#region functions
  const handleClick = () => {
    if (localStorage.theme === 'light') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setTheme(true);
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.theme = 'light';
      setTheme(false);
    }

    setFormKey((prevKey) => prevKey + 1);
  };
  //#endregion

  return (
    <label
      key={formKey}
      className='text-xs md:text-md switch'
      onClick={handleClick}
    >
      <input
        type='checkbox'
        checked={isDarkMode}
        className=''
        onChange={() => {}}
      />
      <span
        className={twMerge(
          'slider',
          isDarkMode ? 'bg-ebony-950' : 'bg-cararra-500'
        )}
      />
    </label>
  );
};
