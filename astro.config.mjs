// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import starlight from "@astrojs/starlight";
import { unified } from '@astrojs/markdown-remark';
import tailwindcss from "@tailwindcss/vite";

import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  site: "https://wiki.hivemakerspace.com/",
  base: "/",
  fonts: [
    {
      provider: fontProviders.google(),
      cssVariable: "--font-body",
      name: "Inter",
      weights: ["100 900"],
      styles: ["normal", "italic"]
    },
    {
      provider: fontProviders.google(),
      cssVariable: "--font-heading",
      name: "Rubik",
      weights: ["300 900"],
      styles: ["normal", "italic"]
    }
  ],
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
          label: "3D Printing",
          items: [{ autogenerate: { directory: "3d-printing" } }],
        },
        {
          label: "PCB Fabrication",
          items: [{ autogenerate: { directory: "pcb" } }],
        },
        {
          label: "Workshop Docs",
          items: [{ autogenerate: { directory: "workshop" } }],
        },
      ],
      components: {
        Head: "./src/components/CustomHead.astro"
      }
    }),
  ],
  markdown: {
    processor: unified({
      rehypePlugins: [
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
    })
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
