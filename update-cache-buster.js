const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const vStr = 'v=20260918_v102';
  content = content.replace(/navbar\.js(\?v=[^"'\s>]*)?/g, `navbar.js?${vStr}`);
  content = content.replace(/script\.js(\?v=[^"'\s>]*)?/g, `script.js?${vStr}`);
  content = content.replace(/animations\.js(\?v=[^"'\s>]*)?/g, `animations.js?${vStr}`);
  content = content.replace(/style\.css(\?v=[^"'\s>]*)?/g, `style.css?${vStr}`);
  content = content.replace(/navbar\.css(\?v=[^"'\s>]*)?/g, `navbar.css?${vStr}`);
  content = content.replace(/media-sosial\.css(\?v=[^"'\s>]*)?/g, `media-sosial.css?${vStr}`);
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Updated cache busters v20260918_v102 in all HTML files.');
