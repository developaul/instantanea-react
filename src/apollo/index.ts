import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.REACT_APP_URL_API,
  connectToDevTools: true,
  cache: new InMemoryCache()
});

export default client