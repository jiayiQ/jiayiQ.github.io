// Function to populate the HTML content
function populateGraphics(data, containerClass) {
  const container = document.querySelector(`.${containerClass}`);
  let rowContainer; // Declare rowContainer outside the loop

  data.forEach((item, index) => {
    if (index % 3 === 0) {
      rowContainer = document.createElement("div"); // Create new row container for every 3rd item
      rowContainer.className = "row justify-content-start"; // Set class to start from left
      container.appendChild(rowContainer); // Append the new row container to the main container
    }

    const colElement = document.createElement("div");
    colElement.className = "col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12";

    const companyElement = document.createElement("p");
    companyElement.className = "company";
    companyElement.textContent = item.company;

    const eachBoxElement = document.createElement("div");
    eachBoxElement.className = "eachBox";

    const linkElement = document.createElement("a");
    linkElement.target = "_blank";
    linkElement.href = item.link;

    const imageElement = document.createElement("img");
    imageElement.className = "coverImage";
    imageElement.src = item.imageSrc;

    const titleElement = document.createElement("p");
    titleElement.className = "graphic-title";
    titleElement.textContent = item.graphicTitle;

    const skillElement = document.createElement("p");
    skillElement.className = "graphic-skill";
    skillElement.textContent = item.graphicSkill;

    linkElement.appendChild(imageElement);
    eachBoxElement.appendChild(linkElement);
    colElement.appendChild(companyElement);
    colElement.appendChild(eachBoxElement);
    colElement.appendChild(titleElement);
    colElement.appendChild(skillElement);

    rowContainer.appendChild(colElement); // Append the column to the current row container
  });
}

// Fetch the JSON data from the external file for interactive
fetch("json/techProject.json")
  .then((response) => response.json())
  .then((data) => {
    // Call the function to populate the content for interactive
    populateGraphics(data, "gif_group_1.interactive");
  })
  .catch((error) => {
    console.error("Error fetching JSON data for interactive:", error);
  });

// Fetch the JSON data from the external file for info
fetch("json/socialProject.json")
  .then((response) => response.json())
  .then((data) => {
    // Call the function to populate the content for info
    populateGraphics(data, "gif_group_1.info");
  })
  .catch((error) => {
    console.error("Error fetching JSON data for info:", error);
  });

// Fetch the JSON data from the external file for video
fetch("json/politicsProject.json")
  .then((response) => response.json())
  .then((data) => {
    // Call the function to populate the content for video
    populateGraphics(data, "gif_group_1.video");
  })
  .catch((error) => {
    console.error("Error fetching JSON data for video:", error);
  });
