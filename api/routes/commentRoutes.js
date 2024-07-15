import { Router } from 'express'
import { createComment } from '../controllers/bookControllers/commentController.js'
import { authUser } from '../middleware/authValidator.js'

const commentRouter = Router({
  mergeParams: true,
  strict: true
})

commentRouter.post('/', authUser(['author', 'reader']), createComment)

export default commentRouter
