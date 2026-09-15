const fs = require('fs');
const path = require('path');

const rootDir = 'c:/website hibatullah';

// List of HTML files
const files = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

let modifiedCount = 0;

files.forEach(file => {
  const filePath = path.join(rootDir, file);
  let html = fs.readFileSync(filePath, 'utf8');

  const originalHtml = html;

  // Regex patterns for various breadcrumb div classes
  // e.g., <div class="...breadcrumb..."> ... </div>
  const breadcrumbRegexes = [
    /<div[^>]*class="[^"]*prog-breadcrumb[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/gi,
    /<div[^>]*class="[^"]*galeri-breadcrumb[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/gi,
    /<div[^>]*class="[^"]*pu-breadcrumb[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/gi,
    /<div[^>]*class="[^"]*skl-breadcrumb[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/gi,
    /<div[^>]*class="[^"]*ksdih-breadcrumb[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/gi,
    /<div[^>]*class="[^"]*ks-breadcrumb[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/gi,
    /<div[^>]*class="[^"]*kur-breadcrumb[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/gi,
    /<div[^>]*class="[^"]*ep-breadcrumb[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/gi,
    /<div[^>]*class="[^"]*berita-breadcrumb[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/gi,
    /<div[^>]*class="[^"]*breadcrumb-bar[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/gi,
    /<div[^>]*class="[^"]*breadcrumb[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/gi,
    /<div[^>]*class="[^"]*breadcrumb[^"]*"[^>]*>[\s\S]*?<\/div>/gi
  ];

  breadcrumbRegexes.forEach(regex => {
    html = html.replace(regex, '');
  });

  if (html !== originalHtml) {
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`Removed breadcrumb from: ${file}`);
    modifiedCount++;
  }
});

console.log(`Finished removing breadcrumbs from ${modifiedCount} HTML files.`);
