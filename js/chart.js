document.addEventListener('DOMContentLoaded', function() {
  const comment1 = document.querySelector('.comment1');
  const comment2 = document.querySelector('.comment2');
  const chartContainer = document.querySelector('.chart-container');
  
  comment1.classList.add('hidden');
  comment2.classList.add('hidden');
  
  let currentComment = 0;
  
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
  
  function showComment(commentNum) {
    comment1.classList.add('hidden');
    comment2.classList.add('hidden');
    comment1.style.opacity = '0';
    comment2.style.opacity = '0';
    
    if (commentNum >= 1) {
      comment1.classList.remove('hidden');
      setTimeout(() => {
        comment1.style.opacity = '1';
      }, 10);
    }
    
    if (commentNum >= 2) {
      comment2.classList.remove('hidden');
      setTimeout(() => {
        comment2.style.opacity = '1';
      }, 10);
    }
    
    currentComment = commentNum;
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
    
    if (!chartContainer || !isElementInViewport(chartContainer)) {
      return;
    }
    if (scrollDirection === 'down') {
      if (currentComment === 0) {
        showComment(1);
      } else if (currentComment === 1) {
        showComment(2);
      }
    } else {
      if (currentComment === 2) {
        showComment(1);
      } else if (currentComment === 1) {
        showComment(0); 
      }
    }
  });
});