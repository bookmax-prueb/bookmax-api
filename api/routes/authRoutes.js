import { Router } from 'express'
import { login, register } from '../controllers/authController.js'
import validateBody from '../middleware/validateBody.js'
import registerUserSchema from '../validators/registerUserSchema.js'

const authRouter = Router()

authRouter.post('/register', validateBody(registerUserSchema), register)
authRouter.post('/login', login)

export default authRouter
