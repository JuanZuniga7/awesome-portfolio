import { z, defineCollection } from "astro:content";

const homeCollection = defineCollection({
    type: 'content',
    schema: z.object({
        content: z.string()
    })
})

export const collections = {
    'home': homeCollection,
}