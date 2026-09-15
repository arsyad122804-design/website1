const fs = require('fs');

let html = fs.readFileSync('testimoni.html', 'utf8');

// We want to replace everything from <div class="walisantri-slider-outer"> up to the next </section> or <div class="footer-quote">
// Let's use a regex to match the walisantri slider block and the view all button wrap
const regex = /<div class="walisantri-slider-outer">[\s\S]*?<div class="view-all-btn-wrap">[\s\S]*?<\/div>\s*(?=<div class="footer-quote">)/;

if (regex.test(html)) {
  html = html.replace(regex, `<div class="coming-soon-box">
      <i class="fas fa-hourglass-half coming-soon-icon"></i>
      <h3>Coming Soon</h3>
      <p>Testimoni dari para walisantri sedang dalam proses penyusunan dan akan segera kami tampilkan di sini.</p>
    </div>\n\n    `);
  
  // Also make sure cache buster is updated to v20260826n
  html = html.replace(/testimoni\.css\?v=[a-z0-9]+/g, 'testimoni.css?v=20260826n');
  
  fs.writeFileSync('testimoni.html', html, 'utf8');
  console.log('Successfully patched testimoni.html using robust regex!');
} else {
  console.error('Error: Could not match the Walisantri block with regex.');
}
