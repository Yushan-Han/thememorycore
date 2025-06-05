document.addEventListener('DOMContentLoaded', function() {
  const scrollTrigger = document.getElementById('scroll-trigger');
  const receivingSection = document.getElementById('receiving-section');
  
  if (scrollTrigger && receivingSection) {
    scrollTrigger.addEventListener('click', function() {
      const targetPosition = receivingSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  }
});