const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  // replace navbar.js?v=... with navbar.js?v=20260826
  content = content.replace(/navbar\.js\?v=\d+/g, 'navbar.js?v=20260826');
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Updated navbar.js cache busters in HTML files.');
