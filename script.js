// Toggle dark mode
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Change icon based on theme
  const isDark = document.body.classList.contains('dark');
  themeToggle.src = isDark ? 'sun.png' : 'moon.png';
});


// Fade-in on scroll using Intersection Observer
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Trigger only once
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});

const typingElement = document.getElementById('typing-text');

const texts = ["Thabang", "a Software Developer", "an Innovator", "a Problem Solver"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 100;

function type() {
  const currentText = texts[textIndex];
  const visibleText = currentText.substring(0, charIndex);
  typingElement.textContent = visibleText;

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    speed = 1000; // pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    speed = 300; // pause before next word
  } else {
    speed = isDeleting ? 50 : 100;
  }

  setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", type);

