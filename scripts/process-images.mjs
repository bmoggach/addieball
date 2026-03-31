import { removeBackground } from '@imgly/background-removal-node';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const DOWNLOADS = path.join(process.env.HOME, 'Downloads');
const PUBLIC = path.join(process.cwd(), 'public/images');

async function removeBg(inputPath, outputPath, label) {
  console.log(`\n🎨 ${label}: Removing background...`);
  
  // First convert to sRGB PNG with sharp (fixes ICC profile issues)
  const preparedBuffer = await sharp(inputPath)
    .resize(2000, null, { withoutEnlargement: true })
    .toColorspace('srgb')
    .removeAlpha()
    .png()
    .toBuffer();
  
  console.log(`   📐 Pre-processed to ${(preparedBuffer.length / 1024 / 1024).toFixed(1)}MB PNG`);
  
  // Create a Blob from the buffer
  const blob = new Blob([preparedBuffer], { type: 'image/png' });
  
  const result = await removeBackground(blob, {
    model: 'medium',
    output: { format: 'image/png' },
  });
  
  const arrayBuffer = await result.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  
  console.log(`   ✂️  Background removed, saving...`);
  
  // Save the cutout
  await sharp(buffer)
    .png({ compressionLevel: 8 })
    .toFile(outputPath);
  
  const stats = fs.statSync(outputPath);
  console.log(`   ✅ Saved: ${outputPath} (${(stats.size / 1024 / 1024).toFixed(1)}MB)`);
}

async function optimizePhoto(inputPath, outputPath, label, width = 1600) {
  console.log(`📸 ${label}: Optimizing...`);
  await sharp(inputPath)
    .resize(width, null, { withoutEnlargement: true })
    .toColorspace('srgb')
    .jpeg({ quality: 85 })
    .toFile(outputPath);
  
  const stats = fs.statSync(outputPath);
  console.log(`   ✅ Saved: ${outputPath} (${(stats.size / 1024).toFixed(0)}KB)`);
}

async function main() {
  console.log('🏀 Addie Moggach Image Pipeline\n');
  console.log('================================\n');

  // 1. Background removal — HERO SHOT
  await removeBg(
    path.join(DOWNLOADS, '12g008.jpg'),
    path.join(PUBLIC, 'hero/addie-cutout.png'),
    'Hero cutout (solo portrait w/ ball)'
  );

  // 2. Background removal — ABOUT PAGE (flex pose)
  await removeBg(
    path.join(DOWNLOADS, '12g007.jpg'),
    path.join(PUBLIC, 'about/addie-flex-cutout.png'),
    'About page cutout (flex pose)'
  );

  // 3. Optimize studio shots for gallery
  await optimizePhoto(
    path.join(DOWNLOADS, '12g008.jpg'),
    path.join(PUBLIC, 'gallery/studio-portrait.jpg'),
    'Studio portrait (with background)'
  );

  await optimizePhoto(
    path.join(DOWNLOADS, '12g007.jpg'),
    path.join(PUBLIC, 'gallery/studio-flex.jpg'),
    'Studio flex (with background)'
  );

  await optimizePhoto(
    path.join(DOWNLOADS, '12g037.jpg'),
    path.join(PUBLIC, 'gallery/studio-piggyback.jpg'),
    'Studio piggyback'
  );

  // 4. Team photo
  await optimizePhoto(
    path.join(DOWNLOADS, 'u12ggroup 8x10.jpg'),
    path.join(PUBLIC, 'team/team-photo.jpg'),
    'Team photo',
    2400
  );

  // 5. Game action shots
  const actionShots = [
    { file: 'DSC02657.JPG', name: 'warmup.jpg', label: 'Warmup at Stadium' },
    { file: 'DSC02668.JPG', name: 'action-1.jpg', label: 'Action shot 1' },
    { file: 'DSC02687.JPG', name: 'action-2.jpg', label: 'Action shot 2' },
    { file: 'DSC02726.JPG', name: 'action-3.jpg', label: 'Action shot 3' },
    { file: 'DSC02727.JPG', name: 'action-4.jpg', label: 'Action shot 4' },
    { file: 'DSC02733.JPG', name: 'action-5.jpg', label: 'Action shot 5' },
    { file: 'DSC02971.JPG', name: 'huddle.jpg', label: 'Team huddle' },
    { file: 'DSC03051.JPG', name: 'postgame-smile.jpg', label: 'Post-game smile' },
  ];

  for (const shot of actionShots) {
    const inputPath = path.join(DOWNLOADS, shot.file);
    if (fs.existsSync(inputPath)) {
      await optimizePhoto(
        inputPath,
        path.join(PUBLIC, `action/${shot.name}`),
        shot.label
      );
    } else {
      console.log(`   ⚠️  Skipping ${shot.file} — not found`);
    }
  }

  console.log('\n================================');
  console.log('🏆 All images processed!\n');
  
  const countFiles = (dir) => {
    try { return fs.readdirSync(dir).length; } catch { return 0; }
  };
  
  console.log(`   hero/     ${countFiles(path.join(PUBLIC, 'hero'))} files`);
  console.log(`   about/    ${countFiles(path.join(PUBLIC, 'about'))} files`);
  console.log(`   gallery/  ${countFiles(path.join(PUBLIC, 'gallery'))} files`);
  console.log(`   team/     ${countFiles(path.join(PUBLIC, 'team'))} files`);
  console.log(`   action/   ${countFiles(path.join(PUBLIC, 'action'))} files`);
}

main().catch(console.error);
