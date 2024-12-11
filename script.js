function showOffer() {
    alert("Use code THUNDER10 for 10% off your first purchase!");
  }
  
  let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");
  
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === currentIndex) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}


document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentIndex);
});

  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const messageDiv = document.getElementById("form-message");
  
    form.addEventListener("submit", e => {
      e.preventDefault();
      messageDiv.textContent = "Thank you for your message! We'll get back to you soon.";
      form.reset();
    });
  });
  