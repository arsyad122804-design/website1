const fs = require('fs');

// Patch CSS
let css = fs.readFileSync('testimoni.css', 'utf8');

// Add styles for tokoh slider
const newTokohStyles = `
/* Tokoh Slider CSS */
.tokoh-slider-outer {
  position: relative;
  max-width: 100%;
  margin: 0 auto 30px;
  padding: 0 20px;
}
.tokoh-slider-track-wrapper {
  overflow-x: hidden;
  scroll-behavior: smooth;
  border-radius: 24px;
}
.tokoh-slider-track {
  display: flex;
  width: max-content;
}
.tokoh-card {
  flex: 0 0 100%;
  width: 1160px; /* fallback width */
  max-width: 100%;
  background: var(--primary-navy);
  overflow: hidden;
  display: flex;
  position: relative;
  box-shadow: 0 25px 50px rgba(15, 32, 64, 0.25);
  box-sizing: border-box;
  margin-bottom: 0; /* reset */
}
.tokoh-slider-outer .slider-arrow-btn.prev {
  left: -20px;
}
.tokoh-slider-outer .slider-arrow-btn.next {
  right: -20px;
}
`;

css += newTokohStyles;
fs.writeFileSync('testimoni.css', css, 'utf8');
console.log('Patched testimoni.css');

// Patch HTML
let html = fs.readFileSync('testimoni.html', 'utf8');

// Find and replace PARA TOKOH header + card
const oldTokohSection = `    <div class="section-title-wrap">
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
    </div>`;

const newTokohSection = `    <!-- PARA TOKOH (Centered Header) -->
    <div class="section-title-center">
      <div class="section-title-left">
        <div class="section-icon"><i class="fas fa-video"></i></div>
        <div class="section-title-text">
          <h2>PARA TOKOH</h2>
          <p>Pandangan para tokoh tentang pendidikan, adab, dan pembentukan karakter di Hibatullah IIBS.</p>
        </div>
      </div>
    </div>

    <div class="tokoh-slider-outer">
      <button class="slider-arrow-btn prev" id="tokohPrev"><i class="fas fa-chevron-left"></i></button>
      <div class="tokoh-slider-track-wrapper" id="tokohTrack">
        <div class="tokoh-slider-track">
          <!-- Slide 1 -->
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
            <div class="tokoh-image-wrap" style="background-image: url('assets/images/dokumentasi-1.jpg');">
              <div class="tokoh-play-btn">
                <i class="fas fa-play"></i>
              </div>
              <div class="tokoh-play-label">
                <i class="fas fa-caret-right"></i> PUTAR VIDEO
              </div>
            </div>
          </div>
          <!-- Slide 2 -->
          <div class="tokoh-card">
            <div class="tokoh-content">
              <i class="fas fa-quote-left tokoh-quote-icon"></i>
              <div class="tokoh-text">
                Adab mendahului ilmu. Tanpa adab, kepintaran hanya akan membawa kerusakan.
              </div>
              <div class="tokoh-author">
                <div class="tokoh-name">KH. M. Cholil Nafis, Ph.D.</div>
                <div class="tokoh-title">Ketua Bidang Dakwah & Ukhuwah MUI Pusat</div>
              </div>
            </div>
            <div class="tokoh-image-wrap" style="background-image: url('assets/images/dokumentasi-2.jpg');">
              <div class="tokoh-play-btn">
                <i class="fas fa-play"></i>
              </div>
              <div class="tokoh-play-label">
                <i class="fas fa-caret-right"></i> PUTAR VIDEO
              </div>
            </div>
          </div>
          <!-- Slide 3 -->
          <div class="tokoh-card">
            <div class="tokoh-content">
              <i class="fas fa-quote-left tokoh-quote-icon"></i>
              <div class="tokoh-text">
                Membangun generasi pemimpin masa depan harus dimulai dari pembiasaan akhlakul karimah.
              </div>
              <div class="tokoh-author">
                <div class="tokoh-name">Prof. Dr. KH. Didin Hafidhuddin, MS</div>
                <div class="tokoh-title">Guru Besar IPB & Cendekiawan Islam</div>
              </div>
            </div>
            <div class="tokoh-image-wrap" style="background-image: url('assets/images/dokumentasi-3.jpg');">
              <div class="tokoh-play-btn">
                <i class="fas fa-play"></i>
              </div>
              <div class="tokoh-play-label">
                <i class="fas fa-caret-right"></i> PUTAR VIDEO
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="slider-arrow-btn next" id="tokohNext"><i class="fas fa-chevron-right"></i></button>
    </div>`;

// Replace it
html = html.replace(oldTokohSection, newTokohSection);

// Update JS at the bottom
const oldJsBlock = `  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const track = document.getElementById('waliTrack');
      const prevBtn = document.getElementById('waliPrev');
      const nextBtn = document.getElementById('waliNext');
      
      if (track && prevBtn && nextBtn) {
        const scrollAmount = 305; // card width 280px + gap 25px
        
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

const newJsBlock = `  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // Walisantri Slider
      const waliTrack = document.getElementById('waliTrack');
      const waliPrev = document.getElementById('waliPrev');
      const waliNext = document.getElementById('waliNext');
      
      if (waliTrack && waliPrev && waliNext) {
        const scrollAmount = 305; // card width 280px + gap 25px
        
        waliPrev.addEventListener('click', () => {
          waliTrack.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
          });
        });
        
        waliNext.addEventListener('click', () => {
          waliTrack.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
          });
        });
      }

      // Tokoh Slider
      const tokohTrack = document.getElementById('tokohTrack');
      const tokohPrev = document.getElementById('tokohPrev');
      const tokohNext = document.getElementById('tokohNext');
      
      if (tokohTrack && tokohPrev && tokohNext) {
        tokohPrev.addEventListener('click', () => {
          const cardWidth = tokohTrack.offsetWidth;
          tokohTrack.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
          });
        });
        
        tokohNext.addEventListener('click', () => {
          const cardWidth = tokohTrack.offsetWidth;
          tokohTrack.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
          });
        });
      }
    });
  </script>`;

html = html.replace(oldJsBlock, newJsBlock);

// Increment cache buster for CSS to prevent aggressive caching
html = html.replace('testimoni.css?v=20260826b', 'testimoni.css?v=20260826c');

fs.writeFileSync('testimoni.html', html, 'utf8');
console.log('Patched testimoni.html');
