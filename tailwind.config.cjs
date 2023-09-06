module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            500: '#1A1B23',
            600: '#17181F',
            700: '#101119',
            800: '#0B0C13',
            900: '#07070D',
          },
          secondary: {
            500: '#8C949C',
            600: '#787F88',
            700: '#4F535A',
            800: '#3C3E45',
            900: '#292A2F',
          },
          slated: {
            500: '#DEA067',
            600: '#C8885D',
            700: '#A26E4E',
            800: '#7A523E',
            900: '#4D2F27',
          },
          purple: {
            500: '#BE91EC',
            600: '#4D2C91',
            700: '#341D61',
            800: '#241241',
            900: '#140A21',
          },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  