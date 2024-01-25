// Dependencies
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
  //#region constants
  const { i18n } = useTranslation();
  //#endregion

  //#region useStates
  const [language, setLanguage] = useState('EN');
  //#endregion

  //#region functions
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  //#endregion

  return (
    <select
      id='location'
      name='location'
      className='block bg-transparent border-0 rounded-md w-fit sm:text-sm'
      onChange={handleChange}
      defaultValue={language}
    >
      <option value='en'>EN</option>
      <option value='es'>ES</option>
    </select>
  );
};
