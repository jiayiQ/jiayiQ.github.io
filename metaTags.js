fetch("metaTags.json") // Replace with the correct JSON file path
  .then((response) => response.json())
  .then((data) => {
    // Update the meta tags with data from JSON
    document.title = data.title;
    document.querySelector('meta[name="description"]').content =
      data.description;
    document.querySelector('meta[name="keywords"]').content = data.keywords;
    document.querySelector('meta[name="twitter:image:src"]').content =
      data.twitterImageSrc;
    document.querySelector('meta[property="og:image"]').content = data.ogImage;
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });
