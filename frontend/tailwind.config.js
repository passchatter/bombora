/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  
      screens:{
        lg:"1000px",
        xl:"1224px"
      },
      colors: {
        "dark": "#193766",
        "primary": "#2E3FAD",
        "blueLight": "#ffefae0",
        "text-color": "#697B98",
        "buttonC": "rgba(59, 130, 246, 0.1);",
        "textLight": "rgba(255, 255, 255, 0.8)",
        "customDark": '#23212f',
        "customLight": '#704a9f',
        "lightgreen": '#c0efc6'
      },


      fontFamily:{
        istok : ['Istok Web', 'sans-serif'],
        dancing : ['Dancing Script', 'cursive'],
        inria : ['Inria Sans, sans-serif'],
        inter : ['Inter, sans-serif']
      },

      backgroundImage:{
        'processbg': "url('/src/images/processbg.png')"
      }
      
    },
    
    container: {
      center:true,
      padding :"1rem",
    },
  },
  plugins: [],
}

