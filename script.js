// JavaScript for Uttarakhand Tourism Website

document.addEventListener("DOMContentLoaded", () => {
    // Toggle navigation menu for mobile
    const navToggle = document.createElement("button");
    navToggle.textContent = "Menu";
    navToggle.classList.add("nav-toggle");
    const navMenu = document.querySelector("nav ul");
    navMenu.parentElement.insertBefore(navToggle, navMenu);
  
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  
    // Smooth scrolling for navigation links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Scroll-to-top button
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.classList.add("scroll-to-top");
    scrollToTopBtn.innerHTML = "↑";
    document.body.appendChild(scrollToTopBtn);
  
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollToTopBtn.classList.add("visible");
      } else {
        scrollToTopBtn.classList.remove("visible");
      }
    });
  
    // Dynamic destination cards addition (optional)
    const addDestinationCard = (title, description, imageUrl) => {
      const destinationGrid = document.querySelector(".destination-grid");
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${imageUrl}" alt="${title}">
        <h3>${title}</h3>
        <p>${description}</p>
      `;
      destinationGrid.appendChild(card);
    };
  
    // Example of dynamically adding a destination card
    addDestinationCard(
      "Nainital",
      "A beautiful hill station surrounded by mountains.",
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Nainital_Lake_view.jpg"
    );
  });
  
