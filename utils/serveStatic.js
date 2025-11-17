import fs from "node:fs/promises";
import path from "node:path";
import { sendResponse } from "./sendResponse.js";
import { getContentType } from "./getContentType.js";

export async function serveStatic(req, res, baseDir) {
  // Construct the path to the public directory
  const publicDir = path.join(baseDir, "public");

  // Construct the file path based on the request URL
  // If the URL is "/favicon.ico", "/", or "/public", serve "index.html"
  // Otherwise, serve the requested file
  let filePath = path.join(
    publicDir,
    req.url === ("/favicon.ico" || "/" || "/public") ? "index.html" : req.url
  );

  try {
    // Check if the file path is a directory
    const stat = await fs.stat(filePath);
    if (stat.isDirectory()) {
      // If it's a directory, try to serve the index.html file
      filePath = path.join(filePath, "index.html");
    }

    // Log the file path for debugging purposes
    // console.log(filePath);

    // Get the file extension and determine the content type
    const ext = path.extname(filePath);
    const contentType = getContentType(ext);

    // Read the file content
    const content = await fs.readFile(filePath);

    // Send the file content as the response
    sendResponse(res, 200, contentType, content);
  } catch (err) {
    // Handle errors
    if (err.code === "ENOENT") {
      // File not found, serve 404.html
      const notFoundPath = path.join(publicDir, "404.html");
      // try {
      // Read the 404.html file content
      const content = await fs.readFile(notFoundPath);

      // Send the 404.html content as the response
      sendResponse(res, 404, "text/html", content);
    } else {
      // Send a generic error response for other errors
      sendResponse(res, 500, "text/html", `<h1>${err.code}</h1>`);
      console.error(err);
    }
  }
}
