import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    posts: [Post!]
    post(id: ID!): Post
    users: [User!]
    user(id: ID!): User
  }

  type Post {
    id: ID!
    name: String!
    author: User!
  }

  type User {
    id: ID!
    name: String!
    posts: [Post!]
  }
`;