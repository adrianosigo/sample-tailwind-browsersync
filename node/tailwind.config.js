/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      fontFamily: {
        'arial-custom': 'Arial',
      },
      spacing: {
        '14': '3.5rem',
        '106px': '106px',
        '125px': '125px',
        '400px': '400px',
        '500px': '500px',
        '1024px': '1024px'
      },
      colors: {
        'spotify-green': '#1DB954',
        'spotify-black': '#191414',
        'spotify-hover': '#18D760',
        'spotify-purple': '#2D46B9',
        'facebook-green': '#42b72a',
        'facebook-blue': '#1877f2',
      },
      backgroundImage: theme => ({
        'cidade-custom': "url('/img/bg_ny_pic.jpeg')",
        'spotify-theme': "url('/img/bursts.svg')",
        'spotify-theme-mobile': "url('/img/bursts-mobile.svg')",
        'facebook-logo': "url('/img/facebook-logo.svg')"
      }),
      backgroundSize: {
        '175%': '175%',
        '195%': '195%'
      },
      backgroundPosition: {
        'spotify-banner': '46% 4%',
        'spotify-banner-mobile': 'top 25% center'
      },
      fontSize: {
        'spotify-9xl': '9rem'
      }
    },
  },
  plugins: [],
}