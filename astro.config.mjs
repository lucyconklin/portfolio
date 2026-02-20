import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lucyconklin.com',
  build: {
    format: 'directory'
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
