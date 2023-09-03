// Fetch the JSON data
fetch("portfolioData.json")
  .then((response) => response.json())
  .then((data) => {
    const cardContainer = document.getElementById("card-container");
    let row; // Initialize a variable to track the current row

    // Loop through the JSON data and create card elements
    data.forEach((item, index) => {
      if (index % 3 === 0) {
        // Create a new row for every three cards
        row = document.createElement("div");
        row.className = "row";
      }

      const col = document.createElement("div");
      col.className = "col-md-4";

      const card = document.createElement("div");
      card.className = "card";

      const cardLink = document.createElement("a");
      cardLink.href = item.link;
      cardLink.target = "_blank";

      const cardDiv = document.createElement("div");
      cardDiv.className = "card-body";

      const badge = document.createElement("small");
      badge.className = "text-muted";

      const badgeSpan = document.createElement("span");
      badgeSpan.className = "badge badge-pill badge-color";
      badgeSpan.textContent = item.source;
      badge.appendChild(badgeSpan);

      const cardImage = document.createElement("img");
      cardImage.className = "card-img-top";
      cardImage.src = item.image;
      cardImage.alt = item.title;

      const cardTitle = document.createElement("h2");
      cardTitle.className = "card-title";
      cardTitle.textContent = item.title;

      const cardText = document.createElement("p");
      cardText.className = "card-text";
      cardText.textContent = item.description;

      // Append elements to the card
      cardDiv.appendChild(badge);
      cardDiv.appendChild(cardImage);
      cardDiv.appendChild(cardTitle);
      cardDiv.appendChild(cardText);

      cardLink.appendChild(cardDiv);
      card.appendChild(cardLink);

      col.appendChild(card); // Add the card to the column
      row.appendChild(col); // Add the column to the row

      if ((index + 1) % 3 === 0 || index === data.length - 1) {
        // Add the row to the container for every three cards or the last row
        cardContainer.appendChild(row);
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });
