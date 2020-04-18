import { User, users } from '../data/users'

export const findAll = (): User[] => users
export const findById = (id:number):User | void => users.find(u => u.id === id)
