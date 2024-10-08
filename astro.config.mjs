// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
    site: 'https://ecehive.github.io/',
    base: '/wiki',
    integrations: [starlight({
        title: 'The HIVE Wiki',
        editLink: {
            baseUrl: 'https://github.com/ecehive/hive-wiki/edit/main/',
        },
        customCss: [
            './src/styles/global.css',
			'./src/styles/tailwind.css',
        ],
        logo: {
            light: './public/wiki-logo-light.svg',
            dark: './public/wiki-logo-dark.svg',
            replacesTitle: true
        },
        social: {
            github: 'https://github.com/ecehive/hive-wiki',
        },
        sidebar: [
            {
                label: 'Explore',
                items: [
                    'explore/intro',
                    'explore/electronics-benchtop',
                    'explore/3d-printing',
                    'explore/laser-cutting',
                    'explore/embedded-systems',
                    'explore/pcb',
                    'explore/machine-shop',
                    'explore/crafts',
                ],
            },
            {
                label: 'Workshop Docs',
                autogenerate: { directory: 'workshop' },
            },
            {
                label: 'Policies',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Rules and Policies', slug: 'policies/policies-main' },
                ],
            },
        ],
		}), 
		tailwind({
			applyBaseStyles: false,
		})],
    markdown: {
        rehypePlugins: [
            rehypeSlug,
            [
                rehypeAutolinkHeadings, 
                { 
                    behavior: 'append',
                    headingProperties: {
                        className: ['anchor'],
                    },
                    properties: {
                        className: ['anchor-link'],
                    }
                }
            ],
            [
                rehypeExternalLinks,
                {
                    properties: {
                        className: ['external'],
                    },
                    target: '_blank',
                },
            ],
        ],
    },
});