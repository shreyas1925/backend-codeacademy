const express = require("express")
const app = express()
const PORT = 8000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let tasks = []
let id=0

// post todo
app.post("/todos",(req,res)=>{
    console.log(req.body)
    req.body.id = id
    id+=1
    req.body.isComplete = false
    const task = req.body
    tasks.push(req.body)
    res.send(task)
})

//get all todos
app.get("/todos",(req,res)=>{
    res.json(tasks)
})

//get active tasks
app.get("/todos/active",(req,res)=>{
    const task = tasks.filter(todoTask=> todoTask.isComplete==false )
    res.json(task)
})

//get completed tasks
app.get("/todos/completed",(req,res)=>{
    const task = tasks.filter(todoTask=> todoTask.isComplete==true )
    res.json(task)
})

//get todo based on id
app.get("/todos/:id",(req,res)=>{
    const _id = parseInt(req.params.id)
    console.log(_id);
    let task = tasks.filter(todoTask => todoTask.id ===_id)
    res.json(task) 
})

// update todo based on id
app.patch("/todo/:id",(req,res)=>{
    const _id = parseInt(req.params.id)
    const task = tasks.map(todoTask => {
        todoTask.id===_id?todoTask.isComplete=true:false
        return todoTask
    })
    res.json(task)  
})

//delete todo if it is completed
app.delete("/todo",(req,res)=>{

    let completed = Boolean(req.query.isComplete)
    tasks = tasks.filter(todoTask => {
        console.log(todoTask.isComplete, completed)
        return todoTask.isComplete !== completed
    })
    res.json(tasks)
})

app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})