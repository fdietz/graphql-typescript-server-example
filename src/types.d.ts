export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
   __typename?: 'Query';
  posts?: Maybe<Array<Post>>;
  post?: Maybe<Post>;
  users?: Maybe<Array<User>>;
  user?: Maybe<User>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Post = {
   __typename?: 'Post';
  id: Scalars['ID'];
  name: Scalars['String'];
  author: User;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  posts?: Maybe<Array<Post>>;
};
