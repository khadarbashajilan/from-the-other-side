// Import the 'http' module from Node.js to create an HTTP server
import http from "node:http";
// Import the 'serveStatic' function from the './utils/serveStatic.js' module to serve static files
import { serveStatic } from "./utils/serveStatic.js";
// Import the 'handleGet' function from the './handlers/routeHandlers.js' module to handle GET requests to the '/api' endpoint
import { handleGet } from "./handlers/routeHandlers.js";

// Define the port number on which the server will listen
const PORT = 1024;

// The directory name of the current module
const __dir = import.meta.dirname;

// Create an HTTP server using the 'http.createServer' method
const server = http.createServer(async (req, res) => {
    // Check if the request URL is '/api'
    if (req.url === '/api') {
        // If the request method is 'GET', call the 'handleGet' function asynchronously
        if (req.method === 'GET') return await handleGet(res)
    }
    // Check if the request URL does not start with '/api'
    else if (!req.url.startsWith('/api')) {
        // If the request URL does not start with '/api', call the 'serveStatic' function asynchronously to serve static files
        return await serveStatic(req, res, __dir)
    }
})

// Start the server and listen on the specified port
server.listen(PORT, () => {
    // Log a message to the console indicating the server is running
    console.log(`Server running at :  http://localhost:${PORT}`)
})