import { Router } from 'express'
import { createComment, getCommentByBookId } from '../controllers/bookControllers/commentController.js'
import { authUser } from '../middleware/authValidator.js'

const commentRouter = Router({
  mergeParams: true,
  strict: true
})

commentRouter.post('/', authUser(['author', 'reader']), createComment)
commentRouter.get('/', authUser(['author', 'reader']), getCommentByBookId)

export default commentRouter
