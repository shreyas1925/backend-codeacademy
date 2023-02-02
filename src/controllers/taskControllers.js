const tasksServices = require('../services/taskServices');

const getAllTasks = async (req,res) => {
    const tasks = await tasksServices.getAllTasks();
    if(!tasks){
        res.status(404).json({message: 'No tasks found'});
    }
    res.status(200).json(tasks);
}

const addTask = async (req,res) => {
    const task = await tasksServices.addTask(req.body);
    if(!task){
        res.status(400).json({message: 'Invalid details'});
    }
    res.status(200).json(task);
}

const getTaskById = async (req,res) => {
    const id = Number(req.params.id);
    const task = await tasksServices.getTaskById(id);
    if(!task){
        res.status(404).json({message: 'Required task not found'});
    }
    res.status(200).json(task);
}

const UpdateTaskById = async (req,res) => {
    const id = Number(req.params.id);
    const task = await tasksServices.UpdateTaskById(id);
    res.status(200).json(task);
}

const DeleteTask = async(req,res) => {
    const completed = Boolean(req.query.isComplete)
    const task = await tasksServices.DeleteTask(completed);
    res.status(200).json(task);
}

const getCompletedTask = async (req,res) => {
    const tasks = await tasksServices.getCompletedTask()
    res.status(200).json(tasks);
}

const getActiveTask = async (req,res) => {
    const tasks = await tasksServices.getActiveTask()
    res.status(200).json(tasks);
}

module.exports = { getAllTasks, addTask, getTaskById, UpdateTaskById, DeleteTask,getCompletedTask,getActiveTask }