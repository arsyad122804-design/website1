// ===========================
// SAMBUTAN PLAYLIST
// ===========================
(function () {
  const items = document.querySelectorAll('.slist-item');
  const mainImg = document.querySelector('.sambutan-main .vid-wrap img');
  const topLabel = document.querySelector('.vid-top-label');

  const data = [
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80', label: 'Sambutan Gubernur Jawa Tengah ▶' },
    { src: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=700&q=80', label: 'Sambutan Ust. Yusuf Mansur ▶' },
    { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=700&q=80', label: 'Sambutan Dr. (H.C.) Ary Ginanjar Agustian ▶' },
    { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&q=80', label: 'Sambutan Prof. Dr. Muhammad Zuhdi ▶' },
    { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=700&q=80', label: 'Sambutan Ust. Hanan Attaki, Lc. ▶' },
  ];

  items.forEach((item, i) => {
    item.addEventListener('click', () => {
      items.forEach(it => it.classList.remove('active'));
      item.classList.add('active');
      if (mainImg) mainImg.src = data[i].src;
      if (topLabel) topLabel.textContent = data[i].label;
    });
  });
})();


// ===========================
// COUNTDOWN TIMER
// ===========================
(function() {
  // Set target to roughly 1 month from now for demo
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);
  const targetTime = targetDate.getTime();
  
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');
  
  if(!daysEl) return;
  
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetTime - now;
    
    if (distance < 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    daysEl.textContent = days.toString().padStart(2, '0');
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minsEl.textContent = minutes.toString().padStart(2, '0');
    secsEl.textContent = seconds.toString().padStart(2, '0');
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
