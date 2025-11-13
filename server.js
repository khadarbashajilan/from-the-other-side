import http from "node:http";
import fs from 'node:fs/promises'
import path from "node:path";

const PORT=1024

// The directory name of the current module
const __dir = import.meta.dirname

const server = http.createServer(async (req, res)=>{

    const pathToResource = path.join(__dir, 'public', 'index.html')

    try {
        const content = await fs.readFile(pathToResource);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(content);
    } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
    }
})

server.listen(PORT, ()=>{
    console.log(`Server running at :  http://localhost:${PORT}/api`)
})  