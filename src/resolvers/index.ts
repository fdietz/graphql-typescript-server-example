import { Resolvers, Post, User } from '../types';
import { uuid } from 'uuidv4'

const resolvers: Resolvers = {
  Query: {
    users: (parent, args, { models }) => {
      return models.user.findAll();
    },
    user: (parent, { id }, { models }) => {
      return models.user.findById(parseInt(id));
    },
    posts: (parent, args, { models }) => {
      return models.post.findAll();
    },
    post: (parent, { id }, { models }) => {
      return models.post.findById(parseInt(id));
    },
  },

  Mutation: {
    createPost: (parent, { post: { title, authorId } }, { models }) => {
      return models.post.create({ title, authorId: parseInt(authorId) })
    },

    // deletePost: (parent, { id }, { models }) => {
    //   const { [id]: post, ...otherposts } = models.posts;

    //   if (!post) {
    //     return false;
    //   }

    //   // models.posts = otherposts;

    //   return true;
    // },
  },

  User: {
    posts: (user: User, args, { models }) => {
      return models.post.findAll().filter(
        post => post.authorId === parseInt(user.id),
      );
    },
  },

  Post: {
    author: (post: Post, args, { models }) => {
      return models.user.findById(parseInt(post.authorId));
    },
  },
};

export default resolvers