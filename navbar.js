document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('card-nav-root');
  if (!root) return;

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
    <div class="card-nav">
      <a href="index.html" class="card-nav-logo">
        <img src="Logo only.png" alt="Logo">
        <span>Hibatullah IIBS</span>
      </a>

      <div class="card-nav-items" id="cardNavItems">
        <div class="card-nav-indicator" id="cardNavIndicator"></div>

        <a href="index.html" class="card-nav-item">
          Beranda
        </a>

        <div class="card-nav-item-wrapper">
          <div class="card-nav-item">
            Hibatullah IIBS <i class="fas fa-chevron-down"></i>
          </div>
          <div class="card-nav-dropdown">
            <a href="program-unggulan-sdih.html" class="dropdown-link">Program Unggulan</a>
            <a href="karakter-siswa-sdih.html" class="dropdown-link">Karakter Siswa</a>
            <a href="standar-kompetensi-lulusan.html" class="dropdown-link">Standar Kompetensi Lulusan</a>
          </div>
        </div>

        <div class="card-nav-item-wrapper">
          <div class="card-nav-item">
            History <i class="fas fa-chevron-down"></i>
          </div>
          <div class="card-nav-dropdown">
            <a href="sejarah.html" class="dropdown-link">Sejarah Sekolah</a>
            <a href="penasehat.html" class="dropdown-link">Dewan Penasehat</a>
            <a href="stakeholders.html" class="dropdown-link">Stakeholders</a>
          </div>
        </div>

        <div class="card-nav-item-wrapper">
          <div class="card-nav-item">
            Santri Hebat <i class="fas fa-chevron-down"></i>
          </div>
          <div class="card-nav-dropdown">
            <a href="program.html" class="dropdown-link">Program</a>
            <a href="asrama.html" class="dropdown-link">Fasilitas Asrama</a>
            <a href="sekolah.html" class="dropdown-link">Fasilitas Sekolah</a>
            <a href="regulasi-harian.html" class="dropdown-link">Regulasi Harian</a>
            <a href="prestasi-santri.html" class="dropdown-link">Prestasi Santri</a>
            <a href="rapot-santri.html" class="dropdown-link">Rapot Santri</a>
          </div>
        </div>

        <a href="ppdb.html" class="card-nav-item">
          PPDB
        </a>

        <a href="galeri.html" class="card-nav-item">
          Galeri
        </a>
      </div>

      <a href="https://ppdb.hibatullah.sch.id/formulir" target="_blank" class="card-nav-cta">
        DAFTAR SEKARANG
      </a>

      <button class="card-nav-mobile-btn" id="mobileNavToggle">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  `;

  root.innerHTML = navHTML;

  // Interaction Logic for Sliding Indicator
  const items = document.querySelectorAll('.card-nav-item');
  const indicator = document.getElementById('cardNavIndicator');
  const navContainer = document.getElementById('cardNavItems');

  let activeItem = null;

  function moveIndicator(el) {
    const rect = el.getBoundingClientRect();
    const containerRect = navContainer.getBoundingClientRect();
    
    indicator.style.width = el.offsetWidth + 'px';
    indicator.style.transform = `translateX(${rect.left - containerRect.left}px)`;
    indicator.style.opacity = '1';
  }

  function hideIndicator() {
    if (activeItem) {
      moveIndicator(activeItem);
    } else {
      indicator.style.opacity = '0';
    }
  }

  // Determine active item based on current URL
  items.forEach(item => {
    // Basic active state matching
    if (item.tagName === 'A' && item.getAttribute('href') === currentPath) {
      item.classList.add('active');
      activeItem = item;
    }
    // Also check dropdowns
    if (item.nextElementSibling && item.nextElementSibling.classList.contains('card-nav-dropdown')) {
      const links = item.nextElementSibling.querySelectorAll('a');
      links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
          item.classList.add('active');
          activeItem = item;
        }
      });
    }

    item.addEventListener('mouseenter', (e) => {
      moveIndicator(e.target);
    });
  });

  navContainer.addEventListener('mouseleave', () => {
    hideIndicator();
  });

  // Initial indicator position with slight delay to ensure render
  setTimeout(() => {
    if (activeItem) {
      indicator.style.transition = 'none';
      moveIndicator(activeItem);
      // restore transition
      setTimeout(() => indicator.style.transition = 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)', 50);
    }
  }, 100);

  // Dropdown Click/Tap Toggle Logic (For mobile/touch screen support and click preference)
  const wrappers = document.querySelectorAll('.card-nav-item-wrapper');
  wrappers.forEach(wrapper => {
    const trigger = wrapper.querySelector('.card-nav-item');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Close all other dropdowns
        wrappers.forEach(w => {
          if (w !== wrapper) {
            w.classList.remove('open');
          }
        });
        
        // Toggle the clicked dropdown
        wrapper.classList.toggle('open');
      });
    }
  });

  // Close dropdowns if clicking anywhere outside the menu
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.card-nav-item-wrapper')) {
      wrappers.forEach(w => w.classList.remove('open'));
    }
  });

  // Mobile Menu Logic
  const mobileToggle = document.getElementById('mobileNavToggle');
  if(mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const drawer = document.getElementById('mobileDrawer');
      const overlay = document.getElementById('mobileOverlay');
      if(drawer && overlay) {
        if(drawer.classList.contains('open')) {
          drawer.classList.remove('open');
          overlay.classList.remove('open');
          overlay.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        } else {
          drawer.classList.add('open');
          overlay.classList.add('open');
          overlay.setAttribute('aria-hidden', 'false');
          document.body.style.overflow = 'hidden';
        }
      }
    });
  }
});
