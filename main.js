const express = require("express")
const app = express()
const PORT = 8000
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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