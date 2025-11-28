// Import the EventEmitter class from the 'node:events' module
// This class is used to create and manage custom events
import { EventEmitter } from 'node:events'

// Import the 'createAlert' function from the '../utils/createAlert.js' module
// This function is used to create an alert when a new sighting is added
import { createAlert } from '../utils/createAlert.js'

// Create a new instance of the EventEmitter class
// This instance will be used to emit and listen to custom events
export const sightingEvents = new EventEmitter()

// Listen for the 'sighting-added' event on the sightingEvents instance
// When this event is emitted, the 'createAlert' function will be called
sightingEvents.on('sighting-added', createAlert)