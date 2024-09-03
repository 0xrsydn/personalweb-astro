/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)',
                base: '5px'
    		},
    		colors: {
                main: '#FD9745',
                mainAccent: '#fc7303',
                overlay: 'rgba(0,0,0,0.8)',
                bg: '#fff4e0',
                text: '#000',
                border: '#000',
                darkBg: '#1D1F27',
                darkText: '#eeefe9',
                darkBorder: '#000',
                secondaryBlack: '#1b1b1b',
            },
            boxShadow: {
                light: '4px 4px 0px 0px #000',
                dark: '4px 4px 0px 0px #000',
            },
            translate: {
                boxShadowX: '4px',
                boxShadowY: '4px',
                reverseBoxShadowX: '-4px',
                reverseBoxShadowY: '-4px',
            },
            fontWeight: {
                base: '500',
                heading: '700',
            },
    	}
    },
	plugins: [require("tailwindcss-animate")],
}
