
/**
 * Halaman Asrama — muat dari Firebase (halaman/asrama)
 */
(function () {
  var DEFAULT = {
    hero_tag: 'ASRAMA',
    hero_judul: 'ASRAMA SANTRI',
    hero_highlight: 'SANTRI',
    hero_deskripsi:
      'Tempat tinggal yang ramah, aman, dan nyaman — dirancang untuk membentuk karakter santri yang mandiri, disiplin, dan berakhlak mulia.',
    hero_gambar:
      'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=1200&q=80',
    hero_label_judul: 'Asrama Santri Hibatullah IIBS',
    hero_label_sub: 'Bojonegoro, Jawa Timur',
    pills: [
      { icon: 'fa-check-circle', teks: 'Aman & Nyaman' },
      { icon: 'fa-check-circle', teks: 'Bersih & Rapi' },
      { icon: 'fa-check-circle', teks: 'Pembinaan Karakter' },
      { icon: 'fa-check-circle', teks: '24 Jam Terjaga' },
    ],
    paragraf: [
      'Di lembaga Hibatullah IIBS, Asrama Santri dirancang untuk menjadi tempat tinggal yang ramah, aman dan nyaman bagi seluruh santri, sehingga para santri mendapatkan suasana yang tidak jauh berbeda dari rumahnya sendiri. Kerapihan, kebersihan, dan keteraturan merupakan nilai-nilai yang sangat ditekankan di dalam lingkungan Asrama.',
      'Dalam aspek pembentukan karakter, santri akan dibimbing menjadi pribadi yang mandiri, disiplin, dan memiliki jiwa sosial yang tinggi, dengan adanya piket bergilir dalam menjaga kebersihan dan kerapihan asrama.',
      'Asrama juga dirancang sebagai tempat belajar yang nyaman — belajar Al-Qur\'an, Bahasa Arab dan Inggris, adab Islami, serta pengkajian materi kurikulum. Semangat membaca dipupuk melalui pojok baca di beberapa sudut asrama.',
      'Asrama santri tidak hanya tempat istirahat, melainkan pusat pembinaan karakter yang efektif dalam membentuk santri hebat sebagaimana dicita-citakan lembaga.',
    ],
    kutipan:
      'Asrama santri memegang peranan sangat penting dalam proses pembentukan santri hebat — lebih dari sekadar tempat tinggal.',
    stats: [
      { icon: 'fa-users', bg: '#e8f0fe', color: '#1a3a6b', nilai: '8', label: 'Santri per Kamar (Maks.)' },
      { icon: 'fa-user-shield', bg: '#e8f8ee', color: '#27ae60', nilai: '24 Jam', label: 'Pengawasan Musyrif/ah' },
      { icon: 'fa-building', bg: '#fff3e0', color: '#e8a020', nilai: '3', label: 'Gedung Asrama' },
      { icon: 'fa-star', bg: '#f3e8ff', color: '#8e44ad', nilai: '850+', label: 'Santri Aktif' },
    ],
    galeri: [
      'assets/images/kamar 1.JPG',
      'assets/images/kamar 2.JPG',
      'assets/images/kamar 3.JPG',
    ],
    nilai: [
      {
        icon: 'fa-broom',
        judul: 'Kerapihan',
        deskripsi:
          'Setiap santri diajarkan menjaga kerapihan kamar, pakaian, dan lingkungan asrama sebagai cerminan akhlak yang baik.',
      },
      {
        icon: 'fa-soap',
        judul: 'Kebersihan',
        deskripsi:
          'Kebersihan adalah sebagian dari iman. Santri dibiasakan menjaga kebersihan melalui piket bergilir harian.',
      },
      {
        icon: 'fa-clock',
        judul: 'Keteraturan',
        deskripsi:
          'Jadwal harian terstruktur membentuk kedisiplinan dan keteraturan hidup santri sejak dini.',
      },
    ],
    fasilitas_intro:
      'Asrama dilengkapi fasilitas akomodasi lengkap: tempat tidur, lemari, kamar mandi, lobby, dan laundry. Setiap kamar maksimal 8 santri dengan pendampingan musyrif/musyrifah.',
    fasilitas: [
      { icon: 'fa-bed', bg: '#e8f0fe', color: '#1a3a6b', judul: 'Asrama yang Nyaman', deskripsi: 'Kamar tidur bersih dengan tempat tidur berkualitas', wide: true },
      { icon: 'fa-shower', bg: '#e8f8ee', color: '#27ae60', judul: 'Kamar Mandi Bersih', deskripsi: 'Terawat di setiap lantai' },
      { icon: 'fa-couch', bg: '#fff3e0', color: '#e8a020', judul: 'Lobby Luas', deskripsi: 'Lobby luas di setiap lantai' },
      { icon: 'fa-leaf', bg: '#f3e8ff', color: '#8e44ad', judul: 'Lingkungan Asri', deskripsi: 'Nyaman, asri, dan hijau' },
      { icon: 'fa-chalkboard', bg: '#fde8e8', color: '#c0392b', judul: 'Learning Space', deskripsi: 'Ruang belajar & diskusi' },
      { icon: 'fa-utensils', bg: '#e0f7f4', color: '#16a085', judul: 'Kantin Sehat', deskripsi: 'Menu sehat dan bergizi' },
      { icon: 'fa-book-open', bg: '#e8f0fe', color: '#3a5bd9', judul: 'Pojok Baca', deskripsi: 'Koleksi buku islami' },
      { icon: 'fa-shield-alt', bg: '#fff3e0', color: '#e8a020', judul: 'Keamanan 24 Jam', deskripsi: 'Musyrif/ah berdedikasi' },
    ],
    cta_judul: 'Titipkan Putra/Putri Anda di Asrama Terbaik!',
    cta_highlight: 'Asrama Terbaik!',
    cta_teks:
      'Asrama Hibatullah IIBS siap menjadi rumah kedua yang aman, nyaman, dan penuh nilai-nilai Islami.',
  };

  function esc(s) {
    if (!s) return '';
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  async function loadData() {
    if (typeof HibatullahDB !== 'undefined' && HibatullahDB.isReady()) {
      HibatullahDB.init();
      var doc = await HibatullahDB.getDoc(HibatullahDB.cols().halaman, 'asrama');
      if (doc) return doc;
    }
    return DEFAULT;
  }

  function renderHero(d) {
    var wrap = document.getElementById('asramaApp');
    if (!wrap) return;

    var hi = esc(d.hero_highlight || 'SANTRI');
    var title = '<span style="color:#ffffff;">ASRAMA ' + hi + '</span>';

    wrap.innerHTML =
      '<section class="as-hero" style="position:relative;">' +
        '<div style="position:absolute;inset:0;z-index:0;">' +
          '<img src="assets/images/WhatsApp Image 2026-03-16 at 08.56.26.jpeg" alt="" style="width:100%;height:100%;object-fit:cover;opacity:0.15;" />' +
        '</div>' +
        '<div class="as-hero-mesh"></div>' +
        '<div class="as-hero-wrap">' +
          '<div class="as-hero-text">' +
            '<div class="as-hero-badge"><i class="fas fa-home"></i> Santri Hebat</div>' +
            '<p class="as-hero-tag">' + esc(d.hero_tag || 'ASRAMA') + '</p>' +
            '<h1>' + title + '</h1>' +
            '<p class="as-hero-lead">' + esc(d.hero_deskripsi) + '</p>' +
            '<div class="as-hero-pills" id="asPills"></div>' +
          '</div>' +

        '</div>' +
      '</section>' +
      '<div class="as-subnav-wrap">' +
        '<nav class="as-subnav">' +
          '<a href="#tentang" class="active">Tentang</a>' +
          '<a href="#galeri">Galeri</a>' +
          '<a href="#nilai">Nilai</a>' +
          '<a href="#fasilitas">Fasilitas</a>' +
        '</nav>' +
      '</div>' +
      '<section class="as-sec" id="tentang" style="background:#f0f4fb">' +
        '<div class="as-inner">' +
          '<div class="as-head">' +
            '<p class="as-label">TENTANG ASRAMA</p>' +
            '<h2 class="as-title">Rumah Kedua <span>Para Santri</span></h2>' +
            '<div class="as-line"></div>' +
          '</div>' +
            '<div><div class="as-prose" id="asProse"></div>' +
            (d.kutipan ? '<div class="as-quote"><i class="fas fa-quote-left"></i><p>' + esc(d.kutipan) + '</p></div>' : '') +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>' +
      '<section class="as-gallery" id="galeri">' +
        '<div class="as-gallery-track" id="asGallery"></div>' +
      '</section>' +
      '<section class="as-nilai as-sec" id="nilai">' +
        '<div class="as-inner">' +
          '<div class="as-head as-head--light">' +
            '<p class="as-label">NILAI UTAMA</p>' +
            '<h2 class="as-title">Nilai <span>Lingkungan Asrama</span></h2>' +
            '<div class="as-line"></div>' +
          '</div>' +
          '<div class="as-nilai-grid" id="asNilai"></div>' +
        '</div>' +
      '</section>' +
      '<section class="as-fas as-sec" id="fasilitas">' +
        '<div class="as-inner">' +
          '<div class="as-head">' +
            '<p class="as-label">— FASILITAS —</p>' +
            '<h2 class="as-title">Fasilitas <span>Asrama Santri</span></h2>' +
            '<div class="as-line"></div>' +
          '</div>' +
          '<div class="as-fas-intro-card">' +
            '<div class="as-fas-intro-icon"><i class="fas fa-university"></i></div>' +
            '<div class="as-fas-intro-text">' + esc(d.fasilitas_intro || 'Asrama dilengkapi fasilitas akomodasi lengkap: tempat tidur, lemari, kamar mandi, lobby, dan laundry. Setiap kamar maksimal 8 santri dengan pendampingan musyrif/musyrifah.') + '</div>' +
          '</div>' +
          '<div class="as-fas-grid">' +
            '<div class="as-fas-row as-fas-row-1" id="asFasRow1"></div>' +
            '<div class="as-fas-row as-fas-row-2" id="asFasRow2"></div>' +
            '<div class="as-fas-row as-fas-row-3" id="asFasRow3"></div>' +
          '</div>' +
        '</div>' +
      '</section>';

    var pills = d.pills || [];
    document.getElementById('asPills').innerHTML = pills
      .map(function (p) {
        return '<span><i class="fas ' + esc(p.icon || 'fa-check') + '"></i> ' + esc(p.teks) + '</span>';
      })
      .join('');

    document.getElementById('asProse').innerHTML = (d.paragraf || [])
      .map(function (p) {
        return '<p>' + esc(p) + '</p>';
      })
      .join('');

    document.getElementById('asGallery').innerHTML = (d.galeri || [])
      .map(function (url) {
        return '<div class="as-gallery-item"><img src="' + esc(url) + '" alt="Asrama" loading="lazy" /></div>';
      })
      .join('');

    var nilaiPresets = [
      { color: '#f59e0b', light: '#fbbf24', dark: '#d97706', shadow: 'rgba(245, 158, 11, 0.45)', bg: '#fffbeb' },
      { color: '#10b981', light: '#34d399', dark: '#047857', shadow: 'rgba(16, 185, 129, 0.45)', bg: '#ecfdf5' },
      { color: '#3b82f6', light: '#60a5fa', dark: '#1d4ed8', shadow: 'rgba(59, 130, 246, 0.45)', bg: '#eff6ff' }
    ];

    document.getElementById('asNilai').innerHTML = (d.nilai || [])
      .map(function (n, i) {
        var p = nilaiPresets[i % nilaiPresets.length];
        return (
          '<div class="as-nilai-card" style="--n-color:' + p.color + '; --n-light:' + p.light + '; --n-dark:' + p.dark + '; --n-shadow:' + p.shadow + '; --n-bg:' + p.bg + ';">' +
            '<div class="as-nilai-icon"><i class="fas ' + esc(n.icon) + '"></i></div>' +
            '<h4>' + esc(n.judul) + '</h4>' +
            '<p>' + esc(n.deskripsi) + '</p>' +
          '</div>'
        );
      })
      .join('');

    var fasData = [
      { num: '01', icon: 'fa-bed', judul: 'Asrama yang Nyaman', deskripsi: 'Kamar tidur bersih dengan tempat tidur berkualitas', color: '#2563eb', light: '#60a5fa', dark: '#1d4ed8', shadow: 'rgba(37, 99, 235, 0.4)', bg: '#eff6ff' },
      { num: '02', icon: 'fa-bath', judul: 'Kamar Mandi Bersih', deskripsi: 'Terawat di setiap lantai', color: '#10b981', light: '#34d399', dark: '#047857', shadow: 'rgba(16, 185, 129, 0.4)', bg: '#ecfdf5' },
      { num: '03', icon: 'fa-couch', judul: 'Lobby Luas', deskripsi: 'Lobby luas di setiap lantai', color: '#f59e0b', light: '#fbbf24', dark: '#d97706', shadow: 'rgba(245, 158, 11, 0.4)', bg: '#fffbeb' },
      { num: '04', icon: 'fa-leaf', judul: 'Lingkungan Asri', deskripsi: 'Nyaman, asri, dan hijau', color: '#8b5cf6', light: '#a78bfa', dark: '#6d28d9', shadow: 'rgba(139, 92, 246, 0.4)', bg: '#f5f3ff' },
      { num: '05', icon: 'fa-book-open', judul: 'Learning Space', deskripsi: 'Ruang belajar & diskusi', color: '#ef4444', light: '#f87171', dark: '#b91c1c', shadow: 'rgba(239, 68, 68, 0.4)', bg: '#fef2f2' },
      { num: '06', icon: 'fa-utensils', judul: 'Kantin Sehat', deskripsi: 'Menu sehat dan bergizi', color: '#14b8a6', light: '#2dd4bf', dark: '#0f766e', shadow: 'rgba(20, 184, 166, 0.4)', bg: '#f0fdfa' },
      { num: '07', icon: 'fa-book-reader', judul: 'Pojok Baca', deskripsi: 'Koleksi buku islami', color: '#0284c7', light: '#38bdf8', dark: '#0369a1', shadow: 'rgba(2, 132, 199, 0.4)', bg: '#f0f9ff' },
      { num: '08', icon: 'fa-shield-alt', judul: 'Keamanan 24 Jam', deskripsi: 'Musyrif/ah berdedikasi', color: '#eab308', light: '#facc15', dark: '#a16207', shadow: 'rgba(234, 179, 8, 0.4)', bg: '#fefce8' }
    ];

    function createFasCard(f) {
      return (
        '<div class="as-fas-card" style="--card-color:' + f.color + '; --card-light:' + f.light + '; --card-dark:' + f.dark + '; --card-shadow:' + f.shadow + '; --card-bg:' + f.bg + ';">' +
          '<div class="as-fas-card-top">' +
            '<div class="as-fas-card-icon"><i class="fas ' + f.icon + '"></i></div>' +
            '<span class="as-fas-card-num">' + f.num + '</span>' +
          '</div>' +
          '<div class="as-fas-card-body">' +
            '<h4>' + esc(f.judul) + '</h4>' +
            '<p>' + esc(f.deskripsi) + '</p>' +
          '</div>' +
          '<div class="as-fas-card-foot">' +
            '<button class="as-fas-card-btn" aria-label="Detail"><i class="fas fa-arrow-right"></i></button>' +
          '</div>' +
          '<div class="as-fas-card-watermark"><i class="fas ' + f.icon + '"></i></div>' +
        '</div>'
      );
    }

    var row1 = fasData.slice(0, 3).map(createFasCard).join('');
    var row2 = fasData.slice(3, 7).map(createFasCard).join('');
    var row3 = fasData.slice(7, 8).map(createFasCard).join('');

    var r1El = document.getElementById('asFasRow1');
    var r2El = document.getElementById('asFasRow2');
    var r3El = document.getElementById('asFasRow3');
    if (r1El) r1El.innerHTML = row1;
    if (r2El) r2El.innerHTML = row2;
    if (r3El) r3El.innerHTML = row3;

    var ctaTitle = d.cta_judul || DEFAULT.cta_judul;
    var hi = d.cta_highlight || 'Asrama Terbaik!';
    document.getElementById('asCtaTitle').innerHTML = ctaTitle.replace(
      hi,
      '<span>' + esc(hi) + '</span>'
    );
    document.getElementById('asCtaText').textContent = d.cta_teks || DEFAULT.cta_teks;

    initSubnav();
  }

  function initSubnav() {
    var links = document.querySelectorAll('.as-subnav a');
    links.forEach(function (a) {
      a.addEventListener('click', function () {
        links.forEach(function (l) {
          l.classList.remove('active');
        });
        a.classList.add('active');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', async function () {
    var root = document.getElementById('asramaApp');
    if (!root) return;
    root.innerHTML = '<p class="as-loading">Memuat halaman asrama...</p>';
    try {
      var data = await loadData();
      renderHero(data);
      if (typeof applyPengaturan === 'function') applyPengaturan();
    } catch (e) {
      console.error(e);
      renderHero(DEFAULT);
    }
  });
})();

