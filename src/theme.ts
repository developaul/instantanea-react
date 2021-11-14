import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      50: '#fde9eb',
      100: '#fac8cc',
      200: '#f6a3ab',
      300: '#f27e89',
      400: '#f0636f',
      500: '#ed4756',
      600: '#eb404f',
      700: '#e83745',
      800: '#e52f3c',
      900: '#e0202b',
      A100: '#ffffff',
      A200: '#ffe5e6',
      A400: '#ffb2b5',
      A700: '#ff989d',
      main: '#ed4756',
    },
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