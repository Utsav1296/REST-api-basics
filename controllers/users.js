
import { v4 as uuid } from 'uuid';

let users = [];
// GET
export const getUsers = (req, res) => {
   console.log(users)
   res.send(users)
}

//POST
export const createUser = (req, res) => {
   console.log('post route fired')
   const newUser = req.body
   const userId = uuidv4()
   const data = { ...newUser, id: userId }

   users.push(data)
   res.send(`posted succesfully for username ${data.firstName} with id ${data.id}`)
}

//GET WITH ID PARAMS
export const getUser = (req, res) => {
   const { id } = req.params
   const userFound = users.find((user) => user.id === id)
   res.send(userFound)
}

//DELETE
export const deleteUser = (req, res) => {
   const { id } = req.params
   const users = users.filter((user) => user.id !== id)
   res.send(users)
}

//PATCH - partial update
export const updateUser = (req, res) => {
   const { id } = req.params
   const { firstName, lastName, age } = req.body
   const user = users.find(user => user.id === id)

   if (firstName) { user.firstName = firstName }
   if (lastName) { user.lastName = lastName }
   if (age) { user.age = age }

   res.send(`User with the id ${id} has been updated`)
}

//PUT - replacing existing data
//logic need to be reviewed
export const replaceUser = (req, res) => {
   const { id } = req.params

   const oldUsers = users.filter((user) => user.id !== id)
   let userForUpdate = users.find((user) => user.id === id)

   userForUpdate = req.body
   const data = { ...oldUsers, userForUpdate }

   res.send(`Put request with the id ${id} has been called`)
}