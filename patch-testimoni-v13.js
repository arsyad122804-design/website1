const fs = require('fs');

// 1. Update testimoni.css
let css = fs.readFileSync('testimoni.css', 'utf8');

// Modify the mobile media query for .tokoh-video-area to have height: 480px !important so controls are visible
const oldMobileVideoArea = `  .tokoh-video-area {
    flex: 0 0 200px !important;
    border-right: none !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
    min-height: 200px !important;
  }`;

const newMobileVideoArea = `  .tokoh-video-area {
    flex: none !important;
    width: 100% !important;
    height: 480px !important; /* Changed from 200px to 480px to show vertical video controls */
    border-right: none !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
    min-height: auto !important;
  }`;

css = css.replace(oldMobileVideoArea, newMobileVideoArea);

fs.writeFileSync('testimoni.css', css, 'utf8');
console.log('Updated testimoni.css mobile video area height');

// 2. Update testimoni.html to add id to video and add toggle play/pause script
let html = fs.readFileSync('testimoni.html', 'utf8');

// Add id="tokohVideo" to the video element
html = html.replace(
  '<video \n                  src="assets/video%20testimoni/WhatsApp%20Video%202026-08-24%20at%209.22.47%20AM%20(1).mp4"',
  '<video id="tokohVideo" \n                  src="assets/video%20testimoni/WhatsApp%20Video%202026-08-24%20at%209.22.47%20AM%20(1).mp4"'
);

// Append a script snippet to toggle play on clicking the video body
const oldScript = `      // Tokoh Slider`;
const newScript = `      // Toggle play/pause when clicking the video itself
      const videoEl = document.getElementById('tokohVideo');
      if (videoEl) {
        videoEl.addEventListener('click', () => {
          if (videoEl.paused) {
            videoEl.play();
          } else {
            videoEl.pause();
          }
        });
      }

      // Tokoh Slider`;

html = html.replace(oldScript, newScript);

// Update cache buster
html = html.replace('testimoni.css?v=20260826m', 'testimoni.css?v=20260826o');
html = html.replace('testimoni.css?v=20260826n', 'testimoni.css?v=20260826o');

fs.writeFileSync('testimoni.html', html, 'utf8');
console.log('Updated testimoni.html with video click trigger and cache buster');
