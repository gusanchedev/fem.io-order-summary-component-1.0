module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "red-hat":['"Red Hat Display"', 'sans-serif'],
      },
      colors: {
        "pale-blue": "hsl(225, 100%, 94%)",
        "bright-blue": "hsl(245, 75%, 52%)",
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "desaturated-blue": "hsl(224, 23%, 55%)",
        "dark-blue": "hsl(223, 47%, 23%)"
      },
      boxShadow: {
        "card-button": "0 10px 8px 1px #dfdaff"
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/pattern-background-desktop.svg')"
       }),
       backgroundPosition: {
         "top-100":"top -10rem left 0"
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
