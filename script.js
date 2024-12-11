// Special Offer Popup
function showOffer() {
    alert("Use code THUNDER10 for 10% off your first purchase!");
  }
  
  // Carousel Functionality
  let currentIndex = 0;
  
  function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-item");
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }
  
  function nextSlide() {
    const slides = document.querySelectorAll(".carousel-item");
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
  
  function prevSlide() {
    const slides = document.querySelectorAll(".carousel-item");
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }
  
  // Form Validation
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const messageDiv = document.getElementById("form-message");
  
    form.addEventListener("submit", e => {
      e.preventDefault(); // Prevent form submission
      messageDiv.textContent = "Thank you for your message! We'll get back to you soon.";
      form.reset();
    });
  });
  