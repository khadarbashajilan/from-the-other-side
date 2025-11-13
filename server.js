import http from "node:http";
import fs from 'node:fs/promises'
import path from "node:path";

const PORT=1024

// The directory name of the current module
const __dir = import.meta.dirname

// Create an HTTP server
const server = http.createServer(async (req, res)=>{

    // Construct the path to the resource to be served
    const pathToResource = path.join(__dir, 'public', 'index.html')

    try {
        // Read the file content asynchronously
        const content = await fs.readFile(pathToResource);
        // Set the status code to 200 (OK)
        res.statusCode = 200;
        // Set the Content-Type header to text/html
        res.setHeader('Content-Type', 'text/html');
        // Send the file content as the response
        res.end(content);
    } catch (error) {
        // If an error occurs, set the status code to 500 (Internal Server Error)
        res.statusCode = 500;
        // Set the Content-Type header to text/plain
        res.setHeader('Content-Type', 'text/plain');
        // Send an error message as the response
        res.end('Internal Server Error');
    }
})

// Start the server and listen on the specified port
server.listen(PORT, ()=>{
    // Log a message to the console indicating the server is running
    console.log(`Server running at :  http://localhost:${PORT}/api`)
})