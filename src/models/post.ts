import { Post, posts } from '../data/posts'

export const findAll = (): Post[] => posts
export const findById = (id:number):Post | void => posts[id]
