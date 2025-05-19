const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)

const { Server } = require("socket.io")
const io = new Server(server)

io.on('connection', (socket) => {
    console.log("New User connected")
    socket.on('disconnect', () => {
        console.log("User disconnected")
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

server.listen(3000, () => {
    console.log("Server is running on port 3000")
})