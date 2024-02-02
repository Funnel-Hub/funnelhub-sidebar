/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	`src/components/TailwindSidebar/*.{js,ts,jsx,tsx}`
  ],
  theme: {
    extend: {
	  colors: {
	    white: {
	      200: '#F2F2F7',
	      400: '#C4C7D7'
	    },
	    gray: {
	      50: '#fafafa',
	      100: '#f4f4f5',
	      200: '#e4e4e7',
	      300: '#d4d4d8',
	      400: '#a1a1aa',
	      500: '#71717a',
	      600: '#52525b',
	      700: '#373B4D',
	      800: '#282939',
	      850: '#1B1B27',
	      900: '#14141F',
	    },
	    blue: {
	      50: '#e0edff',
	      100: '#b0caff',
	      200: '#7ea6ff',
	      300: '#4b83ff',
	      400: '#1a5fff',
	      500: '#0042da',
	      600: '#0036b4',
	      700: '#002782',
	      800: '#001751',
	      900: '#1a202c',
	    },
	    red: {
	      300: '#F02D64',  
	      400: '#DB195A',
	      500: '#BF0D51'
	    },
	    orange: {
	      50: '#fff1da',
	      100: '#ffd7ae',
	      200: '#ffbf7d',
	      300: '#ffa54c',
	      400: '#ff8b1a',
	      500: '#e67200',
	      600: '#b45800',
	      700: '#813e00',
	      800: '#4f2500',
	      900: '#200b00',
	    },
	    yellow: {
	      50: '#fff9da',
	      100: '#ffedad',
	      200: '#ffe17d',
	      300: '#ffd54b',
	      400: '#ffc91a',
	      500: '#e6b000',
	      600: '#b38800',
	      700: '#806200',
	      800: '#4e3a00',
	      900: '#1d1400',
	    }
	  }
	},
  },
  plugins: [],
}

