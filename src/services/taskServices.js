let tasks = []
let id=0

const getAllTasks = () => {
    return tasks;
}

const addTask = (task) => {
    
    tasks.push({
        title:task.title,
        id,
        isComplete:false
    })
    id+=1
    return tasks
}

const getTaskById = (id) => {
    return tasks.find(task => task.id === id)
}

const DeleteTask = (completed) =>{
    return tasks.filter(todoTask => todoTask.isComplete !== completed) 
}

const UpdateTaskById = (id) =>{
    return tasks.find(task => task.id === id?task.isComplete===true:false)
}


const getCompletedTask = () =>{
    return tasks.filter(todoTask => todoTask.isComplete===true)
    
}

const getActiveTask = () =>{
    return tasks.filter(todoTask=> todoTask.isComplete===false)

}

module.exports = {
    getAllTasks,
    addTask,
    getTaskById,
    DeleteTask,
    UpdateTaskById,
    getCompletedTask,
    getActiveTask
}