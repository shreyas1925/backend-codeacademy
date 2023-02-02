const tasksServices = require('../services/taskServices');

const getAllTasks = (req,res) => {
    const tasks = tasksServices.getAllTasks();
    if(!tasks){
        res.status(404).json({message: 'No tasks found'});
    }
    res.status(200).json(tasks);
}

const addTask = (req,res) => {
    const task = tasksServices.addTask(req.body);
    if(!task){
        res.status(400).json({message: 'Invalid details'});
    }
    res.status(201).json(task);
}

const getTaskById = (req,res) => {
    const id = Number(req.params.id);
    const task = tasksServices.getTaskById(id);
    if(!task){
        res.status(404).json({message: 'Required task not found'});
    }
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

const completedTask = (req,res) => {
    const tasks = tasksServices.getCompletedTask()
    res.status(200).json(tasks);
}

const getActiveTask = (req,res) => {
    const tasks = tasksServices.getActiveTask()
    res.status(200).json(tasks);
}

module.exports = { getAllTasks, addTask, getTaskById, UpdateTaskById, DeleteTask,completedTask,getActiveTask }

