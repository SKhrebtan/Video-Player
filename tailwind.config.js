/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.js', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '450px',
      desktop: '786px',
      laptop: '1144px',
    },
    components: {
      button:
        'rounded-md bg-blue-200 border-[1px] border-blue-500 p-[10px] w-[100px] hover:border-transparent hover:bg-blue-500 hover:text-white transition-all duration-300',
    },
  },
  plugins: [],
};
