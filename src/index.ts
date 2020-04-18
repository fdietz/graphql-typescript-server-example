import { ApolloServer, gql } from 'apollo-server'

import schema from './schema';
import resolvers from './resolvers';
import models from './models';

const server = new ApolloServer({ typeDefs: schema, resolvers })
server.listen().then(({url}) => {
  console.log(`🚀 Server started at ${url}`)
})
