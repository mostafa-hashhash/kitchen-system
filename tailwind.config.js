module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          999: '#014325',
          950: '#003517',
          750: '#005931',
          450: '#84c559'
        },
        gray: {
          150: '#EEF1F5'
        },
        red: {
          450: '#f24e40'
        },
        yellow: {
          450: '#f5a623'
        }
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
