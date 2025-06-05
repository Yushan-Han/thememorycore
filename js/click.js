document.addEventListener('DOMContentLoaded', function() {
  const overlayImages = [
    document.getElementById('img-1'),
    document.getElementById('img-2'),
    document.getElementById('img-3')
  ];
  const overlayContainer = document.querySelector('.overlay-images-container');
  
  overlayImages.forEach((img, index) => {
    if (index > 0) img.classList.add('hidden');
    img.style.opacity = '0';
  });
  overlayImages[0].classList.remove('hidden');
  setTimeout(() => {
    overlayImages[0].style.opacity = '1';
  }, 10);
  
  let currentImageIndex = 0;
  let lastScrollY = window.scrollY;
  let lastScrollTime = 0;
  const scrollInterval = 400;
  
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  function showImage(index) {
    overlayImages.forEach(img => {
      img.classList.add('hidden');
      img.style.opacity = '0';
    });
    
    for (let i = 0; i <= index; i++) {
      overlayImages[i].classList.remove('hidden');
      setTimeout(() => {
        overlayImages[i].style.opacity = '1';
      }, 10);
    }
    
    currentImageIndex = index;
  }
  
  window.addEventListener('scroll', function() {
    const now = Date.now();
    const scrollY = window.scrollY;
    const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
    
    if (now - lastScrollTime < scrollInterval) {
      return;
    }
    
    lastScrollTime = now;
    lastScrollY = scrollY;
    
    if (!overlayContainer || !isElementInViewport(overlayContainer)) {
      return;
    }
    if (scrollDirection === 'down') {
      if (currentImageIndex < overlayImages.length - 1) {
        showImage(currentImageIndex + 1);
      }
    } else {
      if (currentImageIndex > 0) {
        showImage(currentImageIndex - 1);
      }
    }
  });
});