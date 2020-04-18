import { Post, posts } from '../data/posts'

interface PostInput {
  title: string,
  authorId: number
}

export const findAll = (): Post[] => posts
export const findById = (id:number):Post | void => posts[id]
export const create = (postInput: PostInput):Post => {
  const post = {
    id: 3, ...postInput
  }
  posts.push(post)
  return post
}