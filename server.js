const net = require('net')

const server = net.createServer()
const clients = []
server.on("connection", (socket) =>{
    console.log("A new server connection")
    clients.push(socket)
    socket.on("data", (data) =>{
        console.log("data is", data.toString("utf-8"))
        clients.map((e) =>{
            socket.write(data)

        })
    })
})

server.listen(3008, "127.0.0.1", () =>{
    console.log("opened server ")
})