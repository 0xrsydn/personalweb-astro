import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			main: '#FFDC58',
			mainAccent: '#ffc800', // not needed for shadcn components
			overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.
	  
			// light mode
			bg: '#FEF2E8',
			text: '#000',
			border: '#000',
	  
			// dark mode
			darkBg: '#1D1F27',
			darkText: '#eeefe9',
			darkBorder: '#000',
			secondaryBlack: '#1b1b1b', // opposite of plain white, not used pitch black because borders and box-shadows are that color 
		  },
		  borderRadius: {
			base: '5px'
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
		  fontFamily: {
			sans: ['Archivo Variable', ...defaultTheme.fontFamily.sans],
			header: ['Lexend Mega Variable', ...defaultTheme.fontFamily.sans],
		  },
		},
	  },
	plugins: [require("tailwindcss-animate")],
}
