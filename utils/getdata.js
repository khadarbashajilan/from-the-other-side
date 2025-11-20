import path from "node:path"
import fs from "node:fs/promises"

export async function getdata(){

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
        console.error(err) 
        return []
    }

}
