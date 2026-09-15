const fs = require('fs');

let html = fs.readFileSync('testimoni.html', 'utf8');

// Replace the entire tokoh-slider-outer block to keep only Ustadz Dr. Adian Husaini and remove slide arrows
const oldTokohSliderOuter = `<div class="tokoh-slider-outer">
      <button class="slider-arrow-btn prev" id="tokohPrev"><i class="fas fa-chevron-left"></i></button>
      <div class="tokoh-slider-track-wrapper" id="tokohTrack">
        <div class="tokoh-slider-track">
          <!-- Slide 1: Ustadz Dr. Adian Husaini -->
          <div class="tokoh-slide">
            <div class="tokoh-card">
              <div class="tokoh-video-area" style="padding: 0; overflow: hidden; background: black; display: flex; align-items: center; justify-content: center;">
                <video 
                  src="assets/video%20testimoni/WhatsApp%20Video%202026-08-24%20at%209.22.47%20AM%20(1).mp4" 
                  controls 
                  style="width: 100%; height: 100%; object-fit: cover; min-height: 320px;">
                </video>
              </div>
              <div class="tokoh-content">
              <div class="tokoh-author-large">
                <div class="tokoh-name-large">Ustadz Dr. Adian Husaini</div>
                <div class="tokoh-title-large">Ketua Dewan Da'wah Islamiyah Indonesia</div>
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
        </div>
      </div>
      <button class="slider-arrow-btn next" id="tokohNext"><i class="fas fa-chevron-right"></i></button>
    </div>`;

const newTokohSliderOuter = `<div class="tokoh-slider-outer" style="padding: 0;">
      <div class="tokoh-slider-track-wrapper" id="tokohTrack">
        <div class="tokoh-slider-track">
          <!-- Slide 1: Ustadz Dr. Adian Husaini (Satu-satunya tokoh) -->
          <div class="tokoh-slide">
            <div class="tokoh-card">
              <div class="tokoh-video-area" style="padding: 0; overflow: hidden; background: black; display: flex; align-items: center; justify-content: center;">
                <video 
                  src="assets/video%20testimoni/WhatsApp%20Video%202026-08-24%20at%209.22.47%20AM%20(1).mp4" 
                  controls 
                  style="width: 100%; height: 100%; object-fit: cover; min-height: 320px;">
                </video>
              </div>
              <div class="tokoh-content">
                <div class="tokoh-author-large">
                  <div class="tokoh-name-large">Ustadz Dr. Adian Husaini</div>
                  <div class="tokoh-title-large">Ketua Dewan Da'wah Islamiyah Indonesia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

html = html.replace(oldTokohSliderOuter, newTokohSliderOuter);

// Update cache buster
html = html.replace('testimoni.css?v=20260826k', 'testimoni.css?v=20260826l');

fs.writeFileSync('testimoni.html', html, 'utf8');
console.log('Successfully removed other slides and arrows from testimoni.html');
