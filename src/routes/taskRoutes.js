const express = require("express")
const {getAllTasks,addTask,getTaskById,UpdateTaskById,DeleteTask} = require("../controllers/taskController")

const router = express.Router()

router.get("/",getAllTasks)
router.post("/",addTask)
router.get("/:id",getTaskById)
router.patch("/:id",UpdateTaskById)
router.delete("/",DeleteTask)
// router.get("/:id",getCompletedTask)
// router.get(":/id",getActiveTask)


module.exports = {taskRoutes : router}




