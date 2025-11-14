import http from "node:http";
import { serveStatic } from "./utils/serveStatic.js";

const PORT=1024

// The directory name of the current module
const __dir = import.meta.dirname

// Create an HTTP server
const server = http.createServer(async (req, res)=>{
    await serveStatic(req, res, __dir)
})

// Start the server and listen on the specified port`
server.listen(PORT, ()=>{
    // Log a message to the console indicating the server is running
    console.log(`Server running at :  http://localhost:${PORT}/api`)
})