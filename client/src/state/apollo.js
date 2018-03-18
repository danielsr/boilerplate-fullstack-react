import { ApolloClient, HttpLink, InMemoryCache, ApolloLink } from 'apollo-client-preset'
import { RestLink } from 'apollo-link-rest'

const cache = new InMemoryCache()

const restLink = new RestLink({
  uri: 'https://jsonplaceholder.typicode.com/'
})

const client = new ApolloClient({
  cache,
  link: restLink
})


export default client
