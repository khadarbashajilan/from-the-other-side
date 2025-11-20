import path from "node:path";
import fs from "node:fs/promises";
import { getdata } from "./getdata.js";

export async function addSightings(newSighting) {
  try {
    // Call the 'getdata' function asynchronously to fetch existing sightings data
    const sightings = await getdata()
    // Add the 'newSighting' to the 'sightings' array
    sightings.push(newSighting)
    // Construct the path to the JSON file using the 'path.join' method
    const pathJSON = path.join("data", "data.json");
    // Write the updated 'sightings' array to the JSON file asynchronously using 'fs.writeFile'
    await fs.writeFile(
        pathJSON,
        JSON.stringify(sightings, null, 2),
        'utf8'
    )
  } catch (err) {
    throw new Error(err)
  }
}