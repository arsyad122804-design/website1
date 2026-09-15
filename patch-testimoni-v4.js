const fs = require('fs');

// 1. Update testimoni.css
let css = fs.readFileSync('testimoni.css', 'utf8');

// Define the updated tokoh slider CSS classes
const updatedTokohStyles = `
/* Tokoh Slider CSS (Portrait Redesign) */
.tokoh-slider-outer {
  position: relative;
  max-width: 100%;
  margin: 0 auto 30px;
  padding: 0 40px; /* space for arrows */
}
.tokoh-slider-track-wrapper {
  overflow-x: auto;
  scroll-behavior: smooth;
  border-radius: 24px;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}
.tokoh-slider-track-wrapper::-webkit-scrollbar {
  display: none;
}
.tokoh-slider-track {
  display: flex;
  width: 100%;
}
.tokoh-slide {
  flex: 0 0 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  padding: 10px 0;
}
.tokoh-card {
  background: var(--primary-navy);
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column; /* Portrait layout */
  width: 380px; /* Portrait width */
  max-width: 100%;
  box-shadow: 0 15px 35px rgba(15, 32, 64, 0.2);
  box-sizing: border-box;
  text-align: center;
  transition: transform 0.3s;
}
.tokoh-card:hover {
  transform: translateY(-5px);
}
.tokoh-image-wrap {
  width: 100%;
  height: 280px; /* fixed height for portrait top */
  position: relative;
  background-size: cover;
  background-position: center top;
}
.tokoh-content {
  padding: 30px 25px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.tokoh-quote-icon {
  color: var(--primary-gold);
  font-size: 30px;
  margin-bottom: 15px;
}
.tokoh-text {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 25px;
  color: #F8FAFC;
}
.tokoh-author {
  position: relative;
  padding-left: 0;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 15px;
  width: 100%;
}
.tokoh-author::before {
  display: none; /* remove left border line */
}
.tokoh-name {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 5px;
  color: var(--primary-gold);
}
.tokoh-title {
  color: #94A3B8;
  font-size: 0.85rem;
  line-height: 1.4;
}
.tokoh-slider-outer .slider-arrow-btn.prev {
  left: -10px;
}
.tokoh-slider-outer .slider-arrow-btn.next {
  right: -10px;
}
`;

// Remove the old Tokoh Slider CSS at the bottom of testimoni.css
css = css.split('/* Tokoh Slider CSS */')[0];
// Append updated portrait styles
css += updatedTokohStyles;

fs.writeFileSync('testimoni.css', css, 'utf8');
console.log('Updated testimoni.css');

// 2. Update testimoni.html HTML structure
let html = fs.readFileSync('testimoni.html', 'utf8');

const oldTokohSlider = `<div class="tokoh-slider-track">
          <!-- Slide 1 -->
          <div class="tokoh-card">
            <div class="tokoh-image-wrap" style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/e/e0/Komarudin_Hidayat.jpg');">
              <div class="tokoh-play-btn">
                <i class="fas fa-play"></i>
              </div>
              <div class="tokoh-play-label">
                <i class="fas fa-caret-right"></i> PUTAR VIDEO
              </div>
            </div>
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
          </div>
          <!-- Slide 2 -->
          <div class="tokoh-card">
            <div class="tokoh-image-wrap" style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/a/ab/Cholilnafis.jpg');">
              <div class="tokoh-play-btn">
                <i class="fas fa-play"></i>
              </div>
              <div class="tokoh-play-label">
                <i class="fas fa-caret-right"></i> PUTAR VIDEO
              </div>
            </div>
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
          </div>
          <!-- Slide 3 -->
          <div class="tokoh-card">
            <div class="tokoh-image-wrap" style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/4/43/Didin_Hafidhuddin%2C_Ketua_Baznas.jpg');">
              <div class="tokoh-play-btn">
                <i class="fas fa-play"></i>
              </div>
              <div class="tokoh-play-label">
                <i class="fas fa-caret-right"></i> PUTAR VIDEO
              </div>
            </div>
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
          </div>
        </div>`;

const newTokohSlider = `<div class="tokoh-slider-track">
          <!-- Slide 1 -->
          <div class="tokoh-slide">
            <div class="tokoh-card">
              <div class="tokoh-image-wrap" style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/e/e0/Komarudin_Hidayat.jpg');">
                <div class="tokoh-play-btn">
                  <i class="fas fa-play"></i>
                </div>
                <div class="tokoh-play-label">
                  <i class="fas fa-caret-right"></i> PUTAR VIDEO
                </div>
              </div>
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
            </div>
          </div>
          <!-- Slide 2 -->
          <div class="tokoh-slide">
            <div class="tokoh-card">
              <div class="tokoh-image-wrap" style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/a/ab/Cholilnafis.jpg');">
                <div class="tokoh-play-btn">
                  <i class="fas fa-play"></i>
                </div>
                <div class="tokoh-play-label">
                  <i class="fas fa-caret-right"></i> PUTAR VIDEO
                </div>
              </div>
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
            </div>
          </div>
          <!-- Slide 3 -->
          <div class="tokoh-slide">
            <div class="tokoh-card">
              <div class="tokoh-image-wrap" style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/4/43/Didin_Hafidhuddin%2C_Ketua_Baznas.jpg');">
                <div class="tokoh-play-btn">
                  <i class="fas fa-play"></i>
                </div>
                <div class="tokoh-play-label">
                  <i class="fas fa-caret-right"></i> PUTAR VIDEO
                </div>
              </div>
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
            </div>
          </div>
        </div>`;

html = html.replace(oldTokohSlider, newTokohSlider);

// Update cache buster
html = html.replace('testimoni.css?v=20260826e', 'testimoni.css?v=20260826f');

fs.writeFileSync('testimoni.html', html, 'utf8');
console.log('Patched testimoni.html');
