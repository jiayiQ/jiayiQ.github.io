// Fetch the JSON data
fetch("personalData.json") // Replace with the correct JSON file path
  .then((response) => response.json())
  .then((data) => {
    const jumbotronData = document.getElementById("jumbotron-data");

    const h1 = document.createElement("h1");
    h1.className = "display-4";

    const name = document.createElement("span");
    name.id = "thick-text";
    name.textContent = data.name;

    const title = document.createElement("span");
    title.id = "thick-text";
    title.textContent = data.title;

    h1.appendChild(name);

    const pTitle = document.createElement("p");
    pTitle.className = "title";
    pTitle.textContent = data.title;

    const pIntro = document.createElement("p");
    pIntro.className = "intro";
    pIntro.textContent = data.intro;

    const portfolioLink = document.createElement("a");
    portfolioLink.href = data.portfolioLink;
    //portfolioLink.textContent =
      "Scroll down to see my selected work or click here";

    pIntro.appendChild(document.createElement("br"));
    pIntro.appendChild(portfolioLink);

    const socialIcons = document.createElement("div");
    socialIcons.className = "social-icons";

    data.socialIcons.forEach((iconData) => {
      const iconLink = document.createElement("a");
      iconLink.href = iconData.link;
      const icon = document.createElement("i");
      icon.className = iconData.iconClass;
      iconLink.appendChild(icon);
      socialIcons.appendChild(iconLink);
    });

    jumbotronData.appendChild(h1);
    jumbotronData.appendChild(pTitle);
    jumbotronData.appendChild(pIntro);
    jumbotronData.appendChild(socialIcons);
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });
