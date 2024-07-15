import Comment from '../../models/books/Commemts.js'
import Book from '../../models/books/Book.js'
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

export {
  createComment
}
