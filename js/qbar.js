document.addEventListener('DOMContentLoaded', function() {
  const qbar1 = document.getElementById('qbar1');
  const qbar2 = document.getElementById('qbar2');
  const chartArea = document.querySelector('.chart-area');
  
  qbar2.classList.add('hidden');
  qbar2.style.opacity = '0';
  qbar1.style.opacity = '1';
  
  let currentChart = 0; 
  
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
  
  function showChart(chartIndex) {
    qbar1.classList.add('hidden');
    qbar2.classList.add('hidden');
    qbar1.style.opacity = '0';
    qbar2.style.opacity = '0';
    
    if (chartIndex === 0) {
      qbar1.classList.remove('hidden');
      setTimeout(() => {
        qbar1.style.opacity = '1';
      }, 10);
    } else if (chartIndex === 1) {
      qbar2.classList.remove('hidden');
      setTimeout(() => {
        qbar2.style.opacity = '1';
      }, 10);
    }
    
    currentChart = chartIndex;
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
    
    if (!chartArea || !isElementInViewport(chartArea)) {
      return;
    }
    if (scrollDirection === 'down') {
      if (currentChart < 1) {
        showChart(currentChart + 1);
      }
    } else {
      if (currentChart > 0) {
        showChart(currentChart - 1);
      }
    }
  });
});