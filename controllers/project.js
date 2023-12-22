//  controller for project

const Project = require('../models/project');

exports.getProjects = (req, res) => {
    Project.find()
        .then((projects) => res.json(projects))
        .catch((err) => res.status(400).json('Error: ' + err));
}

exports.getProject = (req, res) => {
    Project.findById(req.params.id)
        .then((project) => res.json(project))
        .catch((err) => res.status(400).json('Error: ' + err));
}

exports.addProject = (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const projectLink = req.body.projectLink;
    const createdBy = req.body.createdBy;
    const metadata = req.body.metadata;

    const newProject = new Project({
        title,
        description,
        projectLink,
        createdBy,
        metadata,
    });

    newProject.save()
        .then(() => res.json('Project added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

exports.deleteProject = (req, res) => {
    Project.findByIdAndDelete(req.params.id)
        .then(() => res.json('Project deleted.'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

exports.updateProject = (req, res) => {
    Project.findById(req.params.id)
        .then((project) => {
            project.title = req.body.title;
            project.description = req.body.description;
            project.projectLink = req.body.projectLink;
            project.createdBy = req.body.createdBy;
            project.metadata = req.body.metadata;

            project.save()
                .then(() => res.json('Project updated!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
}

