const net = require('net')
const readline = require('readline/promises')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})



const client = net.createConnection({
    host:"127.0.0.1",
    port:3008,
},async () =>{
    console.log("Connected to the server")

    const message = await rl.question("Enter a message > ")
    client.write(message)
})

client.on("data", (d)=>{
    console.log("Message from server ", d.toString('utf-8'))
})

client.on("close", () =>{
    console.log("Closed")
})

client.on("end", () => {
    console.log("End")
})