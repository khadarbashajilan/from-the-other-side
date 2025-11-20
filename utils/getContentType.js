//Returns the appropriate MIME type for a given file extension.
export function getContentType(ext) {
  const types = {
    ".js": "text/javascript", // JavaScript files
    ".css": "text/css", // CSS files
    ".json": "application/json", // JSON files
    ".png": "image/png", // PNG images
    ".jpg": "image/jpg", // JPG images
    ".jpeg": "image/jpeg", // JPEG images
    ".gif": "image/gif", // GIF images
    ".svg": "image/svg+xml", // SVG images
    ".ico": "image/x-icon", // ICO images (favicon.ico)
  };
  // Return the MIME type for the given extension, or "text/html" if the extension is not found
  return types[ext.toLowerCase()] || "text/html";
}
