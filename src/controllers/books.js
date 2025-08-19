
const Book = require('../modules/books')


const getBooks = (req, res) => {
    Book.find({})
        .then(book => {
            res.status(200).send(book);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

// Получим пользователя по ID
const getBook = (req, res) => {
    const { book_id } = req.params;
    Book.findById(book_id)
      .then(book => {
            res.status(200).send(book);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}


const createBook = (req, res) => {
    const data = req.body;
    Book.create(data)
        .then(book => {
            res.status(200).send(book);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}


const updateBook = (req, res) => {
    const { user_id } = req.params;
    const data = req.body;
    Book.findByIdAndUpdate(user_id, data, { new: true, runValidators: true })
        .then(book => {
            res.status(200).send(book);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}


const deleteBook = (req, res) => {
    const { user_id } = req.params;
    Book.findByIdAndDelete(user_id)
       .then(book => {
            res.status(200).send(book);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

// const getUsers = (req, res) => {
//   res.status(200).send("All users");
// };

// const getUser = (req, res) => {
//   const {id} = req.params;
//   res.status(200).send(`User with id: ${id}`);
// };

// const createUser = (req, res) => {
//    const { name } = req.body; 
//   res.status(201).send(`User created: ${name}`);
// };

// const updateUser = (req, res) => {
//   const { id } = req.params;
//   res.status(200).send(`User with id: ${id} updated`);
// };

// const deleteUser = (req, res) => {
//   const { id } = req.params;
//   res.status(200).send(`User with id: ${id} deleted`);
// };

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
