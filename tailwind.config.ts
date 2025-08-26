import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';
import flowbite from 'flowbite-react/tailwind';
import { text } from 'stream/consumers';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        red: '#EB0A1E',
        neutral: '#ECECEC',
      },
      fontSize: {
        '7xl': ['4.15rem', { lineHeight: '1' }],
        '6xl': ['4.1rem', { lineHeight: '1' }],
      },
      fontFamily: {
        sans: ['Verdana', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: '425px',
        xss: '375px',
        xxs: '320px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    flowbite.plugin(),
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1, .h1-like-text': { fontFamily: 'Verdana-bold' },
        h2: { fontFamily: 'Verdana-bold' },
        h3: { fontFamily: 'Verdana-bold' },
        '.subtitle-2': { fontFamily: 'Verdana-bold' },
        '.home-tab-title': { fontSize: '12px' },
        '.home-subtitle': { fontSize: '12px' },
        '.home-carousel-item-container': {
          transition: 'all 300ms ease-in-out',
          height: '100%',
          marginLeft: '4rem',
          marginRight: '4rem',
        },
        '.takata-hero-text': { fontFamily: 'Verdana', fontSize: '10px' },
        'p, input, textarea, [type=number], [type=email], .input-like-text': { fontSize: '12px' },
        'input, .input-like-text, div#sanity input': { height: 'auto' },
        '.news-section-title': {
          fontFamily: 'Verdana-bold',
        },
        footer: {
          h3: { fontFamily: 'Verdana-bold' },
        },
        button: {
          fontSize: '18px',
        },
        '@media (min-width: 360px)': {
          'h1, .h1-like-text': { fontSize: '24px' },
          h2: { fontSize: '20px' },
          h3: { fontSize: '20px' },
          '.subtitle-1': { fontSize: '20px' },
          '.subtitle-2': { fontSize: '20px' },
          '.home-tab-title': { fontSize: '14px' },
          '.home-subtitle': { fontSize: '14px' },
          '.takata-hero-text': { fontSize: '15px' },
          '.subtitle-2.takata-text': { fontSize: '16px' },
          'p, input, textarea, [type=number], .input-like-text': { fontSize: '16px' },
          '.news-section-title': {
            fontSize: '20px',
          },
          footer: {
            h3: { fontSize: '20px' },
            'p, a': { fontSize: '14px' },
          },
         
          
        },
        '@media (min-width: 720px)': {
          'h1, .h1-like-text': { fontSize: '40px' },
          h2: { fontSize: '24px'},
          h3: { fontSize: '15px' },
          'p, input, textarea, [type=number], [type=email], .input-like-text': { fontSize: '12px' },
          '.subtitle-1': { fontSize: '15px' },
          '.subtitle-2': { fontSize: '15px' },
          '.home-tab-title': { fontSize: '15px' },
          '.home-subtitle': { fontSize: '14px' },
          '.takata-hero-text': { fontSize: '25px' },
          footer: {
            h3: { fontSize: '20px' },
            'p, a': { fontSize: '14px' },
          },
        
          
        },
        '@media (min-width: 768px)': {
          '.home-carousel-item-container': {
            marginLeft: '10rem',
            marginRight: '10rem',
          },
        },
        '@media (min-width: 1024px)': {
          '.home-carousel-item-container': {
            marginLeft: '5rem',
            marginRight: '5rem',
          },
        },
        '@media (min-width: 1081px)': {
          'h1, .h1-like-text': { fontSize: '51px' },
          h2: { fontSize: '36px' },
          h3: { fontSize: '22px' },
          'p, input, textarea, [type=number], [type=email], .input-like-text': { fontSize: '14px' },
          '.subtitle-1': { fontSize: '22px' },
          '.subtitle-2': { fontSize: '22px' },
          '.home-tab-title': { fontSize: '21px' },
          '.home-subtitle': { fontSize: '16px' },
          '.menu-vehicle-category .subtitle-2': { fontSize: '20px' },
          '.takata-hero-text': { fontSize: '40px' },
          '.news-section-title': {
            fontSize: '22px',
          },
          nav: {
            '.nav-desktop': {
              'a, .link-like-text': { fontSize: '16px' },
            },
          },
          footer: {
            h3: { fontSize: '26px' },
            'p, a': { fontSize: '16px' },
          },
        
        },
        '@media (min-width: 1280px)': {
          '.home-carousel-item-container': {
            marginLeft: '2.5rem',
            marginRight: '2.5rem',
          },
          '.home-model-carousel-non-central-item': {
            marginTop: '2rem',
            marginBottom: '2rem',
            height: '80%',
            marginLeft: '3rem',
            marginRight: '3rem',
            zoom: '90%;',
          },
        },
        '@media (min-width: 1440px)': {
          // 'input, .input-like-text': { height: '60px' },
        },
        '@media (min-width: 1920px)': {
          'h1, .h1-like-text': { fontSize: '64px' },
          h2: { fontSize: '40px' },
          h3: { fontSize: '30px' },
          'p, input, textarea, [type=number], [type=email], .input-like-text': { fontSize: '17px' },
          '.subtitle-1': { fontSize: '30px', fontFamily: 'Verdana-bold' },
          '.subtitle-2': { fontSize: '21px' },
          '.home-tab-title': { fontSize: '21px' },
          '.home-subtitle': { fontSize: '24px' },
          '.takata-hero-text': { fontSize: '64px' },

          '.home-model-carousel-non-central-item': {
            marginTop: '2rem',
            marginBottom: '2rem',
            height: '80%',
            marginLeft: '4rem',
            marginRight: '4rem',
            zoom: '90%;',
          },
          '.news-section-title': {
            fontSize: '30px',
          },
          nav: {
            '.nav-desktop': {
              'a, .link-like-text': { fontSize: '21px' },
            },
          },
          footer: {
            h3: { fontSize: '36px' },
            'p, a': { fontSize: '24px' },
          },
          
        },
      });
    }),
  ],
};
export default config;
