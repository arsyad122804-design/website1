const fs = require('fs');

let html = fs.readFileSync('testimoni.html', 'utf8');

// Replace the iframe video area with a local HTML5 video tag pointing to the MP4 file
const oldVideoArea = `<div class="tokoh-video-area" style="padding: 0; overflow: hidden;">
                <iframe 
                  src="https://www.youtube.com/embed/Z2E19OGgif4" 
                  style="width: 100%; height: 100%; min-height: 320px; border: none;" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen>
                </iframe>
              </div>`;

const newVideoArea = `<div class="tokoh-video-area" style="padding: 0; overflow: hidden; background: black; display: flex; align-items: center; justify-content: center;">
                <video 
                  src="assets/video%20testimoni/WhatsApp%20Video%202026-08-24%20at%209.22.47%20AM%20(1).mp4" 
                  controls 
                  style="width: 100%; height: 100%; object-fit: cover; min-height: 320px;">
                </video>
              </div>`;

html = html.replace(oldVideoArea, newVideoArea);

// Update cache buster
html = html.replace('testimoni.css?v=20260826i', 'testimoni.css?v=20260826j');

fs.writeFileSync('testimoni.html', html, 'utf8');
console.log('Successfully patched testimoni.html to use local video');
