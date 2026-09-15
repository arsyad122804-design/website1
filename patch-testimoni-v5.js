const fs = require('fs');

// 1. Update testimoni.css
let css = fs.readFileSync('testimoni.css', 'utf8');

// Replace Tokoh Slider CSS at the bottom of testimoni.css
css = css.split('/* Tokoh Slider CSS (Portrait Redesign) */')[0];

const cleanLandscapeStyles = `
/* Tokoh Slider CSS (Clean Landscape Redesign) */
.tokoh-slider-outer {
  position: relative;
  max-width: 100%;
  margin: 0 auto 30px;
  padding: 0 50px; /* space for arrows */
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
  padding: 15px 0;
}
.tokoh-card {
  background: var(--primary-navy);
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: row; /* Landscape layout */
  width: 900px; /* Exact width as mock */
  max-width: 100%;
  box-shadow: 0 20px 40px rgba(15, 32, 64, 0.2);
  box-sizing: border-box;
}
.tokoh-video-area {
  flex: 0 0 260px;
  background: rgba(255, 255, 255, 0.03); /* slightly lighter navy background */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  min-height: 320px;
}
.tokoh-play-btn {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-gold);
  font-size: 30px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  cursor: pointer;
  padding-left: 5px;
  transition: transform 0.3s;
  margin-bottom: 20px;
}
.tokoh-play-btn:hover {
  transform: scale(1.1);
}
.tokoh-play-label {
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.tokoh-content {
  flex: 1;
  padding: 50px 60px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}
.tokoh-quote-icon {
  color: var(--primary-gold);
  font-size: 36px;
  margin-bottom: 20px;
}
.tokoh-text {
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 30px;
  color: #F8FAFC;
}
.tokoh-author {
  position: relative;
  padding-left: 20px;
}
.tokoh-author::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
  background: var(--primary-gold);
  border-radius: 2px;
}
.tokoh-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 4px;
  color: white;
}
.tokoh-title {
  color: #94A3B8;
  font-size: 0.9rem;
  line-height: 1.4;
}
.tokoh-slider-outer .slider-arrow-btn.prev {
  left: 0;
}
.tokoh-slider-outer .slider-arrow-btn.next {
  right: 0;
}

@media (max-width: 768px) {
  .tokoh-card {
    flex-direction: column !important;
    width: 100% !important;
  }
  .tokoh-video-area {
    flex: 0 0 200px !important;
    border-right: none !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
    min-height: 200px !important;
  }
  .tokoh-content {
    padding: 30px 20px !important;
  }
  .tokoh-text {
    font-size: 1.4rem !important;
  }
}
`;

css += cleanLandscapeStyles;
fs.writeFileSync('testimoni.css', css, 'utf8');
console.log('Updated testimoni.css');

// 2. Update testimoni.html HTML structure
let html = fs.readFileSync('testimoni.html', 'utf8');

const oldTokohSlider = `<div class="tokoh-slider-track">
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

const newTokohSlider = `<div class="tokoh-slider-track">
          <!-- Slide 1 -->
          <div class="tokoh-slide">
            <div class="tokoh-card">
              <div class="tokoh-video-area">
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
              <div class="tokoh-video-area">
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
              <div class="tokoh-video-area">
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
html = html.replace('testimoni.css?v=20260826f', 'testimoni.css?v=20260826g');

fs.writeFileSync('testimoni.html', html, 'utf8');
console.log('Patched testimoni.html');
