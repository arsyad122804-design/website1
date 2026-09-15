const fs = require('fs');

// 1. Update testimoni.css
let css = fs.readFileSync('testimoni.css', 'utf8');

const comingSoonStyles = `
/* Coming Soon Block Styles */
.coming-soon-box {
  text-align: center;
  padding: 50px 30px;
  background: white;
  border-radius: 20px;
  border: 2px dashed rgba(15, 32, 64, 0.15);
  max-width: 600px;
  margin: 30px auto 50px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.02);
}
.coming-soon-icon {
  font-size: 3rem;
  color: var(--primary-navy);
  margin-bottom: 20px;
  opacity: 0.8;
}
.coming-soon-box h3 {
  color: var(--primary-navy);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
}
.coming-soon-box p {
  color: #64748B;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 480px;
  margin: 0 auto;
}
`;

css += comingSoonStyles;
fs.writeFileSync('testimoni.css', css, 'utf8');
console.log('Updated testimoni.css');

// 2. Update testimoni.html
let html = fs.readFileSync('testimoni.html', 'utf8');

// Replace the walisantri slider and view all button with a Coming Soon block
const oldWalisantriBlock = `<div class="walisantri-slider-outer">
      <button class="slider-arrow-btn prev" id="waliPrev"><i class="fas fa-chevron-left"></i></button>
      <div class="walisantri-slider-track-wrapper" id="waliTrack">
        <div class="walisantri-grid">
          <div class="wali-card">
            <i class="fas fa-quote-left wali-quote-mark"></i>
            <img src="https://ui-avatars.com/api/?name=Wali+Santri&background=F1F5F9&color=94A3B8&size=100" alt="Avatar" class="wali-avatar" onerror="this.src='https://via.placeholder.com/90'" />
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
            <img src="https://ui-avatars.com/api/?name=Wali+Santri&background=F1F5F9&color=94A3B8&size=100" alt="Avatar" class="wali-avatar" onerror="this.src='https://via.placeholder.com/90'" />
            <div class="wali-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <div class="wali-text">Kami bangga anak kami bersekolah di Hibatullah IIBS. Lingkungannya islami, guru and musyrifnya luar biasa membimbing dengan penuh kesabaran.</div>
            <div class="wali-name">Bapak Andi Pratama</div>
            <div class="wali-role">Walisantri</div>
            <a href="#" class="wali-btn">Baca Selengkapnya <i class="fas fa-arrow-right"></i></a>
          </div>
          <div class="wali-card">
            <i class="fas fa-quote-left wali-quote-mark"></i>
            <img src="https://ui-avatars.com/api/?name=Wali+Santri&background=F1F5F9&color=94A3B8&size=100" alt="Avatar" class="wali-avatar" onerror="this.src='https://via.placeholder.com/90'" />
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
            <img src="https://ui-avatars.com/api/?name=Wali+Santri&background=F1F5F9&color=94A3B8&size=100" alt="Avatar" class="wali-avatar" onerror="this.src='https://via.placeholder.com/90'" />
            <div class="wali-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <div class="wali-text">Program pendidikan dan pembinaan karakter di sini sangat seimbang. Anak kami tidak hanya pintar, tapi juga beradab.</div>
            <div class="wali-name">Bapak Muhammad Faisal</div>
            <div class="wali-role">Walisantri</div>
            <a href="#" class="wali-btn">Baca Selengkapnya <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
      <button class="slider-arrow-btn next" id="waliNext"><i class="fas fa-chevron-right"></i></button>
    </div>

    <div class="view-all-btn-wrap">
      <a href="#" class="view-all-btn">
        <i class="fas fa-users"></i> Lihat Semua Testimoni Walisantri <i class="fas fa-arrow-right"></i>
      </a>
    </div>`;

const newWalisantriBlock = `<div class="coming-soon-box">
      <i class="fas fa-hourglass-half coming-soon-icon"></i>
      <h3>Coming Soon</h3>
      <p>Testimoni dari para walisantri sedang dalam proses penyusunan dan akan segera kami tampilkan di sini.</p>
    </div>`;

html = html.replace(oldWalisantriBlock, newWalisantriBlock);

// Update cache buster
html = html.replace('testimoni.css?v=20260826l', 'testimoni.css?v=20260826m');

fs.writeFileSync('testimoni.html', html, 'utf8');
console.log('Successfully replaced Walisantri section with Coming Soon block');
