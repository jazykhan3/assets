function toggleMobileMenu() {
  // Select the dialog container by ID
  var mobileMenu = document.getElementById("mobileMenu");
  console.log("mobileMenu");
  // Toggle the 'hidden' class to show/hide the mobile menu
  mobileMenu.classList.toggle("hidden");
}
document.addEventListener("DOMContentLoaded", function () {
  // Get all anchor tags inside the menu container
  var navLinks = document.querySelectorAll("#menu-container a");

  // Add a click event listener to each navigation link
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Prevent the default link behavior (e.g., page reload)
      event.preventDefault();

      // Get the target section's ID from the href attribute
      var targetId = link.getAttribute("href").substring(1);

      // Scroll to the target section
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
      });

      // // If you want to close the mobile menu after clicking a link (optional)
      // var menuContainer = document.getElementById("menu-container");
      // menuContainer.classList.add("hidden");
    });
  });

  const playerButton = document.getElementById("player");
  const sponsorButton = document.getElementById("sponsor");
  playerButton.addEventListener("click", function () {
    if (playerButton.classList.contains("active")) {
      return;
    }
    // show item with id signup
    document.getElementById("signup-player").classList.toggle("hidden");
    document.getElementById("signup-sponsor").classList.toggle("hidden");

    playerButton.classList.toggle("active");
    sponsorButton.classList.toggle("active");
  });

  sponsorButton.addEventListener("click", function () {
    if (sponsorButton.classList.contains("active")) {
      return;
    }
    // show item with id signup
    document.getElementById("signup-player").classList.toggle("hidden");
    document.getElementById("signup-sponsor").classList.toggle("hidden");

    playerButton.classList.toggle("active");
    sponsorButton.classList.toggle("active");
  });
});
