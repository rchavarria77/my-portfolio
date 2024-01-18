// Components
import {
  AboutMe,
  ContactMe,
  Experience,
  Introduction,
  Projects,
  Skills,
} from '@/components';

export const Body = () => {
  return (
    <main className='flex flex-col justify-center w-full'>
      <Introduction />
      <Projects />
      <Experience />
      <Skills />
      <AboutMe />
      <ContactMe />
    </main>
  );
};
