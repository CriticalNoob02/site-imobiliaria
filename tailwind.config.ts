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
            keyframes: {
                slides: {
                    'from': { transform: 'translateX(0)' },
                    'to': { transform: 'translateX(-600%)' }
                }
            },
        },
    },
    plugins: [],
};
export default config;
