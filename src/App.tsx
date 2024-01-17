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
    <div className='flex flex-col justify-between min-h-screen'>
      <Header options={headerMenuOptions} />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
