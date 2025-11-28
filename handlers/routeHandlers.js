// Import the 'getdata' function from the '../utils/getdata.js' module
import { sightingEvents } from "../events/sightingEvents.js";
import { addSightings } from "../utils/addnewSightings.js";
import { getdata } from "../utils/getdata.js";
import { parseJSON } from "../utils/parseJSONbody.js";
import { sanitizeIP } from "../utils/sanitizeInput.js";
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
    // This function reads the request body and parses it as JSON
    const parsedBody = await parseJSON(req);

    // Sanitize the parsed body to ensure it does not contain any malicious input
    // This function checks the IP address in the parsed body and ensures it is safe
    const sanitizedBody = sanitizeIP(parsedBody)

    // Add the sanitized body to the sightings data using the 'addSightings' function
    // This function stores the sanitized data in the database or data store
    await addSightings(sanitizedBody);

    // Emit a 'sighting-added' event with the sanitized body as the payload
    // This event can be listened to by other parts of the application to perform additional actions
    sightingEvents.emit('sighting-added', sanitizedBody)

    // Send a response with a status code of 201 (Created) and the parsed body as the response body
    // The parsed body is converted to a JSON string before sending
    sendResponse(res, 201, "application/json", JSON.stringify(sanitizedBody));
  } catch (err) {
    // If an error occurs during the request processing, send a response with a status code of 400 (Bad Request) and the error as the response body
    // The error is converted to a JSON string before sending
    sendResponse(res, 400, "application/json", JSON.stringify({ error: err }));
  }
}
