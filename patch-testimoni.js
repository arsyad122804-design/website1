const fs = require('fs');

let content = fs.readFileSync('testimoni.html', 'utf8');

// Replace the title section with centered title section
const oldTitleSection = `    <!-- WALISANTRI KAMI -->
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
    </div>`;

const newTitleSection = `    <!-- WALISANTRI KAMI -->
    <div class="section-title-center" style="margin-top: 60px;">
      <div class="section-title-left">
        <div class="section-icon"><i class="fas fa-comment-dots"></i></div>
        <div class="section-title-text">
          <h2>WALISANTRI KAMI</h2>
          <p>Pengalaman nyata para orang tua selama mendampingi pendidikan putra-putrinya di Hibatullah IIBS.</p>
        </div>
      </div>
    </div>`;

content = content.replace(oldTitleSection, newTitleSection);

// Wrap the walisantri grid with the slider track
const oldGrid = `<div class="walisantri-grid">
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
        <div class="wali-text">Kami bangga anak kami bersekolah di Hibatullah IIBS. Lingkungannya islami, guru dan musyrifnya luar biasa membimbing dengan penuh kesabaran.</div>
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
    </div>`;

const newGrid = `<div class="walisantri-slider-outer">
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
            <div class="wali-text">Kami bangga anak kami bersekolah di Hibatullah IIBS. Lingkungannya islami, guru dan musyrifnya luar biasa membimbing dengan penuh kesabaran.</div>
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
    </div>`;

content = content.replace(oldGrid, newGrid);

// Append the script tag at the end of body
const closingScripts = `  <script src="animations.js?v=1785300047"></script><script src="script.js?v=1781320772246"></script>
  <script src="navbar.js?v=20260826"></script>`;

const newClosingScripts = `  <script src="animations.js?v=1785300047"></script><script src="script.js?v=1781320772246"></script>
  <script src="navbar.js?v=20260826"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const track = document.getElementById('waliTrack');
      const prevBtn = document.getElementById('waliPrev');
      const nextBtn = document.getElementById('waliNext');
      
      if (track && prevBtn && nextBtn) {
        const scrollAmount = 305; // 280px card + 25px gap
        
        prevBtn.addEventListener('click', () => {
          track.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
          });
        });
        
        nextBtn.addEventListener('click', () => {
          track.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
          });
        });
      }
    });
  </script>`;

content = content.replace(closingScripts, newClosingScripts);

fs.writeFileSync('testimoni.html', content, 'utf8');
console.log('Successfully patched testimoni.html');
