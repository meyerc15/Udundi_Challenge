//const { colors } = require('tailwindcss/defaultTheme') // import default colours
module.exports = {
  mode: 'jit',
  purge: {
    future: {
      purgeLayersByDefault: true,
      removeDeprecatedGapUtilities: true,
    },
    content: [
      "./src/**/*.html",
      "./src/**/*.vue",
      "./src/**/*.jsx",
      // etc.
    ],
    mode: "all",
    //layers: ["utilities"],
  },
  plugins: [
    /**
    require("@tailwindcss/forms"), // use forms
    require("@tailwindcss/typography"), // use typography
     */
  ],
  safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[browse-in]'],
  // This is to disable the opacity that genereates a lot of extra css classes
  corePlugins: {
    divideOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    placeholderOpacity: false,
    textOpacity: false,
  },
  theme: {
    /* This will overwrite all "colors" configuration to only 
            render default green and white
        colors: {
            'green': colors.white
            'white' : colors.white,
        },
        */
    extend: {
      animation: {
        pingSize: 'pingSize 0.3s cubic-bezier(1, 1, 1, 1) 1',
      },
      keyframes:{
        pingSize: {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.09)', opacity: '0.75'},
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
    
      },
      spacing: { 
      },

    },
  },
};
