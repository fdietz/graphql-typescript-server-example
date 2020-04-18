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
    title: String!
    authorId: ID!
    author: User!
  }

  type User {
    id: ID!
    name: String!
    posts: [Post!]
  }

  input PostInput {
    title: String!
    authorId: ID!
  }

  type Mutation {
    createPost(post: PostInput!): Post
  }
`;