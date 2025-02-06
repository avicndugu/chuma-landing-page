/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.html",
    "./**/*.html",
    "!./node_modules/*",
  ],
  theme: {
    fontFamily: {
      'sans': [
        '"Roboto", "san-serif"',
        {
          fontVariationSettings: '"wdth" 100'
        },
      ],
      'serif': ['"Playfair Display", serif'],
    },
    extend: {
      colors: {
        'text': '#01010a',
        'background': '#fbfbfe',
        'primary': '#2f27ce',
        'secondary': '#f489cf',
        'accent': '#ef5c76',
        'primary-1': '#3129d6',
        'background-1': '#f0f0fb',
        'secondary-1': '#fae5f4',
        
  //  50: '#050415',
  //  100: '#0a082b',
  //  200: '#141056',
  //  300: '#1e1881',
  //  400: '#2821ab',
  //  500: '#3129d6',
  //  600: '#5b54de',
  //  700: '#847ee7',
  //  800: '#ada9ef',
  //  900: '#d6d4f7',
  //  950: '#eaeafb',
        // 'text': '#050315',
        // 'background': '#fbfbfe',
        // 'primary': '#2f27ce',
        // 'secondary': '#dedcff',
        // 'accent': '#433bff',
      }
    },
  },
  plugins: [],
}

