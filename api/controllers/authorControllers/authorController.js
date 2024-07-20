import Book from '../../models/books/Book.js'
import Author from '../../models/books/Author.js'
import Service from '../../services/Service.js'

const serviceBook = new Service(Book)
const serviceAuthor = new Service(Author)

const getAllAuthors = async (req, res) => {
  const { offset = 0, limit = 10 } = req.query

  try {
    const authors = await serviceAuthor.getAll()
      .skip(Number(offset))
      .limit(Number(limit))

    return res.json({
      authors
    })
  } catch (error) {
    console.error('Error retrieving authors:', error)
    return res.status(500).json({ error: 'Server error' })
  }
}

const getAuthorById = async (req, res) => {
  const { authorId } = req.params

  try {
    const author = await serviceAuthor.getById(authorId)

    if (!author) {
      return res.status(404).json({ msg: 'Author not found' })
    }

    return res.json({ author })
  } catch (err) {
    console.error('Error retrieving author:', err)
    return res.status(500).json({ error: 'Server error' })
  }
}

const getBookAuthorId = async (req, res) => {
  const { authorId } = req.params
  try {
    const books = await serviceBook.getAll({
      author: authorId
    })
    return res.json({
      books
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error finding books by authorId',
      authorId,
      Error
    })
  }
}

export {
  getBookAuthorId,
  getAuthorById,
  getAllAuthors
}
