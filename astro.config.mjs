// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'The HIVE Wiki',
			customCss: [
				'./src/styles/override.css',
			],
			social: {
				github: 'https://github.com/amwnag/hive-wiki',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Policies',
					autogenerate: { directory: 'policies' },
				},
			],
		}),
	],
});
