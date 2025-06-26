// Toggle dark mode
const toggle = document.createElement('button');
toggle.textContent = 'Toggle Dark Mode';
toggle.style.margin = '10px';
document.body.prepend(toggle);

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
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
