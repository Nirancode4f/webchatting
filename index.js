const express = require('express');
const app = express();
const port = 3000;

//connect to html

//print server request

const http = require('http');
const server = http.createServer(app);
const {
    Server
} = require('socket.io');


const io = new Server(server);


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/src/client.html");
})



io.on("connection", socket => {
    console.log("user connected")
    io.emit("nlogin",
        ">>1 new user login<<"
    )

    socket.on("on-chat", data => {
        console.log(data)
        io.emit("user-chat", data)
    })
})

io.on("connection", socket => {
    console.log("user disconnected")
})

server.listen(port, () => {
    console.log('connect on 3000')
});