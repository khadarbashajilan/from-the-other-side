import http from "node:http";

const PORT=1024

const server = http.createServer(async (req, res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><h1>The server is working</h1></html>')
})

server.listen(PORT, ()=>{
    console.log(`Server running at :  http://localhost:${PORT}/api`)
})  