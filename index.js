document.addEventListener("DOMContentLoaded", function () {
  // Event listener for fetching data
  document.getElementById("fetch-data").addEventListener("click", fetchData);

  // Event listener for like button
  document.getElementById("like-button").addEventListener("click", like);

  // Event listener for adding a comment
  document
    .getElementById("comment-button")
    .addEventListener("click", addComment);

  // API endpoint for pet data
  const apiEndpoint = "https://publicapis.io/rescue-groups-animals-api";

  // Fetch data from the API
  fetch(apiEndpoint)
    .then((response) => response.json())
    .then((data) => {
      // Call a function to render the pet images
      renderPetImages(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  // Function to render pet images
  function renderPetImages(pets) {
    const petImagesContainer = document.querySelector(".pet-images");

    pets.forEach((pet) => {
      const petElement = document.createElement("div");
      petElement.classList.add("pet");

      const imgElement = document.createElement("img");
      imgElement.src = pet.image;
      imgElement.alt = pet.name;

      const pElement = document.createElement("p");
      pElement.textContent = `${pet.name} - ${pet.breed}`;

      petElement.appendChild(imgElement);
      petElement.appendChild(pElement);

      petImagesContainer.appendChild(petElement);
    });
  }
});

// Hardcoded data for Senssy
const senssyData = {
  name: "Senssy",
  location: "Kenya",
  age: "2 years",
  sex: "Male",
  height: "42cm",
  weight: "5.4kg",
  description:
    "With a coat as soft as silk and eyes that sparkle with curiosity, Senssy is a charming cat looking for a family to call his own. His gentle purrs will surely melt your heart. Consider giving Senssy a loving home filled with treats and cuddles!",
};

document.addEventListener("DOMContentLoaded", function () {
  // Update the page content with Senssy's information
  document.querySelector(
    ".title"
  ).textContent = `I Enjoy Treats and Cuddling - Meet ${senssyData.name}`;
  document.querySelector("img").alt = `${senssyData.name} the Cat`;
  document.querySelector(
    ".location"
  ).textContent = `Location: ${senssyData.location}`;

  // Update buttons
  document.querySelectorAll(
    ".buttons button"
  )[0].textContent = `Age: ${senssyData.age}`;
  document.querySelectorAll(
    ".buttons button"
  )[1].textContent = `Sex: ${senssyData.sex}`;
  document.querySelectorAll(
    ".buttons button"
  )[2].textContent = `Height: ${senssyData.height}`;
  document.querySelectorAll(
    ".buttons button"
  )[3].textContent = `Weight: ${senssyData.weight}`;

  // Update about section
  const aboutSection = document.querySelector(".about-section");
  aboutSection.querySelector("h2").textContent = `About ${senssyData.name}`;

  const paragraphs = senssyData.description.split("\n");
  paragraphs.forEach((paragraphText) => {
    const pElement = document.createElement("p");
    pElement.textContent = paragraphText;
    aboutSection.appendChild(pElement);
  });
});

// Function to handle the adoption of Senssy
function adoptSenssy() {
  // Simulate an asynchronous process
  simulateAdoptionProcess()
    .then(() => {
      // Adoption successful
      alert(
        "Adoption request for Senssy sent successfully! Thank you for your interest."
      );
    })
    .catch((error) => {
      // Adoption failed
      console.error("Error in adoption process:", error);
      alert(
        "Sorry, there was an error processing your adoption request. Please try again later."
      );
    });
}

// Simulate an asynchronous adoption process (replace with actual backend interaction)
function simulateAdoptionProcess() {
  return new Promise((resolve, reject) => {
    // Simulate a successful adoption
    const success = Math.random() < 0.8; // 80% success rate
    if (success) {
      resolve();
    } else {
      reject("Simulated adoption failure. Please try again.");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Select the elements
  const searchIcon = document.querySelector(".search-icon");
  const searchInput = document.querySelector(".search-input");
  const toggleMenuIcon = document.querySelector(".clickable-icon");

  // Add event listeners
  searchIcon.addEventListener("click", activateSearch);
  toggleMenuIcon.addEventListener("click", toggleMenu);

  // You can also add an event listener for the search input if needed
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // Perform some action when Enter is pressed in the search input
      console.log("Search input entered:", searchInput.value);
    }
  });
});

function activateSearch() {
  // Define the behavior for activating search
  console.log("Search activated!");
}

function toggleMenu() {
  // Define the behavior for toggling the menu
  console.log("Menu toggled!");
}
