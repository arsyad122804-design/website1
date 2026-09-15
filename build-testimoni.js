const fs = require('fs');

let f = fs.readFileSync('testimoni.html','utf8');
const top = f.split('<!-- HERO PENDIRI -->')[0];
const bottomMatch = f.match(/(<script src="animations\.js[^]*)/);
const bottom = bottomMatch ? bottomMatch[1] : '';

const newHtml = top + `  <!-- TESTIMONI CSS -->
  <link rel="stylesheet" href="testimoni.css" />

  <header class="testimoni-header">
    <h1>APA KATA <span>MEREKA?</span></h1>
    <div class="testimoni-header-divider">
      <div class="line"></div>
      <i class="fas fa-star"></i>
      <div class="line right"></div>
    </div>
  </header>

  <section class="testimoni-section">
    <!-- PARA TOKOH -->
    <div class="section-title-wrap">
      <div class="section-title-left">
        <div class="section-icon"><i class="fas fa-video"></i></div>
        <div class="section-title-text">
          <h2>PARA TOKOH</h2>
          <p>Pandangan para tokoh tentang pendidikan, adab, dan pembentukan karakter di Hibatullah IIBS.</p>
        </div>
      </div>
      <div class="slider-nav">
        <button class="slider-btn"><i class="fas fa-chevron-left"></i></button>
        <span>1 / 4</span>
        <button class="slider-btn"><i class="fas fa-chevron-right"></i></button>
      </div>
    </div>

    <div class="tokoh-card">
      <div class="tokoh-content">
        <i class="fas fa-quote-left tokoh-quote-icon"></i>
        <div class="tokoh-text">
          Pendidikan bukan hanya tentang ilmu, tetapi juga tentang adab.
        </div>
        <div class="tokoh-author">
          <div class="tokoh-name">Prof. Dr. Komaruddin Hidayat</div>
          <div class="tokoh-title">Rektor UIN Syarif Hidayatullah Jakarta<br>Cendekiawan Muslim</div>
        </div>
      </div>
      <div class="tokoh-image-wrap">
        <div class="tokoh-play-btn">
          <i class="fas fa-play"></i>
        </div>
        <div class="tokoh-play-label">
          <i class="fas fa-caret-right"></i> PUTAR VIDEO
        </div>
      </div>
    </div>

    <div class="slider-dots">
      <div class="dot active"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>

    <!-- WALISANTRI KAMI -->
    <div class="section-title-wrap" style="margin-top: 60px;">
      <div class="section-title-left">
        <div class="section-icon"><i class="fas fa-comment-dots"></i></div>
        <div class="section-title-text">
          <h2>WALISANTRI KAMI</h2>
          <p>Pengalaman nyata para orang tua selama mendampingi pendidikan putra-putrinya di Hibatullah IIBS.</p>
        </div>
      </div>
      <div class="slider-nav">
        <button class="slider-btn"><i class="fas fa-chevron-left"></i></button>
        <button class="slider-btn"><i class="fas fa-chevron-right"></i></button>
      </div>
    </div>

    <div class="walisantri-grid">
      <div class="wali-card">
        <i class="fas fa-quote-left wali-quote-mark"></i>
        <img src="assets/images/user-dummy.png" alt="Avatar" class="wali-avatar" onerror="this.src='https://via.placeholder.com/90'" />
        <div class="wali-stars">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
        <div class="wali-text">Alhamdulillah, kami merasa sangat terbantu dengan pendidikan di Hibatullah IIBS. Tidak hanya akademiknya, tetapi juga pembentukan adab dan karakter anak.</div>
        <div class="wali-name">Ibu Siti Rahma</div>
        <div class="wali-role">Walisantri</div>
        <a href="#" class="wali-btn">Baca Selengkapnya <i class="fas fa-arrow-right"></i></a>
      </div>
      <div class="wali-card">
        <i class="fas fa-quote-left wali-quote-mark"></i>
        <img src="assets/images/user-dummy.png" alt="Avatar" class="wali-avatar" onerror="this.src='https://via.placeholder.com/90'" />
        <div class="wali-stars">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
        <div class="wali-text">Kami bangga anak kami bersekolah di Hibatullah IIBS. Lingkungannya islami, guru dan musyrifnya luar biasa membimbing dengan penuh kesabaran.</div>
        <div class="wali-name">Bapak Andi Pratama</div>
        <div class="wali-role">Walisantri</div>
        <a href="#" class="wali-btn">Baca Selengkapnya <i class="fas fa-arrow-right"></i></a>
      </div>
      <div class="wali-card">
        <i class="fas fa-quote-left wali-quote-mark"></i>
        <img src="assets/images/user-dummy.png" alt="Avatar" class="wali-avatar" onerror="this.src='https://via.placeholder.com/90'" />
        <div class="wali-stars">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
        <div class="wali-text">Perubahan anak kami sangat terasa, lebih disiplin, mandiri dan semakin dekat dengan Al-Qur'an. Terima kasih Hibatullah IIBS.</div>
        <div class="wali-name">Ibu Nuraeni</div>
        <div class="wali-role">Walisantri</div>
        <a href="#" class="wali-btn">Baca Selengkapnya <i class="fas fa-arrow-right"></i></a>
      </div>
      <div class="wali-card">
        <i class="fas fa-quote-left wali-quote-mark"></i>
        <img src="assets/images/user-dummy.png" alt="Avatar" class="wali-avatar" onerror="this.src='https://via.placeholder.com/90'" />
        <div class="wali-stars">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
        <div class="wali-text">Program pendidikan dan pembinaan karakter di sini sangat seimbang. Anak kami tidak hanya pintar, tapi juga beradab.</div>
        <div class="wali-name">Bapak Muhammad Faisal</div>
        <div class="wali-role">Walisantri</div>
        <a href="#" class="wali-btn">Baca Selengkapnya <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>

    <div class="view-all-btn-wrap">
      <a href="#" class="view-all-btn">
        <i class="fas fa-users"></i> Lihat Semua Testimoni Walisantri <i class="fas fa-arrow-right"></i>
      </a>
    </div>

    <div class="footer-quote">
      <i class="fas fa-quote-left q-left"></i>
      Terima kasih atas kepercayaan yang telah diberikan kepada Hibatullah IIBS. <br>
      <span>Semoga Allah senantiasa menjaga dan membimbing langkah anak-anak kita.</span>
      <i class="fas fa-quote-right q-right"></i>
    </div>
  </section>

` + bottom;

fs.writeFileSync('testimoni.html', newHtml);
console.log('Updated testimoni.html');
