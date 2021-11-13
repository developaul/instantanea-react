import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import Router from './router';
import theme from './theme';

const InstantaneaApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router />
    </ThemeProvider>
  )
}

export default InstantaneaApp
