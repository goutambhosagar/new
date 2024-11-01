// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetID = this.getAttribute('href');
      const targetSection = document.querySelector(targetID);
  
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
  
      // Add fade-in effect for target section
      targetSection.style.opacity = 0;
      setTimeout(() => {
        targetSection.style.opacity = 1;
      }, 300);
    });
  });
  
  // Add fade-in effect when page loads or scrolls
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = 0;
      setTimeout(() => {
        section.style.opacity = 1;
      }, 300);
    });
  });
  