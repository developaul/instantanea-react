import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    secondary: {
      50: '#fbfbfb',
      100: '#f4f4f4',
      200: '#ededed',
      300: '#e6e6e6',
      400: '#e0e0e0',
      500: '#dbdbdb',
      600: '#d7d7d7',
      700: '#d2d2d2',
      800: '#cdcdcd',
      900: '#c4c4c4',
      A100: '#ffffff',
      A200: '#ffffff',
      A400: '#ffffff',
      A700: '#ffffff',
      main: '#dbdbdb',
    },
    error: {
      main: red.A400,
    },
    common: {
      black: '#202020'
    }
  },
});

export default theme;