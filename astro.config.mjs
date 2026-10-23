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
        { label: "Home", link: "/" },
        "faq",
        {
          label: "3D Printing",
          collapsed: true,
          items: [
            "explore/3d-printing",
            { autogenerate: { directory: "3d-printing" } },
          ],
        },
        {
          label: "Benchtop",
          collapsed: true,
          items: [
            "explore/electronics-benchtop",
            "guides/benchtop-dmm",
            "guides/benchtop-funcgen",
            "guides/benchtop-oscilloscope",
          ],
        },
        {
          label: "Crafts",
          collapsed: true,
          items: ["explore/crafts"],
        },
        {
          label: "Embedded Systems",
          collapsed: true,
          items: ["explore/embedded-systems", "guides/embed-selection"],
        },
        {
          label: "Laser Cutting",
          collapsed: true,
          items: [
            "explore/laser-cutting",
            "sop/sop-laser",
            "guides/laser-fablight",
          ],
        },
        {
          label: "Machine Shop",
          collapsed: true,
          items: ["explore/machine-shop"],
        },
        {
          label: "PCB Manufacturing",
          collapsed: true,
          items: [
            "explore/pcb",
            { autogenerate: { directory: "pcb" } },
          ],
        },
        {
          label: "Projects",
          collapsed: true,
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
