export default {
  Query: {
    users: (parent, args, { models }) => {
      return Object.values(models.users);
    },
    user: (parent, { id }, { models }) => {
      return models.users[id];
    },
  },

  User: {
    posts: (user, args, { models }) => {
      return Object.values(models.posts).filter(
        post => post.userId === user.id,
      );
    },
  },
};