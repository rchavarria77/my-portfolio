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
    <main>
      <Introduction />
      <Projects />
      <Experience />
      <Skills />
      <AboutMe />
      <ContactMe />
    </main>
  );
};
