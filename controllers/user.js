// controller for user

const User = require('../models/user');

exports.getUsers = (req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json('Error: ' + err));
}

exports.getUser = (req, res) => {
    User.findById(req.params.id)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json('Error: ' + err));
}

exports.addUser = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const metadata = req.body.metadata;

    const newUser = new User({
        name,
        email,
        password,
        metadata,
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

exports.deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

exports.updateUser = (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;
            user.metadata = req.body.metadata;

            user.save()
                .then(() => res.json('User updated!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
}

