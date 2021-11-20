import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@mui/material/CssBaseline';

import client from './apollo';
import Router from './router';
import theme from './theme';

const InstantaneaApp = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <CssBaseline />
          <Router />
        </SnackbarProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default InstantaneaApp
