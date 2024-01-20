// Dependencies
import { defineConfig } from 'vite';
import generateSitemap from 'vite-plugin-pages-sitemap';
import Pages from 'vite-plugin-pages';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    Pages({
      onRoutesGenerated: (routes) => {
        generateSitemap({
          hostname: 'http://localhost:3000/',
          readable: true,
          routes: [...routes],
        });
      },
    }),
  ],
});

export default config;
