import Comment from '../../models/books/Comment.js'
import Service from '../../services/Service.js'

const commentService = new Service(Comment)

const createComment = async (req, res) => {
  const newComment = {
    comment: req.body.comment,
    user: req.user.id,
    book: req.params.bookId
  }
  try {
    const comment = await commentService.create(newComment)
    return res.json({ comment })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error creating comment'
    })
  }
}

const getCommentByBookId = async (req, res) => {
  const { bookId } = req.params
  const books = await Comment.find({
    book: bookId
  })
  return res.json({
    books
  })
}

export {
  createComment,
  getCommentByBookId
}
