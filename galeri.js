// GALERI PESANTREN JAVASCRIPT (Filtering & Lightbox Popup)
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.gb-card');
  const loadMoreBtn = document.getElementById('loadMoreBtn');

  // Lightbox elements
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentImageArray = [];
  let currentIndex = 0;

  // 1. Filtering Logic
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        if (filterValue === 'semua' || cat === filterValue) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 2. Collect images for Lightbox
  function updateImageArray() {
    currentImageArray = [];
    document.querySelectorAll('.gb-card:not(.hidden) .gb-card-img, .gfc-hero-img img, .gfc-thumb img').forEach(img => {
      currentImageArray.push(img.src);
    });
  }

  // Open Lightbox
  function openLightbox(src) {
    updateImageArray();
    currentIndex = currentImageArray.indexOf(src);
    if (currentIndex === -1) currentIndex = 0;
    lightboxImg.src = currentImageArray[currentIndex];
    lightbox.classList.add('active');
  }

  // Click handler for bento grid cards & featured showcase
  document.querySelectorAll('.gb-card, .gfc-hero-img, .gfc-thumb, .gfc-more-box').forEach(el => {
    el.addEventListener('click', (e) => {
      const img = el.querySelector('img');
      if (img) {
        openLightbox(img.src);
      }
    });
  });

  // Close Lightbox
  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }

  // Previous / Next Nav
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentImageArray.length === 0) return;
      currentIndex = (currentIndex - 1 + currentImageArray.length) % currentImageArray.length;
      lightboxImg.src = currentImageArray[currentIndex];
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentImageArray.length === 0) return;
      currentIndex = (currentIndex + 1) % currentImageArray.length;
      lightboxImg.src = currentImageArray[currentIndex];
    });
  }

  // Keyboard Escape & Arrow Navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') {
      lightbox.classList.remove('active');
    } else if (e.key === 'ArrowLeft') {
      lightboxPrev.click();
    } else if (e.key === 'ArrowRight') {
      lightboxNext.click();
    }
  });

  // Load More Mock Interaction
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      loadMoreBtn.innerHTML = '<i class="fas fa-check"></i> Seluruh Foto Ditampilkan';
      loadMoreBtn.style.opacity = '0.7';
      loadMoreBtn.disabled = true;
    });
  }
});
