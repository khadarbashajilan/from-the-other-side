// Import the 'getdata' function from the '../utils/getdata.js' module
import { addSightings } from "../utils/addnewSightings.js";
import { getdata } from "../utils/getdata.js";
import { parseJSON } from "../utils/parseJSONbody.js";
import { sendResponse } from "../utils/sendResponse.js";

export async function handleGet(res) {
  // Call the 'getdata' function asynchronously to fetch data
  let data = await getdata();
  // Convert the fetched data to a JSON string
  data = JSON.stringify(data);
  // Call the 'sendResponse' function to send the JSON data as a response with a status code of 200 and a content type of 'application/json'
  sendResponse(res, 200, "application/json", data);
}

export async function handlePost(req, res) {
  try {
    // Parse the JSON body of the incoming request using the 'parseJSON' function
    const parsedBody = await parseJSON(req);
    // Add the parsed body to the sightings data using the 'addSightings' function
    await addSightings(parsedBody);
    // Send a response with a status code of 201 (Created) and the parsed body as the response body
    sendResponse(res, 201, "application/json", JSON.stringify(parsedBody));
  } catch (err) {
    // If an error occurs during the request processing, send a response with a status code of 400 (Bad Request) and the error as the response body
    sendResponse(res, 400, "application/json", JSON.stringify({ error: err }));
  }
}
