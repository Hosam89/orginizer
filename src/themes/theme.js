import { createTheme } from "@mui/material/styles";
import { MyPalette } from "./fonts/MyPalette";

const theme = createTheme({
  palette: {
    primary: {
      0: MyPalette.palette.primary[0],
      5: MyPalette.palette.primary[5],
      10: MyPalette.palette.primary[10],
      15: MyPalette.palette.primary[15],
      20: MyPalette.palette.primary[20],
      25: MyPalette.palette.primary[25],
      30: MyPalette.palette.primary[30],
      35: MyPalette.palette.primary[35],
      40: MyPalette.palette.primary[40],
      50: MyPalette.palette.primary[50],
      60: MyPalette.palette.primary[60],
      70: MyPalette.palette.primary[70],
      80: MyPalette.palette.primary[80],
      90: MyPalette.palette.primary[90],
      95: MyPalette.palette.primary[95],
      98: MyPalette.palette.primary[98],
      99: MyPalette.palette.primary[99],
      100: MyPalette.palette.primary[100],
      main: MyPalette.palette.primary.main,
    },
    secondary: {
      main: MyPalette.palette.secondary.main,
      light: MyPalette.palette.secondary.light,
      dark: MyPalette.palette.secondary.dark,
      contrastText: MyPalette.palette.secondary.contrastText,
    },
    success: {
      main: MyPalette.palette.success.main,
      light: MyPalette.palette.success.light,
      dark: MyPalette.palette.success.dark,
      contrastText: MyPalette.palette.success.contrastText,
    },
    error: {
      main: MyPalette.palette.error.main,
    },
    background: {
      default: MyPalette.palette.background.default,
    },
    // Custom colors as per your application requirements
    applied: {
      main: "#bbdefb",
    },
    interview: {
      main: "#d1c4e9",
    },
    pending: {
      main: "#fff9c4",
    },
    offer: {
      main: "#c8e6c9",
    },
    rejected: {
      main: "#ffcdd2",
    },
  },
  spacing: 8,
  // Typography Configuration for the App
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 14,
    h1: {
      fontSize: "6rem",
    },
    h2: {
      fontSize: "3.75rem",
    },
    h3: {
      fontSize: "3rem",
    },
    h4: {
      fontSize: "2.125rem",
    },
    h5: {
      fontSize: "1.5rem",
    },
    h6: {
      fontSize: "1.25rem",
    },
  },

  // Custom Styles for the AppBar
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: ({ ownerState }) => ({
          border: "none",
          backgroundColor: MyPalette.palette.primary[95],
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: MyPalette.palette.primary[95],
          boxShadow: "none",
          height: "64px",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#8AD07F",
          },
          borderRadius: "24px",
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
});

export default theme;
