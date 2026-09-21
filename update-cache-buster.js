const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
const vStr = 'v=20260921_v164';

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/navbar\.js(\?v=[^"'\s>]*)?/g, `navbar.js?${vStr}`);
  content = content.replace(/script\.js(\?v=[^"'\s>]*)?/g, `script.js?${vStr}`);
  content = content.replace(/mobile-nav\.js(\?v=[^"'\s>]*)?/g, `mobile-nav.js?${vStr}`);
  content = content.replace(/site-footer\.js(\?v=[^"'\s>]*)?/g, `site-footer.js?${vStr}`);
  content = content.replace(/visitor-tracker\.js(\?v=[^"'\s>]*)?/g, `visitor-tracker.js?${vStr}`);
  content = content.replace(/animations\.js(\?v=[^"'\s>]*)?/g, `animations.js?${vStr}`);
  content = content.replace(/style\.css(\?v=[^"'\s>]*)?/g, `style.css?${vStr}`);
  content = content.replace(/navbar\.css(\?v=[^"'\s>]*)?/g, `navbar.css?${vStr}`);
  content = content.replace(/media-sosial\.css(\?v=[^"'\s>]*)?/g, `media-sosial.css?${vStr}`);
  content = content.replace(/galeri\.css(\?v=[^"'\s>]*)?/g, `galeri.css?${vStr}`);
  content = content.replace(/ppdb\.css(\?v=[^"'\s>]*)?/g, `ppdb.css?${vStr}`);
  content = content.replace(/asrama\.css(\?v=[^"'\s>]*)?/g, `asrama.css?${vStr}`);
  content = content.replace(/footer\.css(\?v=[^"'\s>]*)?/g, `footer.css?${vStr}`);
  content = content.replace(/faq\.css(\?v=[^"'\s>]*)?/g, `faq.css?${vStr}`);
  content = content.replace(/testimoni\.css(\?v=[^"'\s>]*)?/g, `testimoni.css?${vStr}`);
  content = content.replace(/entrepreneurship\.css(\?v=[^"'\s>]*)?/g, `entrepreneurship.css?${vStr}`);
  content = content.replace(/penasehat\.css(\?v=[^"'\s>]*)?/g, `penasehat.css?${vStr}`);
  content = content.replace(/virtual-tour\.css(\?v=[^"'\s>]*)?/g, `virtual-tour.css?${vStr}`);
  fs.writeFileSync(filePath, content, 'utf8');
});

// Update script.js dynamic loader queries
const scriptJsPath = path.join(dir, 'script.js');
if (fs.existsSync(scriptJsPath)) {
  let sContent = fs.readFileSync(scriptJsPath, 'utf8');
  sContent = sContent.replace(/mobile-nav\.js(\?v=[^"'\s>]*)?/g, `mobile-nav.js?${vStr}`);
  sContent = sContent.replace(/site-footer\.js(\?v=[^"'\s>]*)?/g, `site-footer.js?${vStr}`);
  sContent = sContent.replace(/visitor-tracker\.js(\?v=[^"'\s>]*)?/g, `visitor-tracker.js?${vStr}`);
  fs.writeFileSync(scriptJsPath, sContent, 'utf8');
}

console.log(`Updated cache busters to ${vStr} for ALL CSS, JS, and script.js dynamic loaders.`);
