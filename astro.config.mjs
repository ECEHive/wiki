// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  site: "https://ecehive.github.io/",
  base: "/wiki",
  integrations: [
    starlight({
      title: "The Hive Wiki",
      editLink: {
        baseUrl: "https://github.com/ecehive/wiki/edit/main/",
      },
      customCss: ["./src/styles/global.css", "./src/styles/tailwind.css"],
      favicon: "/favicon.svg",
      logo: {
        light: "./public/wiki-logo-light.svg",
        dark: "./public/wiki-logo-dark.svg",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ecehive/wiki",
        },
      ],
      sidebar: [
        {
          label: "Explore",
          items: [
            "explore/intro",
            "explore/electronics-benchtop",
            "explore/3d-printing",
            "explore/laser-cutting",
            "explore/embedded-systems",
            "explore/pcb",
            "explore/machine-shop",
            "explore/crafts",
          ],
        },
        {
          label: '3D Printing',
          autogenerate: { directory: '3d-printing' },
        },
        {
          label: "Workshop Docs",
          autogenerate: { directory: "workshop" },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          headingProperties: {
            className: ["anchor"],
          },
          properties: {
            className: ["anchor-link"],
          },
        },
      ],
      [
        rehypeExternalLinks,
        {
          properties: {
            className: ["external"],
          },
          target: "_blank",
        },
      ],
    ],
  },
});
