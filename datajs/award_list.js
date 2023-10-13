// Function to populate the HTML content
function populateAwards(data) {
  const awardsContainer = document.querySelector(".awards");

  data.forEach((category) => {
    const categoryElement = document.createElement("div");
    categoryElement.className = "award-category";

    const categoryTitleElement = document.createElement("p");
    categoryTitleElement.className = "award-title";
    categoryTitleElement.textContent = category.title;

    categoryElement.appendChild(categoryTitleElement);

    category.awards.forEach((award) => {
      const awardElement = document.createElement("p");
      awardElement.className = "eachAward";

      if (award.type.includes("Bronze")) {
        const bronzeIcon = document.createElement("span");
        bronzeIcon.className = "bronze";
        bronzeIcon.innerHTML =
          '<i class="fa fa-circle" aria-hidden="true"></i>';
        awardElement.appendChild(bronzeIcon);
      } else if (award.type.includes("Best of show")) {
        const bestIcon = document.createElement("span");
        bestIcon.className = "best";
        bestIcon.innerHTML = '<i class="fa fa-circle" aria-hidden="true"></i>';
        awardElement.appendChild(bestIcon);
      }

      const awardDetails = document.createTextNode(award.type);
      const yearAndProject = `${award.project} (${award.year})`;
      const awardProjectElement = document.createElement("span");
      awardProjectElement.className = "award-project";
      awardProjectElement.textContent = yearAndProject;

      awardElement.appendChild(awardDetails);
      awardElement.appendChild(awardProjectElement);

      categoryElement.appendChild(awardElement);
    });

    // Add spacing between title and awards
    const spacingElement = document.createElement("p");
    spacingElement.className = "spacing"; // You can create a new CSS class for spacing
    spacingElement.innerHTML = "&nbsp;"; // Add a non-breaking space for spacing

    categoryElement.appendChild(spacingElement);

    awardsContainer.appendChild(categoryElement);
  });
}

// Fetch the JSON data from the external file
fetch("json/awardsData.json")
  .then((response) => response.json())
  .then((data) => {
    // Call the function to populate the content
    populateAwards(data);
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });
