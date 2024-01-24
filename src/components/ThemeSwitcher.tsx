// Styles
import '@/styles/Buttons.css';

export const ThemeSwitcher = () => {
  return (
    <label className='switch'>
      <input type='checkbox' />
      <span className='slider' />
    </label>
  );
};
