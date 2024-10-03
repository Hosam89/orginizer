import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Use an object with a main property
    },
    secondary: {
      main: '#414756',
    },
    success: {
      main: '#00ac82',
    },
    warning: {
      main: '#eee8a9',
    },
    error: {
      main: '#c94669',
    },
    info: {
      main: '#4a827e',
    },
    // Custom colors as per your application requirements
    applied: {
      main: '#bbdefb',
    },
    interview: {
      main: '#d1c4e9',
    },
    pending: {
      main: '#fff9c4',
    },
    offer: {
      main: '#c8e6c9',
    },
    rejected: {
      main: '#ffcdd2',
    },
  },
  spacing: 8,
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

  // Custom Styles for the AppBar
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: 'none',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#8AD07F',
          },
          borderRadius: '24px',
        },
      },
    },
    // Uncomment this block if you want to customize the AppBar
    // MuiAppBar: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: 'red',
    //     },
    //   },
    // },
  },
})

export default theme
