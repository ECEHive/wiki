import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const projectsSchema = z.object({
  title: z.string(),
  // thumbnail: z.string(),
  // difficulty: z.string(),
  // tags: z.array(z.string()),
  // internal: z.boolean().default(false)
});

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  projects: defineCollection({
    loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/content/projects" }),
    schema: projectsSchema,
  }),
};
