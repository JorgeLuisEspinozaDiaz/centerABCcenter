/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            textT: '#32355D',
            lead: '#606060',
            blue: '#5798FE',
            black: '#000000',
            black2: '#2F2F2F',
            yellow: '#FEAD00',
            withes: '#FFFFFF',
         },
         fontFamily: {
            outfit: ['var(--font-outfit)'],
            quicksand: ['var(--font-quicksand)'],
            roboto: ['var(--font-roboto)'],
         },
         screens: {
            phone: '414px',
            phonelg: '568px',
            tablet: '768px',
            tabletlg: '960px',
            tabletxl: '1024px',
            laptop: '1200px',
            laptoplg: '1400px',
            desktop: '1700px',
         },
      },
   },
   plugins: [],
}
