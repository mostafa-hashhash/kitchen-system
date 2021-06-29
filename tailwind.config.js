module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          750: '#005931'
        },
        gray: {
          150: '#EEF1F5'
        },
      }
    },
  },
  variants: {
		extend: {
			backgroundColor: ['active'],
		},
  },
  plugins: [],
}
