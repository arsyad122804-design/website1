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

        <a href="visi-misi-sdih.html" class="card-nav-item">
          Visi &amp; Misi
        </a>

        <div class="card-nav-item-wrapper">
          <div class="card-nav-item">
            About <i class="fas fa-chevron-down"></i>
          </div>
          <div class="card-nav-dropdown">
            <a href="sejarah.html" class="dropdown-link">Sejarah Sekolah</a>
            <a href="penasehat.html" class="dropdown-link">Dewan Penasehat</a>
            <a href="stakeholders.html" class="dropdown-link">Stakeholders</a>
          </div>
        </div>

        <div class="card-nav-item-wrapper">
          <div class="card-nav-item">
            Keunggulan <i class="fas fa-chevron-down"></i>
          </div>
          <div class="card-nav-dropdown">
            <a href="program-unggulan-sdih.html" class="dropdown-link">Program Unggulan</a>
            <a href="karakter-siswa-sdih.html" class="dropdown-link">Karakter Siswa</a>
            <a href="standar-kompetensi-lulusan.html" class="dropdown-link">Standar Kompetensi Lulusan</a>
            <a href="testimoni.html" class="dropdown-link">Testimoni</a>
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
            <a href="standar-kompetensi-lulusan.html" class="dropdown-link">Standar Kompetensi Lulusan</a>
          </div>
        </div>

        <a href="ppdb.html" class="card-nav-item">
          PPDB
        </a>

        <a href="galeri.html" class="card-nav-item">
          Galeri
        </a>

        <a href="berita.html" class="card-nav-item">
          Berita
        </a>

        <a href="media-sosial.html" class="card-nav-item">
          Media Sosial
        </a>

        <a href="faq.html" class="card-nav-item">
          FAQ
        </a>

        <div class="lang-switcher">
          <button class="lang-trigger" id="langTriggerBtn" aria-haspopup="true" aria-expanded="false" type="button">
            <img src="https://flagcdn.com/w40/id.png" id="currentLangFlag" alt="Bahasa">
            <i class="fas fa-chevron-down"></i>
          </button>
          <div class="lang-dropdown" id="langDropdownMenu">
            <button onclick="changeSiteLanguage('id')" class="lang-option" type="button">
              <img src="https://flagcdn.com/w40/id.png" alt="ID"> Indonesia
            </button>
            <button onclick="changeSiteLanguage('en')" class="lang-option" type="button">
              <img src="https://flagcdn.com/w40/gb.png" alt="EN"> English
            </button>
            <button onclick="changeSiteLanguage('ar')" class="lang-option" type="button">
              <img src="https://flagcdn.com/w40/sa.png" alt="AR"> العربية
            </button>
          </div>
        </div>
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

  // ----------------------------------------
  // Language Switcher Logic (Google Translate)
  // ----------------------------------------
  const langTrigger = document.getElementById('langTriggerBtn');
  const langSwitcher = document.querySelector('.lang-switcher');
  
  if (langTrigger && langSwitcher) {
    langTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      langSwitcher.classList.toggle('open');
    });
    
    // Close on click outside
    document.addEventListener('click', () => {
      langSwitcher.classList.remove('open');
    });
  }

  // Load Google Translate Element
  function loadGoogleTranslate() {
    if (document.getElementById('google_translate_script')) {
      initActiveFlags();
      return;
    }
    
    const div = document.createElement('div');
    div.id = 'google_translate_element';
    div.style.display = 'none';
    document.body.appendChild(div);
    
    window.googleTranslateElementInit = function() {
      new google.translate.TranslateElement({
        pageLanguage: 'id',
        includedLanguages: 'id,en,ar',
        autoDisplay: false
      }, 'google_translate_element');
      
      // Wait for translate combobox to render, then sync states
      const checkInterval = setInterval(() => {
        const select = document.querySelector('.goog-te-combo');
        if (select) {
          clearInterval(checkInterval);
          initActiveFlags();
        }
      }, 200);
    };
    
    const s = document.createElement('script');
    s.id = 'google_translate_script';
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(s);
  }

  // Helper to completely clear Google Translate cookies
  function clearGoogTransCookies() {
    const expires = 'Thu, 01 Jan 1970 00:00:00 UTC';
    const path = '/';
    const host = window.location.hostname;
    document.cookie = `googtrans=; expires=${expires}; path=${path};`;
    document.cookie = `googtrans=; expires=${expires}; path=${path}; domain=${host};`;
    document.cookie = `googtrans=; expires=${expires}; path=${path}; domain=.${host};`;
    const hostParts = host.split('.');
    if (hostParts.length > 1) {
      const mainDomain = hostParts.slice(-2).join('.');
      document.cookie = `googtrans=; expires=${expires}; path=${path}; domain=.${mainDomain};`;
    }
  }

  // Hero Banner & Key Elements Multi-Language Dictionary
  const heroTranslations = {
    id: {
      tag: 'SELAMAT DATANG DI',
      title: 'Pondok Islamic<br>Hibatullah<br>Internasional',
      more: 'Lihat Galeri <i class="fas fa-arrow-right"></i>'
    },
    en: {
      tag: 'WELCOME TO',
      title: 'Hibatullah<br>International<br>Islamic Boarding<br>School',
      more: 'More Galleries <i class="fas fa-arrow-right"></i>'
    },
    ar: {
      tag: 'أهلاً وسهلاً بكم في',
      title: 'معهد هبة الله<br>الإسلامي<br>الدولي',
      more: 'المزيد من المعرض <i class="fas fa-arrow-left"></i>'
    }
  };

  function updateHeroText(langCode) {
    const welcomeTag = document.querySelector('.thursina-welcome-tag');
    const mainTitle = document.querySelector('.thursina-main-title');
    const moreBtn = document.querySelector('.hgs-more-btn');
    const t = heroTranslations[langCode] || heroTranslations['id'];
    if (welcomeTag) welcomeTag.innerHTML = t.tag;
    if (mainTitle) mainTitle.innerHTML = t.title;
    if (moreBtn) moreBtn.innerHTML = t.more;
  }

  // Define translation function globally
  window.changeSiteLanguage = function(langCode) {
    const previousLang = localStorage.getItem('site_lang') || 'id';
    localStorage.setItem('site_lang', langCode);

    if (langCode === 'id') {
      clearGoogTransCookies();
      document.documentElement.dir = 'ltr';
      document.documentElement.removeAttribute('dir');
      document.documentElement.classList.remove('translated-rtl', 'translated-ltr');
      if (document.body) {
        document.body.classList.remove('translated-rtl', 'translated-ltr');
      }
      
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = '';
        select.dispatchEvent(new Event('change'));
      }

      // If returning to Indonesian from another language, reload page to guarantee 100% clean DOM
      if (previousLang !== 'id' || document.cookie.includes('googtrans')) {
        window.location.reload();
        return;
      }
    } else {
      const cookieVal = `/id/${langCode}`;
      const host = window.location.hostname;
      document.cookie = `googtrans=${cookieVal}; path=/;`;
      document.cookie = `googtrans=${cookieVal}; path=/; domain=${host};`;
      document.cookie = `googtrans=${cookieVal}; path=/; domain=.${host};`;

      if (langCode === 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.removeAttribute('dir');
      }

      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event('change'));
      }

      // Reload if switching from/to Arabic or if select element not present
      if (previousLang !== langCode && (previousLang === 'ar' || langCode === 'ar' || !select)) {
        setTimeout(() => {
          window.location.reload();
        }, 150);
        return;
      }
    }

    updateHeroText(langCode);
    updateFlagUI(langCode);
  };

  function updateFlagUI(langCode) {
    const flagImg = document.getElementById('currentLangFlag');
    const headerFlag = document.getElementById('thursinaHeaderFlag');
    let src = 'https://flagcdn.com/w40/id.png';
    if (langCode === 'en') src = 'https://flagcdn.com/w40/gb.png';
    if (langCode === 'ar') src = 'https://flagcdn.com/w40/sa.png';

    if (flagImg) flagImg.src = src;
    if (headerFlag) headerFlag.src = src;
    
    // Update mobile button active class
    const mobileBtns = document.querySelectorAll('.mobile-lang-btn');
    mobileBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`.mobile-lang-btn.${langCode}-btn`);
    if (activeBtn) {
      activeBtn.classList.add('active');
    }
  }

  function initActiveFlags() {
    const savedLang = localStorage.getItem('site_lang');
    const match = document.cookie.match(/googtrans=\/id\/([a-z]{2})/);
    const activeLang = savedLang || (match ? match[1] : 'id');

    if (activeLang === 'id') {
      clearGoogTransCookies();
      document.documentElement.dir = 'ltr';
      document.documentElement.removeAttribute('dir');
      document.documentElement.classList.remove('translated-rtl', 'translated-ltr');
      if (document.body) {
        document.body.classList.remove('translated-rtl', 'translated-ltr');
      }
    } else if (activeLang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.removeAttribute('dir');
    }

    updateFlagUI(activeLang);
    updateHeroText(activeLang);
  }

  // Ensure hero text is synced as soon as DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initActiveFlags);
  } else {
    initActiveFlags();
  }

  // ----------------------------------------
  // Thursina Header Interaction Handlers
  // ----------------------------------------
  const thursinaLangWrapper = document.getElementById('thursinaLangWrapper');
  const thursinaLangBtn = document.getElementById('thursinaLangBtn');

  if (thursinaLangBtn && thursinaLangWrapper) {
    thursinaLangBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      thursinaLangWrapper.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!thursinaLangWrapper.contains(e.target)) {
        thursinaLangWrapper.classList.remove('active');
      }
    });
  }

  // Contact Link Scroll
  const contactLink = document.getElementById('thursinaContactLink');
  if (contactLink) {
    contactLink.addEventListener('click', (e) => {
      e.preventDefault();
      const footer = document.querySelector('.site-footer') || document.querySelector('.footer-new') || document.querySelector('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }




  // Thursina Mobile Toggle
  const thursinaMobileToggle = document.getElementById('thursinaMobileToggle');
  if (thursinaMobileToggle) {
    thursinaMobileToggle.addEventListener('click', () => {
      const drawer = document.getElementById('mobileDrawer');
      const overlay = document.getElementById('mobileOverlay');
      if (drawer && overlay) {
        drawer.classList.toggle('open');
        overlay.classList.toggle('open');
        document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
      }
    });
  }

  // Thursina Search Modal Logic
  const searchBtn = document.getElementById('thursinaSearchBtn');
  const searchModal = document.getElementById('thursinaSearchModal');
  const searchClose = document.getElementById('searchModalClose');
  const searchBackdrop = document.getElementById('searchModalBackdrop');
  const searchInput = document.getElementById('thursinaSearchInput');
  const searchResults = document.getElementById('searchResultsList');

  const siteSearchIndex = [
    { title: 'Penerimaan Santri Baru (PPDB)', category: 'Pendaftaran', url: 'ppdb.html' },
    { title: 'Program Unggulan', category: 'Pendidikan', url: 'program-unggulan-sdih.html' },
    { title: 'Sejarah Sekolah', category: 'About', url: 'sejarah.html' },
    { title: 'Dewan Penasehat', category: 'About', url: 'penasehat.html' },
    { title: 'Stakeholders & Mitra', category: 'About', url: 'stakeholders.html' },
    { title: 'Kurikulum & Sistem Pembelajaran', category: 'Education', url: 'kurikulum.html' },
    { title: 'Karakter Siswa & Tazkiyah', category: 'Education', url: 'karakter-siswa-sdih.html' },
    { title: 'Standar Kompetensi Lulusan (SKL)', category: 'Education', url: 'standar-kompetensi-lulusan.html' },
    { title: 'Testimoni Santri & Alumni', category: 'Alumni', url: 'testimoni.html' },
    { title: 'Fasilitas Asrama Santri', category: 'Fasilitas', url: 'asrama.html' },
    { title: 'Fasilitas Sekolah Modern', category: 'Fasilitas', url: 'sekolah.html' },
    { title: 'Regulasi Harian Santri', category: 'Kehidupan Santri', url: 'regulasi-harian.html' },
    { title: 'Prestasi Santri Hibatullah', category: 'Prestasi', url: 'prestasi-santri.html' },
    { title: 'Galeri Foto & Kebersamaan', category: 'Media', url: 'galeri.html' },
    { title: 'Berita & Artikel Pesantren', category: 'News', url: 'berita.html' }
  ];

  function openSearchModal() {
    if (!searchModal) return;
    searchModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (searchInput) {
      setTimeout(() => searchInput.focus(), 150);
    }
  }

  function closeSearchModal() {
    if (!searchModal) return;
    searchModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (searchBtn) searchBtn.addEventListener('click', openSearchModal);
  if (searchClose) searchClose.addEventListener('click', closeSearchModal);
  if (searchBackdrop) searchBackdrop.addEventListener('click', closeSearchModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal && searchModal.classList.contains('active')) {
      closeSearchModal();
    }
  });

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        searchResults.innerHTML = '<div class="search-hint">Ketik kata kunci untuk mencari di website...</div>';
        return;
      }

      const matches = siteSearchIndex.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        searchResults.innerHTML = '<div class="search-hint">Tidak ada hasil ditemukan untuk "' + query + '"</div>';
        return;
      }

      searchResults.innerHTML = matches.map(item => `
        <a href="${item.url}" class="search-result-item">
          <span class="search-result-title">${item.title}</span>
          <span class="search-result-category">${item.category}</span>
        </a>
      `).join('');
    });
  }

  const currentSavedLang = localStorage.getItem('site_lang') || 'id';
  updateHeroText(currentSavedLang);
  updateFlagUI(currentSavedLang);
  loadGoogleTranslate();
});
