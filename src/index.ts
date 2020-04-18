import { ApolloServer, gql } from 'apollo-server'
import { makeExecutableSchema } from 'graphql-tools'

import schema from './schema';
import resolvers from './resolvers';
import * as postModel from './models/post';
import * as userModel from './models/user';

export interface Context {
  models: {
    user: typeof userModel;
    post: typeof postModel;
  };
}

const context: Context = {
  models: {
    user: userModel,
    post: postModel,
  }
};

const server = new ApolloServer({ typeDefs: schema, resolvers: resolvers as any, context })
server.listen().then(({ url }) => {
  console.log(`🚀 Server started at ${url}`)
})
