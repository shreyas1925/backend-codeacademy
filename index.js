const http = require('http');
const PORT = process.env.PORT || 6000;
const url = require('url')

let db = []
let id = 0

const server = http.createServer((req, res) => {
  console.log(req.url);
  const query = url.parse(req.url, true)
  // common functionality log each req
  console.log(`Got ${req.method}: ${req.url}`);

  if (req.method === 'POST' && req.url === '/todos') {
    // handling streams
    // call fn
    let body = ""
    req.on("data", chunk => {
      body += chunk.toString()
    })
    req.on("end", () => {
      body = JSON.parse(body)
      body.id = id
      id += 1
      body.isComplete = false
      db.push(body)
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(body))
    })

  }

  else if (req.method === 'GET' && req.url === '/todos') {

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(db))
  }

  else if (req.method === 'GET' && req.url == '/todos/active') {
    const tasks = db.filter(todoTask => todoTask.isComplete == false)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(tasks))

  }
  else if (req.method === 'GET' && req.url == '/todos/complete') {
    const tasks = db.filter(todoTask => todoTask.isComplete == true)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(tasks))

  }

  else if (req.method === 'GET' && query.path.match(/^\/todos\/\d$/)) {
    const _id = parseInt(query.pathname.split('/')[2])

    const task = db.filter(todoTask => todoTask.id === _id)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(task))
  }

  else if (req.method === 'PATCH' && query.path.match(/^\/todo\/\d$/)) {
    const _id = parseInt(query.pathname.split('/')[2])

    const task = db.map(todoTask => {
      todoTask.id === _id ? todoTask.isComplete = true : false
      return todoTask
    })

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(task))
  }

  // delete based on ID (just filtering not deleting permanently)

  else if (req.method === 'DELETE' && query.path.match(/^\/todo\/\d$/)) {
    const _id = parseInt(query.pathname.split('/')[2])

    const task = db.filter(todoTask => todoTask.id !== _id)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(task))
  }

  // delete if isComplete=true (not working)

  else if (req.method === 'DELETE' && req.url === '/todos?isComplete=true') {
    const path = new URL(req.url).searchParams
    const isComplete = path.get('isComplete')
    console.log(isComplete);

    const task = db.filter(todoTask => todoTask.isComplete !== isComplete)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(task))
  }
});

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});