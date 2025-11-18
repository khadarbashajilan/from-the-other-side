// Import the 'path' module from Node.js to handle file paths
import path from "node:path"
// Import the 'fs/promises' module from Node.js to handle file system operations asynchronously
import fs from "node:fs/promises"

// Define an asynchronous function named 'getdata' to fetch and parse data from a JSON file
export async function getdata(){

    // Use a try-catch block to handle potential errors during file operations
    try{
        // Construct the path to the JSON file using the 'path.join' method
        const pathJSON = path.join('data','data.json')
        // Read the contents of the JSON file asynchronously using 'fs.readFile'
        const data = await fs.readFile(pathJSON, 'utf-8')
        // Parse the JSON data into a JavaScript object using 'JSON.parse'
        const parsedData = JSON.parse(data)
        // Return the parsed data
        return parsedData
    }catch(err){
        // If an error occurs during the file operations, log the error to the console
        console.error(err) 
        // Return an empty array as a fallback
        return []
    }

}
