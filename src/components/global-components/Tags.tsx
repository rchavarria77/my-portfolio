// Icons
import {
  AWSIcon,
  AngularIcon,
  BootstrapIcon,
  CSSIcon,
  ExpressIcon,
  GraphQLIcon,
  HtmlIcon,
  JavaScriptIcon,
  JestIcon,
  MaterialIcon,
  MongoIcon,
  MySqlIcon,
  NextIcon,
  NodeIcon,
  PhpIcon,
  PostgreIcon,
  ReactIcon,
  SQLIcon,
  TailwindIcon,
  TypeScriptIcon,
  ViteIcon,
} from '@/components/icons';

// Interfaces
import { ITag } from '@/interfaces';

export const Tags: { [key: string]: ITag } = {
  JEST: {
    name: 'Jest',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: JestIcon,
  },
  REACT: {
    name: 'React.js',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: ReactIcon,
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: TailwindIcon,
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: JavaScriptIcon,
  },
  NEXT: {
    name: 'Next.js',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: NextIcon,
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: TypeScriptIcon,
  },
  NODE: {
    name: 'Node.js',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: NodeIcon,
  },
  GRAPHQL: {
    name: 'GraphQL',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: GraphQLIcon,
  },
  PHP: {
    name: 'Php',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: PhpIcon,
  },
  BOOTSTRAP: {
    name: 'Bootstrap',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: BootstrapIcon,
  },
  HTML: {
    name: 'Html',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: HtmlIcon,
  },
  CSS: {
    name: 'CSS',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: CSSIcon,
  },
  SQL: {
    name: 'SQL Server',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: SQLIcon,
  },
  EXPRESS: {
    name: 'Express.js',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: ExpressIcon,
  },
  MATERIAL: {
    name: 'Material UI',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: MaterialIcon,
  },
  ANGULAR: {
    name: 'Angular',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: AngularIcon,
  },
  MYSQL: {
    name: 'MySQL',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: MySqlIcon,
  },
  MONGO: {
    name: 'MongoDB',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: MongoIcon,
  },
  POSTGRE: {
    name: 'PostgreSQL',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: PostgreIcon,
  },
  VITE: {
    name: 'Vite.js',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: ViteIcon,
  },
  AWS: {
    name: 'AWS',
    className: 'dark:bg-dark-900/60 bg-light-700/30',
    icon: AWSIcon,
  },
};
