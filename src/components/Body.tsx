// Components
import {
  AboutMe,
  ContactMe,
  Experience,
  Introduction,
  Layout,
  Projects,
  Skills,
} from '@/components';

export const Body = () => {
  return (
    <Layout>
      <main>
        <Introduction />
        <Projects />
        <Experience />
        <Skills />
        <AboutMe />
        <ContactMe />
      </main>
    </Layout>
  );
};
