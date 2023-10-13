// Function to populate the HTML content
function populateGraphics(data) {
  const container = document.querySelector(".gif_group_1.interactive .row");

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

// Fetch the JSON data from the external file
fetch("json/portfolioData.json")
  .then((response) => response.json())
  .then((data) => {
    // Call the function to populate the content
    populateGraphics(data);
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });
