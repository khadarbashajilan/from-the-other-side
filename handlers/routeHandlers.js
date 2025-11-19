// Import the 'getdata' function from the '../utils/getdata.js' module
import { getdata } from "../utils/getdata.js";
import { parseJSON } from "../utils/parseJSONbody.js";
// Import the 'sendResponse' function from the '../utils/sendResponse.js' module
import { sendResponse } from "../utils/sendResponse.js";

// Define an asynchronous function named 'handleGet' that takes a 'res' parameter
export async function handleGet(res) {
    // Call the 'getdata' function asynchronously to fetch data
    let data = await getdata()
    // Convert the fetched data to a JSON string
    data = JSON.stringify(data)
    // Call the 'sendResponse' function to send the JSON data as a response with a status code of 200 and a content type of 'application/json'
    sendResponse(res, 200, 'application/json', data)
}

export async function handlePost(req, res) {
    const rawbody = await parseJSON(req)
    console.log(rawbody)
}