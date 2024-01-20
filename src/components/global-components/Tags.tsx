// Icons
import {
  BootstrapIcon,
  CSSIcon,
  GraphQLIcon,
  HtmlIcon,
  JavaScriptIcon,
  JestIcon,
  NextIcon,
  NodeIcon,
  PhpIcon,
  ReactIcon,
  SQLIcon,
  TailwindIcon,
  TypeScriptIcon,
} from '@/components/icons';

// Interfaces
import { ITag } from '@/interfaces';

export const Tags: { [key: string]: ITag } = {
  JEST: {
    name: 'Jest',
    className: 'bg-[#003159] text-[rgb(255,255,255)]',
    icon: JestIcon,
  },
  REACT: {
    name: 'React.js',
    className: 'bg-[#003159] text-[rgb(255,255,255)]',
    icon: ReactIcon,
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    className: 'bg-[#003159] text-[rgb(255,255,255)]',
    icon: TailwindIcon,
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    className: 'bg-[#003159] text-[rgb(255,255,255)]',
    icon: JavaScriptIcon,
  },
  NEXT: {
    name: 'Next.js',
    className: 'bg-[#003159] text-[rgb(255,255,255)]',
    icon: NextIcon,
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    className: 'bg-[#003159] text-[rgb(255,255,255)]',
    icon: TypeScriptIcon,
  },
  NODE: {
    name: 'Node.js',
    className: 'bg-[#003159] text-[rgb(255,255,255)]',
    icon: NodeIcon,
  },
  GRAPHQL: {
    name: 'GraphQL',
    className: 'bg-[#003159] text-[rgb(255,255,255)]',
    icon: GraphQLIcon,
  },
  PHP: {
    name: 'Php',
    className: 'bg-[#003159] text-[rgb(255,255,255)]',
    icon: PhpIcon,
  },
  BOOTSTRAP: {
    name: 'Bootstrap',
    className: 'bg-[#003159] text-[rgb(255,255,255)]',
    icon: BootstrapIcon,
  },
  HTML: {
    name: 'Html',
    className: 'bg-[#003159] text-[rgb(255,255,255)]',
    icon: HtmlIcon,
  },
  CSS: {
    name: 'CSS',
    className: 'bg-[#003159] text-[rgb(255,255,255)]',
    icon: CSSIcon,
  },
  SQL: {
    name: 'SQL Server',
    className: 'bg-[#003159] text-[rgb(255,255,255)]',
    icon: SQLIcon,
  },
};