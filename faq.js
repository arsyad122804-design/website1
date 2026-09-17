document.addEventListener('DOMContentLoaded', () => {
  // Comprehensive FAQ Database categorized strictly by menu items
  const faqData = {
    pendaftaran: {
      title: 'Pertanyaan Seputar <span class="highlight-blue">Pendaftaran</span>',
      subtitle: 'Temukan informasi lengkap mengenai proses pendaftaran, jadwal, dan persyaratan masuk Hibatullah IIBS.',
      items: [
        {
          q: 'Kapan pendaftaran SMP Hibatullah IIBS dibuka?',
          a: 'Pendaftaran SMP Hibatullah IIBS biasanya dibuka setiap tahun. Untuk tahun ajaran 2027/2028, pendaftaran Gelombang 1 dibuka pada Oktober 2026 – Juni 2027. Informasi terbaru dapat dilihat di website resmi kami atau melalui media sosial.',
          open: true
        },
        {
          q: 'Bagaimana cara mendaftar di Hibatullah IIBS?',
          a: 'Pendaftaran dapat dilakukan secara online melalui website resmi kami pada menu PPDB (https://ppdb.hibatullah.sch.id) atau secara offline dengan mengunjungi Sekretariat Pendaftaran di kampus Hibatullah IIBS.'
        },
        {
          q: 'Apa saja syarat pendaftaran yang harus dipersiapkan?',
          a: 'Syarat utama meliputi pasfoto berwarna 3x4, fotokopi Akta Kelahiran, Kartu Keluarga (KK), Rapor sekolah 2 tahun terakhir, dan mengisi formulir pendaftaran resmi.'
        },
        {
          q: 'Apakah ada tes seleksi? Apa saja yang diuji?',
          a: 'Ya, tes seleksi terdiri dari 3 bagian: Tes Potensi Akademik (Matematika, Bahasa Indonesia, IPA), Tes Pemetaan Al-Qur\'an (Tajwid & Hafalan), serta Wawancara Psikologi & Komitmen Orang Tua.'
        },
        {
          q: 'Apakah menerima pendaftaran inden?',
          a: 'Ya, kami membuka pendaftaran inden bagi calon santri yang ingin mengamankan kuota untuk 1-2 tahun ajaran mendatang.'
        },
        {
          q: 'Apakah ada program beasiswa?',
          a: 'Tersedia beasiswa Prestasi Akademik, Beasiswa Hafiz Al-Qur\'an (minimal 3 Juz), dan Beasiswa Yatim/Dhuafa berprestasi.'
        },
        {
          q: 'Kapan pengumuman hasil seleksi?',
          a: 'Hasil seleksi diumumkan maksimal 7 hari kerja setelah pelaksanaan tes melalui portal PPDB online dan pesan WhatsApp resmi.'
        },
        {
          q: 'Apakah bisa daftar ulang dengan pembayaran bertahap?',
          a: 'Ya, biaya daftar ulang dapat diangsur dalam 2-3 tahapan sesuai skema pembagian pembayaran yang disepakati saat wawancara.'
        },
        {
          q: 'Apakah kuota setiap tahun terbatas?',
          a: 'Ya, demi menjaga kualitas pengasuhan dan pembelajaran, kuota santri baru dibatasi maksimal 120 santri per angkatan.'
        },
        {
          q: 'Dari daerah mana saja pendaftar berasal?',
          a: 'Santri Hibatullah IIBS berasal dari berbagai provinsi di Indonesia (Jawa, Sumatera, Kalimantan, Sulawesi) hingga manca negara.'
        },
        {
          q: 'Apakah ada jalur khusus untuk santri tahfidz?',
          a: 'Ada, calon santri dengan hafalan minimal 3 Juz mendapatkan bebas tes Al-Qur\'an dan prioritas penerimaan.'
        },
        {
          q: 'Bagaimana jika saya mengalami kendala saat pendaftaran?',
          a: 'Anda dapat langsung menghubungi Layanan Customer Service PPDB via WhatsApp di nomor hotline resmi 0812-3456-7890.'
        },
        {
          q: 'Apakah orang tua perlu hadir saat tes seleksi?',
          a: 'Ya, orang tua/wali santri wajib hadir mendampingi untuk mengikuti sesi wawancara dan penyelarasan visi pendidikan.'
        },
        {
          q: 'Di mana saya bisa mendapatkan informasi terbaru?',
          a: 'Informasi terbaru dapat diakses melalui website resmi, Instagram @hibatullah.iibs, TikTok, atau grup informasi calon orang tua.'
        }
      ]
    },
    akademik: {
      title: 'Pertanyaan Seputar <span class="highlight-blue">Akademik</span>',
      subtitle: 'Informasi kurikulum nasional & internasional, metode pembelajaran, serta sistem evaluasi santri.',
      items: [
        {
          q: 'Kurikulum apa yang diterapkan di Hibatullah IIBS?',
          a: 'Kami mengintegrasikan Kurikulum Merdeka Kemendikbudristek dengan Kurikulum Diniyah Pesantren serta Pengayaan Bahasa Asing (Arab & Inggris).',
          open: true
        },
        {
          q: 'Bagaimana pengantar bahasa yang digunakan dalam KBM?',
          a: 'Kegiatan Belajar Mengajar menggunakan bahasa bilingual (Bahasa Indonesia dan Bahasa Inggris/Arab) sesuai kelompok mata pelajaran.'
        },
        {
          q: 'Apakah ada bimbingan ujian dan seleksi jenjang berikutnya?',
          a: 'Ya, terdapat program intensif tryout, bimbingan belajar khusus, dan pemetaan minat bakat menuju jenjang SMA/MA terkemuka.'
        },
        {
          q: 'Berapa jumlah maksimal santri dalam satu kelas?',
          a: 'Jumlah santri dalam satu kelas dibatasi maksimal 24-28 santri agar pembelajaran berlangsung efektif dan terarah.'
        }
      ]
    },
    tahfidz: {
      title: 'Pertanyaan Seputar <span class="highlight-blue">Tahfidz Al-Qur\'an</span>',
      subtitle: 'Target hafalan, metode ziyaadah, muroja\'ah, dan pengujian santri penghafal Al-Qur\'an.',
      items: [
        {
          q: 'Berapa target hafalan Al-Qur\'an santri SMP?',
          a: 'Target kelulusan standar adalah 5-10 Juz Al-Qur\'an, dengan kelas takhassus/intensif yang ditargetkan hingga 30 Juz.',
          open: true
        },
        {
          q: 'Metode hafalan apa yang digunakan?',
          a: 'Menggunakan metode Ziyaadah (setoran baru) di pagi hari dan Muroja\'ah (pengulangan) di sore & malam hari terbimbing musyrif berpengalaman.'
        },
        {
          q: 'Apakah santri mendapatkan sertifikat/ijazah tahfidz resmi?',
          a: 'Ya, santri yang lulus ujian syahadah akan mendapatkan ijazah/sertifikat tahfidz bersanad resmi dari lembaga.'
        }
      ]
    },
    asrama: {
      title: 'Pertanyaan Seputar <span class="highlight-blue">Kehidupan Asrama</span>',
      subtitle: 'Aturan asrama, fasilitas kamar, pola makan, dan pembentukan karakter kepemimpinan santri.',
      items: [
        {
          q: 'Bagaimana kondisi dan fasilitas di kamar asrama?',
          a: 'Setiap kamar ber-AC, dilengkapi tempat tidur busa kualitas tinggi, lemari individu, meja belajar, dan kamar mandi dalam.',
          open: true
        },
        {
          q: 'Apakah santri diperbolehkan membawa gadget/HP?',
          a: 'Penggunaan HP/gadget pribadi tidak diperkenankan di asrama. Komunikasi dengan orang tua dilakukan melalui fasilitas telepon asrama atau jadwal kunjungan.'
        },
        {
          q: 'Bagaimana sistem menu makanan santri?',
          a: 'Santri mendapatkan makan 3 kali sehari dengan menu bergizi seimbang yang disusun dan diawasi oleh tim gizi.'
        }
      ]
    },
    biaya: {
      title: 'Pertanyaan Seputar <span class="highlight-blue">Biaya Pendidikan</span>',
      subtitle: 'Rincian biaya pendaftaran, uang pangkal, SPP bulanan, dan fasilitas yang didapatkan.',
      items: [
        {
          q: 'Berapa besaran SPP bulanan dan sudah mencakup apa saja?',
          a: 'SPP bulanan mencakup biaya pendidikan, asrama ber-AC, makan 3 kali sehari, laundry pakaian, dan layanan kesehatan dasar.',
          open: true
        },
        {
          q: 'Apakah biaya seragam dan buku sudah termasuk di awal?',
          a: 'Biaya seragam (5 stel) dan buku paket/modul pembelajaran sudah terakumulasi dalam paket pendaftaran awal.'
        }
      ]
    },
    fasilitas: {
      title: 'Pertanyaan Seputar <span class="highlight-blue">Fasilitas Kampus</span>',
      subtitle: 'Sarana kelas modern, laboratorium, perpustakaan digital, sarana olahraga, dan masjid.',
      items: [
        {
          q: 'Sarana olahraga apa saja yang tersedia di kampus?',
          a: 'Tersedia lapangan rumput sintetis mini soccer, lapangan basket, bulutangkis, tenis meja, dan area memanah.',
          open: true
        },
        {
          q: 'Apakah kampus dilengkapi sistem keamanan 24 jam?',
          a: 'Kampus dijaga oleh tim security 24 jam, sistem kartu akses pintu, dan kamera pengawas (CCTV) di seluruh area publik.'
        }
      ]
    },
    kegiatan: {
      title: 'Pertanyaan Seputar <span class="highlight-blue">Kegiatan &amp; Ekstrakurikuler</span>',
      subtitle: 'Ragam kegiatan pramuka, panahan, pencak silat, publik speaking, dan club akademik.',
      items: [
        {
          q: 'Ekstrakurikuler apa saja yang dapat diikuti santri?',
          a: 'Pramuka, Tapak Suci/Pencak Silat, Panahan, Public Speaking (English/Arabic Club), Science Club, Robotik, dan Hadrah.',
          open: true
        },
        {
          q: 'Apakah ada kegiatan rihlah/studi lapangan?',
          a: 'Ya, terdapat agenda tahunan Outbound Training, Leadership Camp, dan Kunjungan Edukasi/Studi Lapangan.'
        }
      ]
    },
    lainnya: {
      title: 'Pertanyaan <span class="highlight-blue">Lainnya</span>',
      subtitle: 'Pertanyaan umum seputar aturan kunjungan orang tua, perizinan pulang, dan prosedur kesehatan.',
      items: [
        {
          q: 'Kapan jadwal kunjungan orang tua santri?',
          a: 'Kunjungan orang tua dilaksanakan rutin 1 kali dalam sebulan pada hari Minggu (Sambangan Day) sesuai kalender akademik.',
          open: true
        },
        {
          q: 'Bagaimana prosedur penanganan santri yang sakit?',
          a: 'Santri dirawat di Pos Kesehatan Pesantren (Poskestren) dengan perawat siaga, dan akan dirujuk ke Rumah Sakit bermitra jika diperlukan.'
        }
      ]
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
        <div class="faq-no-results">
          <i class="fas fa-search"></i>
          <p>Maaf, pertanyaan yang Anda cari tidak ditemukan.</p>
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
