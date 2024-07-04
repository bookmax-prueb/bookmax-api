import Author from '../models/books/Author.js'
import Reader from '../models/books/Reader.js'
import bcrypt from 'bcrypt'

// TODO: validar body
const register = async (req, res) => {
  // TODO: validar que no haya un usuario con ese email
  const { role } = req.body
  let newUser = null
  const { user } = req.body
  user.password = await bcrypt.hash(user.password, 10)
  try {
    if (role === 'author') {
      newUser = await Author.create(user)
    } else if (role === 'reader') {
      newUser = await Reader.create(user)
    }
    newUser.password = undefined
    return res.json({
      msg: 'User created',
      user: newUser
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error creating user',
      error
    })
  }
}

export {
  register
}
