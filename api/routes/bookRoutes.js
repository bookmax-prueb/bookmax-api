import { Router } from 'express'
import { createBook, getBookInfoById, searchBooks } from '../controllers/bookControllers/bookController.js'
import { authUser } from '../middleware/authValidator.js'
import commentRouter from './commentRoutes.js'

const bookRouter = Router()

bookRouter.post('/', authUser(['author']), createBook)
bookRouter.get('/', searchBooks)
bookRouter.get('/:bookId', getBookInfoById)

bookRouter.use('/:bookId/comments', commentRouter)

export default bookRouter
