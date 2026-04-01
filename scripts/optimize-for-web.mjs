import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC = path.join(process.cwd(), 'public/images');

async function optimizeImage(filePath, label) {
  const ext = path.extname(filePath).toLowerCase();
  const stats = fs.statSync(filePath);
  const beforeKB = (stats.size / 1024).toFixed(0);

  if (ext === '.png') {
    // Convert PNG to WebP (keep PNG for fallback but create WebP)
    const webpPath = filePath.replace('.png', '.webp');
    await sharp(filePath)
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);
    const after = fs.statSync(webpPath);
    console.log(`✅ ${label}: ${beforeKB}KB PNG → ${(after.size / 1024).toFixed(0)}KB WebP`);
  } else if (ext === '.jpg' || ext === '.jpeg') {
    // Re-compress JPEGs more aggressively + create WebP
    const webpPath = filePath.replace(/\.jpe?g$/i, '.webp');
    const tempPath = filePath + '.tmp';

    // Optimize JPEG
    await sharp(filePath)
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(tempPath);
    fs.renameSync(tempPath, filePath);

    // Also create WebP
    await sharp(filePath)
      .webp({ quality: 78, effort: 6 })
      .toFile(webpPath);

    const afterJpg = fs.statSync(filePath);
    const afterWebp = fs.statSync(webpPath);
    console.log(`✅ ${label}: ${beforeKB}KB → ${(afterJpg.size / 1024).toFixed(0)}KB JPEG / ${(afterWebp.size / 1024).toFixed(0)}KB WebP`);
  }
}

async function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      await walkDir(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file) && !file.endsWith('.webp')) {
      await optimizeImage(filePath, file);
    }
  }
}

console.log('🚀 Optimizing images for web...\n');
await walkDir(PUBLIC);

// Summary
let totalOrig = 0, totalWebp = 0;
function sumDir(dir) {
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) { sumDir(fp); continue; }
    const size = fs.statSync(fp).size;
    if (f.endsWith('.webp')) totalWebp += size;
    else totalOrig += size;
  }
}
sumDir(PUBLIC);
console.log(`\n📊 Original formats: ${(totalOrig / 1024 / 1024).toFixed(1)}MB`);
console.log(`📊 WebP versions: ${(totalWebp / 1024 / 1024).toFixed(1)}MB`);
console.log(`📊 Savings: ${((1 - totalWebp / totalOrig) * 100).toFixed(0)}% smaller with WebP`);
