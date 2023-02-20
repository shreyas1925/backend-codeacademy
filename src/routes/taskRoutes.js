const express = require('express');
const {getAllTasks,addTask,getTaskById,UpdateTaskById,DeleteTask,getCompletedTask, getActiveTask } = require('../controllers/taskControllers');

const router = express.Router();

router.get('/',getAllTasks,getCompletedTask,getActiveTask);
router.post('/',addTask);
router.get('/:id',getTaskById);
router.patch('/:id',UpdateTaskById);
router.delete('/',DeleteTask);

module.exports = {taskRoutes : router};
