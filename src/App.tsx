// Components
import { Body, Footer, Header } from '@/components';

// Interfaces
import { IMenuOption } from '@/interfaces/Interfaces';

// Styles
import '@/styles/App.css';

const headerMenuOptions: IMenuOption[] = [
  { id: 1, name: 'Projects', href: '#projects' },
  { id: 2, name: 'Experience', href: '#experience' },
  { id: 3, name: 'Skills', href: '#skills' },
  { id: 4, name: 'About Me', href: '#about-me' },
  { id: 5, name: 'Contact Me', href: '#contact-me' },
];

const App = () => {
  return (
    <>
      <div className='absolute z-[-2] h-full min-h-screen w-full bg-cod-gray-950 bg-gradient-to-b from-[rgba(54,52,140,0.3)] to-[rgba(255,255,255,0)]'></div>
      <div className='flex flex-col justify-between min-h-[100dvh]'>
        <Header options={headerMenuOptions} />
        <Body />
        <Footer />
      </div>
    </>
  );
};

export default App;
