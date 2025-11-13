import http from "node:http";
import { serveStatic } from "./utils/servestatic.js";
const PORT=1024

// The directory name of the current module
const __dir = import.meta.dirname

const server = http.createServer(async (req, res)=>{
    // // Construct the absolute path to the index.html file by joining the directory name with 'public' and 'index.html'
    // const abspath2res = path.join(import.meta.dirname, 'public', 'index.html')
    // console.log('absolute: ',abspath2res)

    // // Construct the relative path to the index.html file by joining 'public' and 'index.html'
    // const relpath2res = path.join('public', 'index.html')
    // console.log('relative: ',relpath2res)

    serveStatic(__dir)

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><h1>The server is working</h1></html>')
})

server.listen(PORT, ()=>{
    console.log(`Server running at :  http://localhost:${PORT}/api`)
})  