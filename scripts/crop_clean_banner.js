const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcPath = 'C:/Users/winX/.gemini/antigravity/brain/3e4b8c4a-1474-4161-b301-8258b065bc4c/.user_uploaded/media_1788850085936.jpg';
const outDir = 'c:/website hibatullah/assets/images/program';

async function cropCleanBanner() {
  // Extract ONLY the mosque arch & lantern visual starting at x = 585 (completely clear of any text)
  const width = 238;
  const height = 168;
  
  const mosqueBuffer = await sharp(srcPath)
    .extract({ left: 585, top: 802, width, height })
    .toBuffer();

  // Create a gradient mask to fade the left edge of the mosque image into transparent
  // Mask width = 238, height = 168
  const maskPixels = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      // Fade alpha from 0 at x=0 to 255 at x=80
      let alpha = 255;
      if (x < 80) {
        alpha = Math.round((x / 80) * 255);
      }
      maskPixels[idx] = 255;     // R
      maskPixels[idx + 1] = 255; // G
      maskPixels[idx + 2] = 255; // B
      maskPixels[idx + 3] = alpha; // A
    }
  }

  const maskImage = await sharp(maskPixels, {
    raw: { width, height, channels: 4 }
  }).png().toBuffer();

  // Apply mask to mosque visual
  const fadedMosque = await sharp(mosqueBuffer)
    .composite([{ input: maskImage, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Place on solid navy (#092340) canvas of size 505x168
  await sharp({
    create: {
      width: 505,
      height: 168,
      channels: 4,
      background: { r: 9, g: 35, b: 64, alpha: 1 }
    }
  })
  .composite([{ input: fadedMosque, left: 505 - width, top: 0 }])
  .png()
  .toFile(path.join(outDir, 'banner-card-14.png'));

  console.log('100% clean seamless banner background created!');
}

cropCleanBanner().catch(console.error);
