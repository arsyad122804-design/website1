document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('card-nav-root');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  if (root && !root.classList.contains('home-card-nav-override')) {
    document.body.classList.add('has-subpage-header');

    const navHTML = `
      <header class="thursina-header thursina-subpage-header">
        <div class="thursina-header-inner">
          <a href="index.html" class="thursina-logo">
            <img src="Logo only.png" alt="Hibatullah IIBS">
            <div class="thursina-logo-text">
              <strong>HIBATULLAH IIBS</strong>
              <small>International Islamic Boarding School</small>
            </div>
          </a>

          <nav class="thursina-nav">
            <div class="thursina-nav-item">
              <a href="index.html" class="thursina-nav-link ${currentPath === 'index.html' ? 'active' : ''}">Beranda</a>
            </div>

            <div class="thursina-nav-item">
              <a href="visi-misi-sdih.html" class="thursina-nav-link ${currentPath === 'visi-misi-sdih.html' ? 'active' : ''}">Visi &amp; Misi</a>
            </div>

            <div class="thursina-nav-item has-dropdown">
              <a href="javascript:void(0)" class="thursina-nav-link ${['sejarah.html','penasehat.html','stakeholders.html'].includes(currentPath) ? 'active' : ''}">About <i class="fas fa-chevron-down nav-arrow"></i></a>
              <div class="thursina-dropdown">
                <a href="sejarah.html">Sejarah Sekolah</a>
                <a href="penasehat.html">Dewan Penasehat</a>
                <a href="stakeholders.html">Stakeholders</a>
              </div>
            </div>

            <div class="thursina-nav-item has-dropdown">
              <a href="javascript:void(0)" class="thursina-nav-link ${['jenjang-smp.html','kurikulum-sdih.html','program-unggulan-sdih.html','karakter-siswa-sdih.html','standar-kompetensi-lulusan.html','testimoni.html'].includes(currentPath) ? 'active' : ''}">Keunggulan <i class="fas fa-chevron-down nav-arrow"></i></a>
              <div class="thursina-dropdown">
                <a href="jenjang-smp.html">Jenjang SMP</a>
                <a href="kurikulum-sdih.html">Kurikulum SMP</a>
                <a href="program-unggulan-sdih.html">Program Unggulan</a>
                <a href="karakter-siswa-sdih.html">Karakter Siswa</a>
                <a href="standar-kompetensi-lulusan.html">Standar Kompetensi Lulusan</a>
                <a href="testimoni.html">Testimoni</a>
              </div>
            </div>

            <div class="thursina-nav-item has-dropdown">
              <a href="javascript:void(0)" class="thursina-nav-link ${['program.html','asrama.html','sekolah.html','regulasi-harian.html','prestasi-santri.html','rapot-santri.html'].includes(currentPath) ? 'active' : ''}">Santri Hebat <i class="fas fa-chevron-down nav-arrow"></i></a>
              <div class="thursina-dropdown">
                <a href="program.html">Program</a>
                <a href="asrama.html">Fasilitas Asrama</a>
                <a href="sekolah.html">Fasilitas Sekolah</a>
                <a href="regulasi-harian.html">Regulasi Harian</a>
                <a href="prestasi-santri.html">Prestasi Santri</a>
                <a href="rapot-santri.html">Rapot Santri</a>
              </div>
            </div>

            <div class="thursina-nav-item">
              <a href="ppdb.html" class="thursina-nav-link ${currentPath === 'ppdb.html' ? 'active' : ''}">PPDB</a>
            </div>

            <div class="thursina-nav-item">
              <a href="galeri.html" class="thursina-nav-link ${currentPath === 'galeri.html' ? 'active' : ''}">Galeri</a>
            </div>

            <div class="thursina-nav-item">
              <a href="berita.html" class="thursina-nav-link ${currentPath === 'berita.html' ? 'active' : ''}">Berita</a>
            </div>

            <div class="thursina-nav-item">
              <a href="media-sosial.html" class="thursina-nav-link ${currentPath === 'media-sosial.html' ? 'active' : ''}">Media Sosial</a>
            </div>

            <div class="thursina-nav-item">
              <a href="faq.html" class="thursina-nav-link ${currentPath === 'faq.html' ? 'active' : ''}">FAQ</a>
            </div>
          </nav>

          <div class="thursina-header-right">
            <button class="thursina-search-btn" id="thursinaSearchBtn" title="Cari di website..." type="button">
              <i class="fas fa-search"></i>
            </button>

            <div class="thursina-lang-wrapper" id="thursinaLangWrapper">
              <button class="thursina-lang-btn" id="thursinaLangBtn" type="button">
                <img src="https://flagcdn.com/w40/id.png" id="thursinaHeaderFlag" alt="Language">
                <i class="fas fa-chevron-down"></i>
              </button>
              <div class="thursina-lang-dropdown" id="thursinaLangDropdown">
                <button onclick="changeSiteLanguage('id')" class="thursina-lang-option" type="button">
                  <img src="https://flagcdn.com/w40/id.png" alt="ID"> Indonesia
                </button>
                <button onclick="changeSiteLanguage('en')" class="thursina-lang-option" type="button">
                  <img src="https://flagcdn.com/w40/gb.png" alt="EN"> English
                </button>
                <button onclick="changeSiteLanguage('ar')" class="thursina-lang-option" type="button">
                  <img src="https://flagcdn.com/w40/sa.png" alt="AR"> العربية
                </button>
              </div>
            </div>

            <a href="https://ppdb.hibatullah.sch.id/formulir" target="_blank" class="thursina-nav-cta">
              Pendaftaran
            </a>

            <button class="thursina-mobile-toggle" id="thursinaMobileToggle" aria-label="Menu Mobile" type="button">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>
    `;

    root.innerHTML = navHTML;
  }

  // Inject Search Modal if missing
  if (!document.getElementById('thursinaSearchModal')) {
    const modalHTML = `
      <div class="thursina-search-modal" id="thursinaSearchModal">
        <div class="search-modal-backdrop" id="searchModalBackdrop"></div>
        <div class="search-modal-box">
          <div class="search-input-wrap">
            <i class="fas fa-search search-modal-icon"></i>
            <input type="text" id="thursinaSearchInput" placeholder="Cari program, berita, PPDB, atau fasilitas..." autocomplete="off">
            <button class="search-modal-close" id="searchModalClose" type="button"><i class="fas fa-times"></i></button>
          </div>
          <div class="search-results-list" id="searchResultsList">
            <div class="search-hint">Ketik kata kunci untuk mencari di website...</div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  // Inject Mobile Navigation Drawer if missing
  if (!document.getElementById('mobileDrawer')) {
    const mobileDrawerHTML = `
      <div class="mobile-nav-overlay" id="mobileOverlay" aria-hidden="true"></div>
      <div class="mobile-nav-drawer" id="mobileDrawer" role="dialog" aria-label="Menu navigasi">
        <div class="mobile-nav-header">
          <img src="Logo only.png" alt="Hibatullah IIBS" width="44" height="44" />
          <div class="mobile-nav-brand">
            <strong>HIBATULLAH IIBS</strong>
            <span>International Islamic Boarding School</span>
          </div>
          <button type="button" class="mobile-nav-close" id="mobileClose" aria-label="Tutup menu"><i class="fas fa-times"></i></button>
        </div>
        <nav class="mobile-nav-links">
          <div class="mobile-lang-switcher-wrap">
            <button onclick="changeSiteLanguage('id')" class="mobile-lang-btn id-btn active" type="button"><img src="https://flagcdn.com/w40/id.png" alt="ID"> Indo</button>
            <button onclick="changeSiteLanguage('en')" class="mobile-lang-btn en-btn" type="button"><img src="https://flagcdn.com/w40/gb.png" alt="EN"> English</button>
            <button onclick="changeSiteLanguage('ar')" class="mobile-lang-btn ar-btn" type="button"><img src="https://flagcdn.com/w40/sa.png" alt="AR"> العربية</button>
          </div>
          <a href="index.html" class="${currentPath === 'index.html' ? 'active' : ''}"><i class="fas fa-home"></i> Beranda</a>
          <a href="visi-misi-sdih.html" class="${currentPath === 'visi-misi-sdih.html' ? 'active' : ''}"><i class="fas fa-eye"></i> Visi &amp; Misi</a>
          
          <p class="mobile-nav-group-title">About Us</p>
          <a href="sejarah.html" class="${currentPath === 'sejarah.html' ? 'active' : ''}"><i class="fas fa-scroll"></i> Sejarah Sekolah</a>
          <a href="penasehat.html" class="${currentPath === 'penasehat.html' ? 'active' : ''}"><i class="fas fa-user-tie"></i> Dewan Penasehat</a>
          <a href="stakeholders.html" class="${currentPath === 'stakeholders.html' ? 'active' : ''}"><i class="fas fa-circle-nodes"></i> Stakeholders</a>
          
          <p class="mobile-nav-group-title">Keunggulan Kami</p>
          <a href="jenjang-smp.html" class="${currentPath === 'jenjang-smp.html' ? 'active' : ''}"><i class="fas fa-school"></i> Jenjang SMP</a>
          <a href="kurikulum-sdih.html" class="${currentPath === 'kurikulum-sdih.html' ? 'active' : ''}"><i class="fas fa-book-open"></i> Kurikulum SMP</a>
          <a href="program-unggulan-sdih.html" class="${currentPath === 'program-unggulan-sdih.html' ? 'active' : ''}"><i class="fas fa-star"></i> Program Unggulan</a>
          <a href="karakter-siswa-sdih.html" class="${currentPath === 'karakter-siswa-sdih.html' ? 'active' : ''}"><i class="fas fa-heart"></i> Karakter Siswa</a>
          <a href="standar-kompetensi-lulusan.html" class="${currentPath === 'standar-kompetensi-lulusan.html' ? 'active' : ''}"><i class="fas fa-graduation-cap"></i> Standar Kompetensi Lulusan</a>
          <a href="testimoni.html" class="${currentPath === 'testimoni.html' ? 'active' : ''}"><i class="fas fa-comment-dots"></i> Testimoni</a>
          
          <p class="mobile-nav-group-title">Santri Hebat</p>
          <a href="program.html" class="${currentPath === 'program.html' ? 'active' : ''}"><i class="fas fa-list"></i> Program</a>
          <a href="asrama.html" class="${currentPath === 'asrama.html' ? 'active' : ''}"><i class="fas fa-home"></i> Fasilitas Asrama</a>
          <a href="sekolah.html" class="${currentPath === 'sekolah.html' ? 'active' : ''}"><i class="fas fa-school"></i> Fasilitas Sekolah</a>
          <a href="regulasi-harian.html" class="${currentPath === 'regulasi-harian.html' ? 'active' : ''}"><i class="fas fa-clock"></i> Regulasi Harian</a>
          <a href="rapot-santri.html" class="${currentPath === 'rapot-santri.html' ? 'active' : ''}"><i class="fas fa-file-invoice"></i> Rapot Santri</a>
          <a href="prestasi-santri.html" class="${currentPath === 'prestasi-santri.html' ? 'active' : ''}"><i class="fas fa-trophy"></i> Data Prestasi</a>
          
          <p class="mobile-nav-group-title">Lainnya</p>
          <a href="ppdb.html" class="${currentPath === 'ppdb.html' ? 'active' : ''}"><i class="fas fa-file-alt"></i> PPDB</a>
          <a href="galeri.html" class="${currentPath === 'galeri.html' ? 'active' : ''}"><i class="fas fa-images"></i> Galeri</a>
          <a href="berita.html" class="${currentPath === 'berita.html' ? 'active' : ''}"><i class="fas fa-newspaper"></i> Berita</a>
          <a href="media-sosial.html" class="${currentPath === 'media-sosial.html' ? 'active' : ''}"><i class="fas fa-share-nodes"></i> Media Sosial</a>
          <a href="faq.html" class="${currentPath === 'faq.html' ? 'active' : ''}"><i class="fas fa-circle-question"></i> FAQ</a>
        </nav>
        <div class="mobile-nav-footer">
          <a href="https://ppdb.hibatullah.sch.id/formulir" target="_blank" class="mobile-nav-cta"><i class="fas fa-pen-to-square"></i> Pendaftaran</a>
          <a href="https://wa.me/6282262263434" class="mobile-nav-wa" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> Konsultasi WhatsApp</a>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', mobileDrawerHTML);
  }

  // Mobile Drawer Toggle Event Handlers
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileOverlay');
  const closeBtn = document.getElementById('mobileClose');

  function openMobileMenu() {
    if (drawer && overlay) {
      drawer.classList.add('open');
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (drawer && overlay) {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  const thursinaMobileToggle = document.getElementById('thursinaMobileToggle');
  if (thursinaMobileToggle) {
    thursinaMobileToggle.addEventListener('click', () => {
      if (drawer && drawer.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeMobileMenu);
  if (overlay) overlay.addEventListener('click', closeMobileMenu);

  const drawerLinks = document.querySelectorAll('.mobile-nav-links a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // ----------------------------------------
  // Language Switcher & Hero Title Logic
  // ----------------------------------------
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

  const heroTranslations = {
    id: {
      tag: 'SELAMAT DATANG DI',
      title: 'Hibatullah<br>International<br>Islamic Boarding School',
      more: 'Lihat Galeri <i class="fas fa-arrow-right"></i>'
    },
    en: {
      tag: 'WELCOME TO',
      title: 'Hibatullah<br>International<br>Islamic Boarding School',
      more: 'More Galleries <i class="fas fa-arrow-right"></i>'
    },
    ar: {
      tag: 'أهلاً وسهلاً بكم في',
      title: 'Hibatullah<br>International<br>Islamic Boarding School',
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initActiveFlags);
  } else {
    initActiveFlags();
  }

  // Thursina Header Interaction Handlers
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

  // Thursina Search Modal Logic
  const searchBtn = document.getElementById('thursinaSearchBtn');
  const searchModal = document.getElementById('thursinaSearchModal');
  const searchClose = document.getElementById('searchModalClose');
  const searchBackdrop = document.getElementById('searchModalBackdrop');
  const searchInput = document.getElementById('thursinaSearchInput');
  const searchResults = document.getElementById('searchResultsList');

  const siteSearchIndex = [
    { title: 'Penerimaan Santri Baru (PPDB)', category: 'Pendaftaran', url: 'ppdb.html' },
    { title: 'Visi & Misi Sekolah', category: 'About', url: 'visi-misi-sdih.html' },
    { title: 'Program Unggulan', category: 'Pendidikan', url: 'program-unggulan-sdih.html' },
    { title: 'Sejarah Sekolah', category: 'About', url: 'sejarah.html' },
    { title: 'Dewan Penasehat', category: 'About', url: 'penasehat.html' },
    { title: 'Stakeholders & Mitra', category: 'About', url: 'stakeholders.html' },
    { title: 'Kurikulum & Sistem Pembelajaran', category: 'Education', url: 'kurikulum-sdih.html' },
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
