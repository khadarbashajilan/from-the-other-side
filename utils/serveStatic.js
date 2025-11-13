// Import the path module from Node.js for handling file paths
import path from "node:path";

/**
 * Serves static files from the specified base directory.
   The base directory containing the public folder.
 */
export function serveStatic(baseDir) {
    // Construct the full path to the index.html file in the public directory
    const filePath = path.join(baseDir, 'public', 'index.html');
    console.log(filePath);
}