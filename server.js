import http from "node:http";
import fs from 'node:fs'
import path from "node:path";

const PORT=1024

// The directory name of the current module
const __dir = import.meta.dirname

const server = http.createServer(async (req, res)=>{

    const pathToResource = path.join(__dir, 'public', 'index.html')

    fs.readFile(pathToResource, 'utf8', (err, content)=>{
        if(err){
            console.error(err)
            return
        }
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end(content)
    })
})

server.listen(PORT, ()=>{
    console.log(`Server running at :  http://localhost:${PORT}/api`)
})  