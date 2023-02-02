const tasksServices = require('../services/taskServices');

const getAllTasks = (req,res) => {
    const tasks = tasksServices.getAllTasks();
    res.status(200).json(tasks);
}

const addTask = (req,res) => {
    const task = tasksServices.addTask(req.body);
    res.status(201).json(task);
}

const getTaskById = (req,res) => {
    const id = Number(req.params.id);
    const task = tasksServices.getTaskById(id);
    res.status(200).json(task);
}

const UpdateTaskById = (req,res) => {
    const id = Number(req.params.id);
    const task = tasksServices.UpdateTaskById(id);
    res.status(200).json(task);
}

const DeleteTask = (req,res) => {
    const completed = Boolean(req.query.isComplete)
    const task = tasksServices.DeleteTask(completed);
    res.status(200).json(task);
}

module.exports = { getAllTasks, addTask, getTaskById, UpdateTaskById, DeleteTask }

