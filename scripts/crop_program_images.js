const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcPath = 'C:/Users/winX/.gemini/antigravity/brain/3e4b8c4a-1474-4161-b301-8258b065bc4c/.user_uploaded/media_1788850085936.jpg';
const outDir = 'c:/website hibatullah/assets/images/program';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Exact card illustration positions without catching card title text below
const cols = [50, 313, 576];
const rows = [58, 244, 430, 616, 802];

async function cropAll() {
  let count = 1;
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 3; c++) {
      if (r === 4 && c >= 1) continue; // Row 4 col 1-2 is Card 14 banner
      
      const left = cols[c] + 105;
      const top = rows[r];
      const width = 142;
      const height = 66;

      await sharp(srcPath)
        .extract({ left, top, width, height })
        .toFile(path.join(outDir, `card-img-${count}.png`));
      
      count++;
    }
  }

  // Banner Card 14 full image / background
  await sharp(srcPath)
    .extract({ left: 318, top: 802, width: 505, height: 168 })
    .toFile(path.join(outDir, `banner-card-14.png`));

  console.log('Precise crop completed');
}

cropAll().catch(console.error);
