const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'galeri.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Replace the contents of galeri-overlay so it becomes empty
const cleanedHtml = htmlContent.replace(/<div class="galeri-overlay"><span>.*?<\/span><\/div>/g, '<div class="galeri-overlay"></div>');

fs.writeFileSync(htmlPath, cleanedHtml, 'utf8');
console.log('Removed captions from overlays.');
