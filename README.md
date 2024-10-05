# The HIVE Wiki, Renewed

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## To-Dos

### Content
- Update "Introduction" page, then afterwards update Tech Area pages
- Add images to imported pages from old wiki
- Sidebar manual ordering of pages
- Add currently hidden guides to sidebar as sub-items (similar to gitbook's setup)
- Optimize splash image for better load time
- Change tech area bullet list links to quick link tiles

### Features / Components
- Filtering out pages depending if you are an end user or a peer instructor (maybe a toggle in top toolbar)
- Button toggle light/dark theme rather than dropdown
- Backlinks to previous page
- Toggle collapsable dropdown page component
- Carousel item with captions


## Guides and Reference

Guides lead a user through a specific task they want to accomplish, often with a sequence of steps.
Writing a good guide requires thinking about what your users are trying to do.

> Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework

Reference pages are ideal for outlining how things work in terse and clear terms.
Less concerned with telling a story or addressing a specific use case, they should give a comprehensive outline of what you're documenting.

> Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework


## Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Help

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

More sites/pages that have been immense help
- [freeCodeCamp.org's "Contribute" website repo](https://github.com/freeCodeCamp/contribute)
- [Section Header Anchors in Astro](https://caseyjamesperno.com/blog/astro-header-anchors/)
- [Styling the external links on this site](https://rachsmith.com/styling-external-links/)