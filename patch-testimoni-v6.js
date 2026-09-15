const fs = require('fs');

let html = fs.readFileSync('testimoni.html', 'utf8');

// Replace the old slider track with the new track containing Dr. Adian Husaini as Slide 1
const oldSliderTrack = `<div class="tokoh-slider-track">
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

const newSliderTrack = `<div class="tokoh-slider-track">
          <!-- Slide 1: Ustadz Dr. Adian Husaini -->
          <div class="tokoh-slide">
            <div class="tokoh-card">
              <a href="https://youtube.com/shorts/Z2E19OGgif4?si=4znM0lKcqu_mbvbw" target="_blank" class="tokoh-video-area" style="text-decoration: none;">
                <div class="tokoh-play-btn">
                  <i class="fas fa-play"></i>
                </div>
                <div class="tokoh-play-label">
                  <i class="fas fa-caret-right"></i> PUTAR VIDEO
                </div>
              </a>
              <div class="tokoh-content">
                <i class="fas fa-quote-left tokoh-quote-icon"></i>
                <div class="tokoh-text">
                  Pendidikan sejati haruslah mengutamakan adab sebelum ilmu, guna melahirkan generasi pejuang yang berkarakter.
                </div>
                <div class="tokoh-author">
                  <div class="tokoh-name">Ustadz Dr. Adian Husaini</div>
                  <div class="tokoh-title">Ketua Dewan Da'wah Islamiyah Indonesia</div>
                </div>
              </div>
            </div>
          </div>
          <!-- Slide 2: Prof. Dr. Komaruddin Hidayat -->
          <div class="tokoh-slide">
            <div class="tokoh-card">
              <a href="https://www.youtube.com/results?search_query=Komaruddin+Hidayat" target="_blank" class="tokoh-video-area" style="text-decoration: none;">
                <div class="tokoh-play-btn">
                  <i class="fas fa-play"></i>
                </div>
                <div class="tokoh-play-label">
                  <i class="fas fa-caret-right"></i> PUTAR VIDEO
                </div>
              </a>
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
          <!-- Slide 3: KH. M. Cholil Nafis -->
          <div class="tokoh-slide">
            <div class="tokoh-card">
              <a href="https://www.youtube.com/results?search_query=Cholil+Nafis" target="_blank" class="tokoh-video-area" style="text-decoration: none;">
                <div class="tokoh-play-btn">
                  <i class="fas fa-play"></i>
                </div>
                <div class="tokoh-play-label">
                  <i class="fas fa-caret-right"></i> PUTAR VIDEO
                </div>
              </a>
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
          <!-- Slide 4: Prof. Dr. KH. Didin Hafidhuddin -->
          <div class="tokoh-slide">
            <div class="tokoh-card">
              <a href="https://www.youtube.com/results?search_query=Didin+Hafidhuddin" target="_blank" class="tokoh-video-area" style="text-decoration: none;">
                <div class="tokoh-play-btn">
                  <i class="fas fa-play"></i>
                </div>
                <div class="tokoh-play-label">
                  <i class="fas fa-caret-right"></i> PUTAR VIDEO
                </div>
              </a>
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

html = html.replace(oldSliderTrack, newSliderTrack);

// Update cache buster
html = html.replace('testimoni.css?v=20260826g', 'testimoni.css?v=20260826h');

fs.writeFileSync('testimoni.html', html, 'utf8');
console.log('Successfully patched testimoni.html');
