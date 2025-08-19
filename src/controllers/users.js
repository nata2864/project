
const User = require('../modules/users')

// Получим всех пользователей из БД
const getUsers = (req, res) => {
    User.find({})
        .then(user => {
            res.status(200).send(user);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

// Получим пользователя по ID
const getUser = (req, res) => {
    const { id } = req.params;
    User.findById(id)
        .then(user => {
            res.status(200).send(user);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

// Создаем пользователя
const createUser = (req, res) => {
    const data = req.body;
    User.create(data)
        .then(user => {
            res.status(201).send(user);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

// Обновляем пользователя
const updateUser = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    User.findByIdAndUpdate(id, data, { new: true, runValidators: true })
        .then(user => {
            res.status(200).send(user);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

// Удаляем пользователя
const deleteUser = (req, res) => {
    const { id } = req.params;
    User.findByIdAndDelete(id)
        .then(user => {
            res.status(200).send("Done");
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
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
