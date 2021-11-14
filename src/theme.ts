import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
declare module '@mui/material/styles' {
  interface PaletteColor {
    50?: string
    100?: string
    200?: string
    300?: string
    400?: string
    500?: string
    600?: string
    700?: string
    800?: string
    900?: string
  }
}

const theme = createTheme({
  palette: {
    primary: {
      50: '#e0f2fe',
      100: '#b3dffc',
      200: '#80cafb',
      300: '#4db5f9',
      400: '#26a5f7',
      500: '#0095f6',
      600: '#008df5',
      700: '#0082f3',
      800: '#0078f2',
      900: '#0067ef',
      A100: '#ffffff',
      A200: '#e3edff',
      A400: '#b0cdff',
      A700: '#96bdff',
    },
    secondary: {
      50: '#f1f1f1',
      100: '#dcdcdc',
      200: '#c5c5c5',
      300: '#aeaeae',
      400: '#9c9c9c',
      500: '#8b8b8b',
      600: '#838383',
      700: '#787878',
      800: '#6e6e6e',
      900: '#5b5b5b',
      A100: '#fad1d1',
      A200: '#f5a3a3',
      A400: '#ff6666',
      A700: '#ff4d4d',
      main: '#8b8b8b',
    },
    error: {
      main: red.A400,
    },
    common: {
      black: '#202020'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize'
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          fontWeight: 700
        }
      }
    }
  },
});

export default theme;