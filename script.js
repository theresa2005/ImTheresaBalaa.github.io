document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const items = document.querySelectorAll(".event-item");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
  
    let currentIndex = 0; // Tracks the currently highlighted item
    const totalItems = items.length;
    const mColors = ["#00BAFF", "#00205B", "#FF0000"]; // BMW M Power Colors
    let colorIndex = 0;
  
    function updateCarousel() {
      // Loop through all items and position them relative to the current index
      items.forEach((item, index) => {
        // Calculate relative index based on currentIndex
        const relativeIndex = (index - currentIndex + totalItems) % totalItems;
  
        // Reset styles
        item.style.opacity = "0";
        item.style.transform = "translateX(600px) scale(0)";
        item.style.zIndex = "0";
        item.classList.remove("highlight");
  
        // Position items based on relative index
        if (relativeIndex === 0) {
          // Previous item (left side)
          item.style.transform = "translateX(-280px) scale(1)";
          item.style.opacity = "0.5";
          item.style.zIndex = "1";
        } else if (relativeIndex === 1) {
          // Highlighted current item
          item.style.transform = "translateX(0) scale(1.5)";
          item.style.opacity = "1";
          item.style.zIndex = "2";
          item.classList.add("highlight");
          item.style.setProperty("--pulse-color", mColors[colorIndex]); // Update pulse color
        } else if (relativeIndex === 2) {
          // Next item (right side)
          item.style.transform = "translateX(280px) scale(1)";
          item.style.opacity = "0.5";
          item.style.zIndex = "1";
        }
      });
    }
  
    // Event Listeners for Navigation Buttons
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Move backward
      colorIndex = (colorIndex - 1 + mColors.length) % mColors.length;
      updateCarousel();
    });
  
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalItems; // Move forward
      colorIndex = (colorIndex + 1) % mColors.length;
      updateCarousel();
    });
  
    // Initialize the carousel
    updateCarousel();
  });
// Mobile Menu Toggle
const burgerIcon = document.getElementById("burger-icon");
const mobileMenu = document.getElementById("mobile-menu");

if (burgerIcon && mobileMenu) {
  burgerIcon.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
}

// Burger Menu Toggle
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Animated Section Visibility on Scroll
document.addEventListener("DOMContentLoaded", function () {
  const animatedSections = document.querySelectorAll(".animated-section");

  function checkVisibility() {
    animatedSections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        section.classList.add("in-view");
      } else {
        section.classList.remove("in-view");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Initial check
});