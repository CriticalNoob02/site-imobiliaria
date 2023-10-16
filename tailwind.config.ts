import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                'Slides': 'slides 25s linear infinite'
            },
            boxShadow: {
                'sticker': '0.5em 0.5em 0.5em rgba(0, 0, 0, 0.3)',
              }
        },
    },
    plugins: [],
};
export default config;
