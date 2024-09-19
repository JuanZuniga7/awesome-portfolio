import { z, defineCollection } from "astro:content";

const homeCollection = defineCollection({
    type: 'content',
    schema: z.object({
    })
})

export const collections = {
    'home': homeCollection,
}