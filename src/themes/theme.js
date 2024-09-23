const theme = {
  palette: {
    primary: '#1976d2',
    secondary: '#414756',
    sucess: '#00ac82',
    warning: '#eee8a9',
    error: '#c94669',
    info: '#4a827e',
  },

  // Typography Configuration for the App
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14,
    h1: {
      fontSize: '6rem',
    },
    h2: {
      fontSize: '3.75rem',
    },
    h3: {
      fontSize: '3rem',
    },
    h4: {
      fontSize: '2.125rem',
    },
    h5: {
      fontSize: '1.5rem',
    },
    h6: {
      fontSize: '1.25rem',
    },
  },

  //Custom Styles for the AppBar
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: 'none',
        },
      },
    },
    // MuiAppBar: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: 'red',
    //     },
    //   },
    // },
  },
}

export default theme
