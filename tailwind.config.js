/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'purple-radial-conic': 'radial-gradient(rgb(128, 255, 230), rgba(128, 255, 230, 0) 40%), conic-gradient(from 90deg at 50% 50%, rgb(26, 198, 255), rgb(128, 238, 255), rgb(26, 198, 255), rgb(128, 238, 255), rgb(26, 198, 255), rgb(230, 252, 255), rgb(26, 198, 255))',
        'gold-radial-conic': "radial-gradient(rgb(255, 230, 128), rgba(255, 230, 128, 0) 40%), conic-gradient(from 90deg at 50% 50%, rgb(255, 198, 26), rgb(255, 238, 128), rgb(255, 198, 26), rgb(255, 238, 128), rgb(255, 198, 26), rgb(255, 252, 230), rgb(255, 198, 26));"
      }
    },
  },
  plugins: [],
}

