// Components
import { Body, Footer, Header } from '@/components';

// Interfaces
import { IMenuOption } from '@/interfaces';

// Styles
import '@/styles/App.css';

const headerMenuOptions: IMenuOption[] = [
  { id: 1, name: 'Experience', href: '#experience' },
  { id: 2, name: 'Projects', href: '#projects' },
  { id: 3, name: 'Skills', href: '#skills' },
  { id: 4, name: 'About', href: '#about-me' },
  { id: 5, name: 'Contact', href: '#contact' },
];

const App = () => {
  return (
    <>
      <div className='flex flex-col justify-between min-h-[100dvh]'>
        <Header options={headerMenuOptions} />
        <Body />
        <Footer />
      </div>
    </>
  );
};

export default App;
