import { Router } from 'express'
import { getAllAuthors, getAuthorById, getBookAuthorId } from '../controllers/authorControllers/authorController.js'

const authorRouter = Router()

authorRouter.get('/', getAllAuthors)
authorRouter.get('/:authorId', getAuthorById)
authorRouter.get('/:authorId/books', getBookAuthorId)

export default authorRouter
