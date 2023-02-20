const db = require('../database/models');

const getAllTasks = async () => {
    const allTasks = await db.Task.findAll();
    return allTasks;
};

const addTask = async (userTask) => {
    const newTask = {
        title: userTask.title,
        isCompleted: false,
    };
    const tasks = await db.Task.create(newTask);
    return tasks;
};

const getTaskById = async (_id) => {
    const task = await db.Task.findOne({
        where: {
            id: _id,
        }
    });
    return task;
};

const DeleteTask = async (completed) => {
    await db.Task.destroy({
        where: {
            isCompleted: completed,
        }
    });
    return getAllTasks();
};

const UpdateTaskById = async (id) => {
    const task = await db.Task.findOne({
        where: {
            id: id,
        }
    });
    task.isCompleted = true;
    await task.save();
    return task;
};


const getCompletedTask = async () => {
    const completedTask = await db.Task.findAll({
        where: {
            isCompleted: true,
        }
    });
    return completedTask;
};

const getActiveTask = async () => {
    const activeTask = await db.Task.findAll({
        where: {
            isCompleted: false,
        }
    });
    return activeTask;

};

module.exports = {
    getAllTasks,
    addTask,
    getTaskById,
    DeleteTask,
    UpdateTaskById,
    getCompletedTask,
    getActiveTask
};