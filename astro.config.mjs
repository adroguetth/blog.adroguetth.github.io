// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Cambia esto por tu dominio final cuando lo tengas (p. ej. https://blog.adroguett.com)
  site: "https://blog.adroguett.com",

  integrations: [mdx(), sitemap()],

  markdown: {
    // Tema de resaltado de código para los bloques ```python, ```sql, etc.
    shikiConfig: {
      theme: "github-dark-default",
      wrap: true,
    },
  },
});
