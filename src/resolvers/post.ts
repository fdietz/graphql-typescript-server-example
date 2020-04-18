import uuidv4 from 'uuid/v4';

export default {
  Query: {
    posts: (parent, args, { models }) => {
      return Object.values(models.posts);
    },
    post: (parent, { id }, { models }) => {
      return models.posts[id];
    },
  },

  Mutation: {
    createPost: (parent, { title, userId }, { models }) => {
      const id = uuidv4();
      const post = {
        id,
        title,
        userId,
      };

      models.posts[id] = post;
      models.users[userId].messageIds.push(id);

      return post;
    },

    deletePost: (parent, { id }, { models }) => {
      const { [id]: post, ...otherposts } = models.posts;

      if (!post) {
        return false;
      }

      models.posts = otherposts;

      return true;
    },
  },

  Post: {
    user: (post, args, { models }) => {
      return models.users[post.userId];
    },
  },
};