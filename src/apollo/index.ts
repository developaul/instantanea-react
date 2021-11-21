import { ApolloClient, InMemoryCache } from '@apollo/client'
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((request, previousContext) => {
  console.log("🚀 ~ authLink ~ request, previousContext", { request, previousContext })
  const accessToken = localStorage.getItem('accessToken')
  console.log("🚀 ~ authLink ~ accessToken", accessToken)

  return {
    headers: {
      authorization: (accessToken) ? `Bearer ${accessToken}` : ''
    }
  }
})

const client = new ApolloClient({
  uri: process.env.REACT_APP_URL_API,
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: authLink
});

export default client