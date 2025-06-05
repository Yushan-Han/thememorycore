document.addEventListener('DOMContentLoaded', function() {
  const helloImg = document.getElementById('hello-img');
  const worldChangeImg = document.getElementById('world-change-img');
  const section = document.getElementById('section');
  
  let lastScrollY = 0;
  let passedWorldChange = false;
  let passedSection = false;

  if (!helloImg || !worldChangeImg || !section) return;

  window.addEventListener('scroll', function() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const worldChangePos = worldChangeImg.getBoundingClientRect().top + scrollY;
    const sectionPos = section.getBoundingClientRect().top + scrollY;
    const isScrollingDown = scrollY > lastScrollY;
    
    if (isScrollingDown) {
      if (scrollY >= worldChangePos - 10) {
        helloImg.classList.add('not-sticky');
        worldChangeImg.style.display = 'block';
        passedWorldChange = true;
      }
      if (scrollY >= sectionPos) {
        worldChangeImg.classList.add('not-sticky');
        passedSection = true;
      }
    } 
    else {
      if (scrollY < worldChangePos - 10 && passedWorldChange) {
        helloImg.classList.remove('not-sticky');
        passedWorldChange = false;
      }
      if (scrollY < sectionPos && passedSection) {
        worldChangeImg.classList.remove('not-sticky');
        passedSection = false;
      }
    }
    
    lastScrollY = scrollY;
  });
  
  window.dispatchEvent(new Event('scroll'));
});