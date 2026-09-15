const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'galeri.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

let cleanedHtml = htmlContent;

const regex = /<div class="galeri-item"[^>]*>\s*<img\s+src="([^"]+)"[^>]*>\s*<div class="galeri-overlay">.*?<\/div>\s*<\/div>/g;
let match;
let removedCount = 0;

while ((match = regex.exec(htmlContent)) !== null) {
  const imgSrc = match[1];
  const imagePath = path.join(__dirname, imgSrc);
  
  if (!fs.existsSync(imagePath)) {
    console.log('Missing image, removing block:', imgSrc);
    cleanedHtml = cleanedHtml.replace(match[0], '');
    removedCount++;
  }
}

fs.writeFileSync(htmlPath, cleanedHtml, 'utf8');
console.log('Removed ' + removedCount + ' broken gallery items.');
