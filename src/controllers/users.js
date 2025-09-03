
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



module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
