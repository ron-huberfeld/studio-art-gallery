import { defineConfig } from 'astro/config';

const site = process.env.PUBLIC_SITE_URL ?? 'https://ron-huberfeld.github.io';
const base = process.env.PUBLIC_BASE_PATH ?? '/studio-art-gallery';

export default defineConfig({
  site,
  base,
  output: 'static'
});
