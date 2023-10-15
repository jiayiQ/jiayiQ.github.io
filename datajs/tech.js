// Function to populate the HTML content
function populateTech(data, containerClass) {
  const container = document.querySelector(`.${containerClass}`);

  data.forEach((item) => {
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

    container.appendChild(colElement);
  });
}

// Fetch the JSON data from the external file for interactive
fetch("json/techProject.json")
  .then((response) => response.json())
  .then((data) => {
    // Call the function to populate the content for interactive
    populateTech(data, "gif_group_1.interactive");
  })
  .catch((error) => {
    console.error("Error fetching JSON data for interactive:", error);
  });

// Fetch the JSON data from the external file for info
fetch("json/techProject.json")
  .then((response) => response.json())
  .then((data) => {
    // Call the function to populate the content for info
    populateTech(data, "gif_group_1.info");
  })
  .catch((error) => {
    console.error("Error fetching JSON data for info:", error);
  });

// Fetch the JSON data from the external file for video
fetch("json/techProject.json")
  .then((response) => response.json())
  .then((data) => {
    // Call the function to populate the content for video
    populateTech(data, "gif_group_1.video");
  })
  .catch((error) => {
    console.error("Error fetching JSON data for video:", error);
  });
