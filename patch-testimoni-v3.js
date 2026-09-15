const fs = require('fs');

// 1. Update testimoni.css
let css = fs.readFileSync('testimoni.css', 'utf8');

// Replace .tokoh-card and .tokoh-image-wrap styles
css = css.replace(/\.tokoh-card \{[^]*?\}\n\.tokoh-content/g, `.tokoh-card {
  flex: 0 0 100%;
  width: 100%;
  background: var(--primary-navy);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  box-shadow: 0 25px 50px rgba(15, 32, 64, 0.25);
  box-sizing: border-box;
  margin-bottom: 0;
}
.tokoh-content`);

css = css.replace(/\.tokoh-image-wrap \{[^]*?\}\n\.tokoh-play-btn/g, `.tokoh-image-wrap {
  flex: 0 0 350px;
  position: relative;
  min-height: 350px;
  background-size: cover;
  background-position: center;
}
.tokoh-play-btn`);

// Add mobile responsive rule for tokoh-card at the bottom of CSS
const responsiveTokoh = `
@media (max-width: 768px) {
  .tokoh-card {
    flex-direction: column !important;
  }
  .tokoh-image-wrap {
    flex: 0 0 250px !important;
    width: 100% !important;
  }
}
`;
css += responsiveTokoh;

fs.writeFileSync('testimoni.css', css, 'utf8');
console.log('Updated testimoni.css');

// 2. Update testimoni.html HTML order
let html = fs.readFileSync('testimoni.html', 'utf8');

// Switch the image-wrap and content order so image is on the left
const oldTokohSlider = `<div class="tokoh-slider-track">
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
        </div>`;

const newTokohSlider = `<div class="tokoh-slider-track">
          <!-- Slide 1 -->
          <div class="tokoh-card">
            <div class="tokoh-image-wrap" style="background-image: url('assets/images/dokumentasi-1.jpg');">
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
            <div class="tokoh-image-wrap" style="background-image: url('assets/images/dokumentasi-2.jpg');">
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
            <div class="tokoh-image-wrap" style="background-image: url('assets/images/dokumentasi-3.jpg');">
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

html = html.replace(oldTokohSlider, newTokohSlider);

// Update cache buster
html = html.replace('testimoni.css?v=20260826c', 'testimoni.css?v=20260826e');

fs.writeFileSync('testimoni.html', html, 'utf8');
console.log('Patched testimoni.html');
