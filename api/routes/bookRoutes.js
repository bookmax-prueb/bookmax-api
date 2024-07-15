import { Router } from 'express'
import { createBook, getBookInfoById, searchBooks } from '../controllers/bookControllers/bookController.js'

const bookRouter = Router()

bookRouter.post('/', createBook)
bookRouter.get('/', searchBooks)
bookRouter.get('/:bookId', getBookInfoById)

export default bookRouter
