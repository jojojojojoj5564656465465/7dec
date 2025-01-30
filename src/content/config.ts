import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders"; // Non disponible avec l'API héritée

const business = defineCollection({

	loader: glob({ pattern: "**/*.mdoc", base: "./src/content/business" }),
	schema: () =>
		z.object({
			title: z.string(),
			descriptions: z.string(),
			price: z.number(),
		}),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
	business,
};
