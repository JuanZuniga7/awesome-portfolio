/** @type {import('tailwindcss').Config} */
export default {
        content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
        theme: {
                extend: {
                        colors: {
                                'primary': '#1F202A',
                                'secondary': '#282A36',
                                'tertiary': '#414458',
                        }
                },
                screens: {
                        xs: "300px",
                        "3xl": "1920px"
                }
        },
        plugins: [],
}
