import { Router } from 'express'
import { createBook } from '../controllers/bookControllers/bookController.js'

const bookRouter = Router()

bookRouter.post('/', createBook)

export default bookRouter
