import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default client
