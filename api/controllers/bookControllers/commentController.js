import Comment from '../../models/books/Comment.js'
import Service from '../../services/Service.js'
import Book from '../../models/books/Book.js'

const commentService = new Service(Comment)
const bookService = new Service(Book)

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

const deleteCommentById = async (req, res) => {
  const { commentId, bookId } = req.params
  const book = await bookService.getById(bookId)
  const comment = await commentService.getById(commentId)

  const userId = req.user.id
  if (userId === book.author.id.toString() || userId === comment.user.toString()) {
    const deleted = await commentService.deleteById(commentId)
    return res.json({
      msg: 'Comment delected',
      deleted
    })
  } else {
    return res.status(403).json({
      msg: 'Invalid permission'
    })
  }
}

export {
  createComment,
  getCommentByBookId,
  deleteCommentById
}
