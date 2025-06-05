document.addEventListener('DOMContentLoaded', function() {
  const yearBtns = document.querySelectorAll('.year-btn');
  const yearDatas = document.querySelectorAll('.year-data');
  const dotContainers = document.querySelectorAll('.year-2020-dots, .year-2030-dots, .year-2040-dots, .year-2050-dots, .year-2060-dots');
  
  if (yearBtns.length > 0) {
    yearBtns[0].classList.add('selected');
    document.querySelector('.year-2020').classList.remove('hidden');
    document.querySelector('.year-2020-dots').classList.remove('hidden');
  }
  
  yearBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const yearId = this.id;
      const yearNum = yearId.split('-')[1];
      
      yearDatas.forEach(data => {
        data.classList.add('hidden');
      });
      dotContainers.forEach(container => {
        container.classList.add('hidden');
      });

      const targetData = document.querySelector(`.year-${yearNum}`);
      const targetDots = document.querySelector(`.year-${yearNum}-dots`);
      
      if (targetData) {
        targetData.classList.remove('hidden');
      }
      if (targetDots) {
        targetDots.classList.remove('hidden');
      }
      setSelectedButton(this);
    });
  });
  
  function setSelectedButton(selectedBtn) {
    yearBtns.forEach(btn => {
      btn.classList.remove('selected');
    });
    selectedBtn.classList.add('selected');
  }
});