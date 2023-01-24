const http = require("http")
const PORT = process.env.PORT || 5000
const server = http.createServer((req, res) => {

    res.write("Server started")
    res.end()

})

server.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})