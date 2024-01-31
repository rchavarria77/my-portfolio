<h1 align="center">My Portfolio</h1>

[![Portfolio React][product-screenshot]](https://rchavarria-portfolio.netlify.app/)

<a align="center" href="https://rchavarria-portfolio.netlify.app/" target="_blank">View Demo</a>

## 🧱 Built With

[![React][react]][react-url] [![Vite][vite]][vite-url] [![Tailwind][tailwindcss]][tailwind-url] [![Zod][zod]][zod-url] [![ReactHookForm][react-hook-form]][react-hook-form-url]

## ⚙️ Prerequisites

Make sure you have the following installed on your development machine:

- Node.js (version 18.16.0 or above)
- pnpm (package manager)

## 🚀 Getting Started

Follow these steps to initialize the application:

#### Project Setup

Install dependencies.

```sh
pnpm i
```

#### Compile and Hot-Reload for Development

Starts the development server.

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Compile and Minify for Production

Builds the production-ready code.

```sh
pnpm build
```

#### Analyze Code

Runs ESLint to analyze and lint the code.

```sh
pnpm lint
```

#### Start Preview Mode

Starts the Vite development server in preview mode.

```sh
pnpm preview
```

## 📂 Project Structure

The project structure follows a standard React application layout:

```python
my-portfolio/
  ├── node_modules/               # Project dependencies
  ├── public/                     # Public assets
  ├── src/                        # Application source code
  │   ├── components/             # React components
  │   │   ├── global-components/  # Components used globally
  │   │   ├── icons/              # SVG icons
  │   │   │   ├── social/         # Social media icons
  │   │   │   └── technologies/   # Technologies icons
  │   │   ├── introduction/       # Components for the introduction section
  │   │   ├── navbar/             # Components for the navigation bar
  │   │   ├── projects/           # Components for the projects section
  │   │   └── skills/             # Components for the skills section
  │   ├── styles/                 # CSS stylesheets
  │   ├── interfaces/             # TypeScript interfaces and types
  │   ├── services/               # Service modules (e.g., API calls)
  │   ├── locale/                 # Localization files
  │   ├── i18n.ts                 # i18n configuration
  │   ├── App.tsx                 # Application entry point
  │   ├── main.tsx                # Main rendering file
  │   └── vite-env.d.ts
  ├── index.html                  # HTML entry point
  ├── package.json                # Node.js package configuration
  ├── pnpm-lock.yaml              # Lock file for the pnpm package manager
  ├── postcss.config.js           # PostCSS configuration
  ├── tailwind.config.js          # Tailwind configuration
  ├── tsconfig.json               # TypeScript configuration
  ├── tsconfig.node.json          # TypeScript configuration for Node.js
  └── vite.config.ts              # Vite configuration
```

## ✍🏼 Contact

Roberto Chavarria V. - [rchavarria77@outlook.com](rchavarria77@outlook.com)
Project Link: [https://github.com/rchavarria77/my-portfolio](https://github.com/rchavarria77/my-portfolio)

## ℹ️ Acknowledgments

- [React 18](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite 5](https://vitejs.dev/) - Next Generation Frontend Tooling
- [TypeScript](https://www.typescriptlang.org/) - Why not?!
- [EsLint](https://eslint.org/) - Pluggable JavaScript linter
- [Prettier](https://prettier.io) - Opinionated Code Formatter
- [Zod](https://zod.dev/) - Used to create form schemas
- [React Hook Form](https://react-hook-form.com/) - Used for form validations
- [Husky](https://github.com/typicode/husky) - Native Git hooks
- [i18next](https://www.i18next.com/) - An internationalization-framework
- [EmailJS](https://www.emailjs.com/) - Send email directly from code

[product-screenshot]: public/portfolio_thumbnail.webp
[react]: https://img.shields.io/badge/ReactJs-0C1222?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://react.dev/
[vite]: https://img.shields.io/badge/Vite-0C1222?style=for-the-badge&logo=vite&logoColor=61DAFB
[vite-url]: https://vitejs.dev/
[tailwindcss]: https://img.shields.io/badge/Tailwind%20CSS-0C1222?style=for-the-badge&logo=Tailwind+CSS&logoColor=61DAFB
[tailwind-url]: https://tailwindcss.com/
[zod]: https://img.shields.io/badge/Zod-0C1222?style=for-the-badge&logo=zod&logoColor=61DAFB
[zod-url]: https://vitejs.dev/
[react-hook-form]: https://img.shields.io/badge/React%20Hook%20Form-0C1222?style=for-the-badge&logo=react%20hook%20form&logoColor=61DAFB
[react-hook-form-url]: https://react-hook-form.com/
