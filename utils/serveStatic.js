import fs from "node:fs/promises";
import path from "node:path";
import { sendResponse } from "./sendResponse.js";

export async function serveStatic(req, res, baseDir) {
  const filePath = path.join(baseDir, "public", "index.html");

  try {
    const content = await fs.readFile(filePath);
    sendResponse(res, 200, "text/html", content);
  } catch (err) {
    sendResponse(res, 500, "text/plain", "Internal Server Error");
    console.error(err);
  }
}
