// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://eggsilk.github.io',
  base: '/climate-and-eggs',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});