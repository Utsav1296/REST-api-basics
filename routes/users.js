import express from 'express'
import { getUsers, createUser, getUser, deleteUser, updateUser, replaceUser } from '../controllers/users.js';

const usersRouter = express()


usersRouter.get('/', getUsers)

usersRouter.post('/', createUser)

usersRouter.get('/:id', getUser)

usersRouter.delete('/:id', deleteUser)

usersRouter.patch('/:id', updateUser)

usersRouter.put('/:id', replaceUser)

export default usersRouter