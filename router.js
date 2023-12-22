// routers

import express from 'express';
import {addUser, deleteUser, getUser, getUsers, updateUser} from './controllers/user'
import {addProject, deleteProject, getProject, getProjects, updateProject} from './controllers/project'
import {addTask, deleteTask, getTask, getTasks, updateTask} from './controllers/task'

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', addUser);
router.delete('/users/:id', deleteUser);
router.patch('/users/:id', updateUser);

router.get('/projects', getProjects);
router.get('/projects/:id', getProject);
router.post('/projects', addProject);
router.delete('/projects/:id', deleteProject);
router.patch('/projects/:id', updateProject);

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.post('/tasks', addTask);
router.delete('/tasks/:id', deleteTask);
router.patch('/tasks/:id', updateTask);