const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/navbar\.js(\?v=[^"'\s>]*)?/g, 'navbar.js?v=20260915_v4');
  content = content.replace(/style\.css(\?v=[^"'\s>]*)?/g, 'style.css?v=20260915_v4');
  content = content.replace(/navbar\.css(\?v=[^"'\s>]*)?/g, 'navbar.css?v=20260915_v4');
  content = content.replace(/stakeholders\.css(\?v=[^"'\s>]*)?/g, 'stakeholders.css?v=20260915_v4');
  content = content.replace(/penasehat\.css(\?v=[^"'\s>]*)?/g, 'penasehat.css?v=20260915_v4');
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Updated cache busters v4 in all HTML files.');
