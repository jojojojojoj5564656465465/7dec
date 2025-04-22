import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const business = defineCollection({
	loader: glob({ pattern: '**/*.{mdoc,md}', base: './src/content/business' }), // Ensure the pattern and base are correct
	schema: z.object({
		title: z.string(),
		description: z.string(),
		price: z.number(),
		Link: z.string().url(),
	}),
})

export const collections = {
	business,
}
