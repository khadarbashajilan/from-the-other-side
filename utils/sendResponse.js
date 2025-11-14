export function sendResponse(res, statusCode, contentType, payload) {
  // Set the status code to 200 (OK)
  res.statusCode = statusCode;
  // Set the Content-Type header to text/html
  res.setHeader("Content-Type", `${contentType}`);
  // Send the file content as the response
  res.end(payload);
}
