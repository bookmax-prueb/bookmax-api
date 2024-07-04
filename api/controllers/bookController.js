import Service from '../services/Service.js'
import Book from '../models/books/Book.js'

const bookService = new Service(Book)

const createBook = async (req, res) => {
  try {
    const newBook = await bookService.create(req.body)
    return res.json({
      msg: 'Book created',
      book: newBook
    })
  } catch (Error) {
    res.status(500).json({
      msg: 'error creatin book',
      Error
    })
  }
}

export {
  createBook
}
