import http from "node:http";

const PORT=1024

const server = http.createServer(async (req, res)=>{
    res.write("HI, welcome to my server\n")
    res.end("BYE")
})

server.listen(PORT, ()=>{
    console.log(`Server running at :  http://localhost:${PORT}/api`)
})