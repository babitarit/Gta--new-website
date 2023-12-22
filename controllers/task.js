// controller for task

const Task = require('../models/task');

exports.getTasks = (req, res) => {
    Task.find()
        .then((tasks) => res.json(tasks))
        .catch((err) => res.status(400).json('Error: ' + err));
}

exports.getTask = (req, res) => {
    Task.findById(req.params.id)
        .then((task) => res.json(task))
        .catch((err) => res.status(400).json('Error: ' + err));
}

exports.addTask = (req, res) => {
    const userId = req.body.userId;
    const createdBy = req.body.createdBy;
    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;
    const metadata = req.body.metadata;

    const newTask = new Task({
        userId,
        createdBy,
        title,
        description,
        status,
        metadata,
    });

    newTask.save()
        .then(() => res.json('Task added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

exports.deleteTask = (req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(() => res.json('Task deleted.'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

exports.updateTask = (req, res) => {
    Task.findById(req.params.id)
        .then((task) => {
            task.userId = req.body.userId;
            task.createdBy = req.body.createdBy;
            task.title = req.body.title;
            task.description = req.body.description;
            task.status = req.body.status;
            task.metadata = req.body.metadata;

            task.save()
                .then(() => res.json('Task updated!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
}

