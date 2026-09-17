document.addEventListener('DOMContentLoaded', () => {
  // Comprehensive FAQ Database categorized strictly by menu items
  const faqData = {
    pendaftaran: {
      title: 'Pertanyaan Seputar <span class="highlight-blue">Pendaftaran</span>',
      subtitle: 'Temukan informasi lengkap mengenai proses pendaftaran, jadwal, dan persyaratan masuk Hibatullah IIBS.',
      items: []
    },
    akademik: {
      title: 'Pertanyaan Seputar <span class="highlight-blue">Akademik</span>',
      subtitle: 'Informasi kurikulum nasional & internasional, metode pembelajaran, serta sistem evaluasi santri.',
      items: []
    },
    tahfidz: {
      title: 'Pertanyaan Seputar <span class="highlight-blue">Tahfidz Al-Qur\'an</span>',
      subtitle: 'Target hafalan, metode ziyaadah, muroja\'ah, dan pengujian santri penghafal Al-Qur\'an.',
      items: []
    },
    asrama: {
      title: 'Pertanyaan Seputar <span class="highlight-blue">Kehidupan Asrama</span>',
      subtitle: 'Aturan asrama, fasilitas kamar, pola makan, dan pembentukan karakter kepemimpinan santri.',
      items: []
    },
    biaya: {
      title: 'Pertanyaan Seputar <span class="highlight-blue">Biaya Pendidikan</span>',
      subtitle: 'Rincian biaya pendaftaran, uang pangkal, SPP bulanan, dan fasilitas yang didapatkan.',
      items: []
    },
    fasilitas: {
      title: 'Pertanyaan Seputar <span class="highlight-blue">Fasilitas Kampus</span>',
      subtitle: 'Sarana kelas modern, laboratorium, perpustakaan digital, sarana olahraga, dan masjid.',
      items: []
    },
    kegiatan: {
      title: 'Pertanyaan Seputar <span class="highlight-blue">Kegiatan &amp; Ekstrakurikuler</span>',
      subtitle: 'Ragam kegiatan pramuka, panahan, pencak silat, publik speaking, dan club akademik.',
      items: []
    },
    lainnya: {
      title: 'Pertanyaan <span class="highlight-blue">Lainnya</span>',
      subtitle: 'Pertanyaan umum seputar aturan kunjungan orang tua, perizinan pulang, dan prosedur kesehatan.',
      items: []
    }
  };

  let activeCategoryKey = 'pendaftaran';

  const categoryTitleEl = document.getElementById('faqCategoryTitle');
  const categorySubtitleEl = document.getElementById('faqCategorySubtitle');
  const accordionContainer = document.getElementById('faqAccordionContainer');
  const searchInput = document.getElementById('faqSearchInput');
  const catButtons = document.querySelectorAll('.faq-cat-btn');

  // Render Accordion Items
  function renderFAQ(items) {
    if (!accordionContainer) return;
    accordionContainer.innerHTML = '';

    if (!items || items.length === 0) {
      accordionContainer.innerHTML = `
        <div class="faq-coming-soon" style="text-align: center; padding: 60px 24px; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 4px 20px rgba(0,0,0,0.02); margin-top: 10px;">
          <div style="width: 72px; height: 72px; background: #eff6ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: #2563eb; font-size: 32px;">
            <i class="fas fa-clock"></i>
          </div>
          <h3 style="font-size: 22px; font-weight: 700; color: #1e3a8a; margin-bottom: 10px;">Coming Soon!</h3>
          <p style="font-size: 15px; color: #64748b; max-width: 480px; margin: 0 auto; line-height: 1.6;">
            Pertanyaan dan jawaban untuk bagian ini sedang dalam proses pembaruan. Informasi lengkap akan segera kami tampilkan di sini.
          </p>
        </div>
      `;
      return;
    }

    items.forEach((item, idx) => {
      const faqItem = document.createElement('div');
      faqItem.className = `faq-item ${item.open ? 'active' : ''}`;
      
      faqItem.innerHTML = `
        <div class="faq-item-header">
          <span class="faq-item-question">${item.q}</span>
          <div class="faq-toggle-icon"><i class="fas fa-chevron-down"></i></div>
        </div>
        <div class="faq-item-body">
          <div class="faq-item-answer">${item.a}</div>
        </div>
      `;

      const header = faqItem.querySelector('.faq-item-header');
      header.addEventListener('click', () => {
        const isActive = faqItem.classList.contains('active');
        
        // Optionally close other items in the same category
        document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));

        if (!isActive) {
          faqItem.classList.add('active');
        }
      });

      accordionContainer.appendChild(faqItem);
    });
  }

  // Load selected category
  function loadCategory(key) {
    const data = faqData[key];
    if (!data) return;

    activeCategoryKey = key;

    // Update Category Active States
    catButtons.forEach(btn => {
      if (btn.getAttribute('data-category') === key) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update Header Text
    if (categoryTitleEl) categoryTitleEl.innerHTML = data.title;
    if (categorySubtitleEl) categorySubtitleEl.textContent = data.subtitle;

    // Clear search input on category change
    if (searchInput) searchInput.value = '';

    // Render items
    renderFAQ(data.items);
  }

  // Category Button Clicks
  catButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = btn.getAttribute('data-category');
      loadCategory(cat);
    });
  });

  // Live Search Filtering
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      const currentCategoryItems = faqData[activeCategoryKey]?.items || [];

      if (!term) {
        renderFAQ(currentCategoryItems);
        return;
      }

      // Filter current category items first or across all categories if deep searching
      const filtered = currentCategoryItems.filter(item => 
        item.q.toLowerCase().includes(term) || item.a.toLowerCase().includes(term)
      );

      renderFAQ(filtered);
    });
  }

  // Initial Load
  loadCategory('pendaftaran');
});
