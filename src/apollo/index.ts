import { ApolloClient, createHttpLink, from, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_URL_API,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('accessToken');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const errorHandler = onError(({ networkError }) => {
  // if (networkError?.message?.includes('400'))
  //   window.location.href = `${window.location.origin}/accounts/login`
})

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: from([errorHandler, authLink.concat(httpLink)]),
});

export default client