const Book = require("../modules/books");

const getBooks = (req, res) => {
  Book.find({})
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Получим пользователя по ID
const getBook = (req, res) => {
  const { id } = req.params;
  Book.findById(id)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const createBook = (req, res) => {
  const data = req.body;
  Book.create(data)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const updateBook = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Book.findByIdAndUpdate(id, data, { new: true, runValidators: true })
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const deleteBook = (req, res) => {
  const { id } = req.params;
  Book.findByIdAndDelete(id)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
