// Define an asynchronous function named 'parseJSON' that takes a 'req' parameter
export async function parseJSON(req) {
  // Initialize an empty string to store the request body
  let body = "";

  // Use a for-await loop to iterate over the chunks of the request body
  for await (const chunks of req) {
    // Append each chunk to the 'body' string
    body += chunks;
  }
  try {
    // Parse the 'body' string as JSON and return the resulting object
    return JSON.parse(body);
  } catch (err) {
    // If an error occurs during JSON parsing, throw a new error with a descriptive message
    throw new Error(`Invalid JOSN Format: ${err}`);
  }
}