import { defineConfig } from 'astro/config';

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), sitemap()],
  output: "server",
  adapter: cloudflare()
});