export const posts: Post[] = [
  {
    id: 1,
    title: 'First post title',
    authorId: 1
  },
  {
    id: 2,
    title: 'Second post title',
    authorId: 2
  },
];

export interface Post {
  id: number,
  title: string,
  authorId: number
}
