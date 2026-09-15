const fs = require('fs');

let html = fs.readFileSync('testimoni.html', 'utf8');

// Replace the video area of Slide 1 to embed the YouTube Short video inside an iframe
const oldSlide1Video = `<a href="https://youtube.com/shorts/Z2E19OGgif4?si=4znM0lKcqu_mbvbw" target="_blank" class="tokoh-video-area" style="text-decoration: none;">
                <div class="tokoh-play-btn">
                  <i class="fas fa-play"></i>
                </div>
                <div class="tokoh-play-label">
                  <i class="fas fa-caret-right"></i> PUTAR VIDEO
                </div>
              </a>`;

const newSlide1Video = `<div class="tokoh-video-area" style="padding: 0; overflow: hidden;">
                <iframe 
                  src="https://www.youtube.com/embed/Z2E19OGgif4" 
                  style="width: 100%; height: 100%; min-height: 320px; border: none;" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen>
                </iframe>
              </div>`;

html = html.replace(oldSlide1Video, newSlide1Video);

// Update cache buster
html = html.replace('testimoni.css?v=20260826g', 'testimoni.css?v=20260826i');
html = html.replace('testimoni.css?v=20260826h', 'testimoni.css?v=20260826i');

fs.writeFileSync('testimoni.html', html, 'utf8');
console.log('Successfully embedded YouTube Shorts player in testimoni.html');
