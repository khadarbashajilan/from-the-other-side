// Get the form and form message elements from the DOM
const form = document.getElementById("eventForm")
const formMessageText = document.querySelector(".form-message-text")

// Add an event listener to the form for the submit event
form.addEventListener("submit", async (event) => {
  // Prevent the default form submission behavior
  event.preventDefault()

  // Get the form data
  const title = document.getElementById("title").value
  const text = document.getElementById("details").value
  const dateTimeString = document.getElementById("datetime").value
  const location = document.getElementById("location").value

  // Create a new Date object from the date and time string
  const date = new Date(dateTimeString)
  // Define options for formatting the date
  const options = {
    year: "numeric",      // Display the year numerically
    month: "long",        // Display the month as a full name
    day: "numeric",        // Display the day numerically
    hour: "2-digit",      // Display the hour as two digits
    minute: "2-digit",     // Display the minute as two digits
    hour12: false,        // Use 24-hour format
  }
  // Format the date to a readable string using the specified options
  const readableDate = date.toLocaleString("en-GB", options)

  // Create an object to hold the form data
  const formData = {
    location: location,    // Location from the form
    timeStamp: readableDate, // Formatted date string
    text: text,            // Text from the form
    title: title,          // Title from the form
  }

  try {
    // Clear any previous form message
    formMessageText.textContent = ""
    // Send form data using the fetch API
    const response = await fetch("/api", {
      method: "POST",      // Use POST method
      headers: {
        "Content-Type": "application/json"  // Set the content type to JSON
      },
      body: JSON.stringify(formData),  // Convert the form data to a JSON string
    })
    // Check if the response is successful
    if (response.ok) {
      // Display a success message with a link to view the sightings
      formMessageText.innerHTML = `Your sighting was uploaded. View it <a href="./sightings.html">here</a>.`;
      // Reset the form
      form.reset()
    } else {
      // Display an error message if the server responds with an error
      formMessageText.textContent = `The server Ghosted you(!). Please try again.`
      // Log the server error to the console
      console.error("Server Error:", response.statusText)
    }
  } catch (error) {
    // Display an error message if there is a network or other error
    formMessageText.textContent = `Serious ghouls! Please try again.`
    // Log the error to the console
    console.error("Error:", error)
  }
})