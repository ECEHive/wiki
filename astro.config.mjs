// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
	site: 'https://amwnag.github.io/hive-wiki/',
	base: '/hive-wiki',
	integrations: [
		starlight({
			title: 'The HIVE Wiki',
			editLink: {
				baseUrl: 'https://github.com/amwnag/hive-wiki/edit/main/',
			},
			customCss: [
				'./src/styles/override.css',
			],
			social: {
				github: 'https://github.com/amwnag/hive-wiki',
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
						'explore/pcb-fabrication',
						'explore/machine-shop',
						'explore/crafts',
					],
				},
				{
					label: 'Policies',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Rules and Policies', slug: 'policies/policies-main' },
					],
				},
				{
					label: 'Workshop Docs',
					autogenerate: { directory: 'workshop' },
				},
			],
		}),
	],
	markdown: {
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					content: { type: 'text', value: ' 🔗' }
				},
			],
		],
	},
});
