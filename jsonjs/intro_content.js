// Function to populate the HTML content
function populateContent(data) {
  const contentContainer = document.getElementById("content");

  // Create a div with the specified classes
  const divElement = document.createElement("div");
  divElement.className = "col-lg-7 col-md-11 col-sm-12";

  // Create an h1 element for the name
  const nameElement = document.createElement("h1");
  nameElement.className = "jobTitle";
  nameElement.textContent = data.name;

  // Append the name to the div
  divElement.appendChild(nameElement);

  // Create paragraphs for intro_content
  data.intro_content.forEach((paragraph) => {
    const pElement = document.createElement("p");
    pElement.className = "intro_content";
    pElement.innerHTML = paragraph; // Use innerHTML to render HTML tags

    // Append paragraphs to the div
    divElement.appendChild(pElement);
  });

  // Append the div to the content container
  contentContainer.appendChild(divElement);
}

// Fetch the JSON data from the external file
fetch("json/introData.json")
  .then((response) => response.json())
  .then((data) => {
    // Call the function to populate the content
    populateContent(data);
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });
