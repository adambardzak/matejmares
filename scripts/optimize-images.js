const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const HERO_DIR = path.join(__dirname, '../public/hero');
const OPTIMIZED_DIR = path.join(__dirname, '../public/hero-optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR);
}

async function optimizeImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(1920, null, { // Resize to 1920px width, maintain aspect ratio
        withoutEnlargement: true, // Don't enlarge if image is smaller
        fit: 'inside'
      })
      .webp({ // Convert to WebP
        quality: 80, // Good balance between quality and size
        effort: 6 // Higher effort = better compression
      })
      .toFile(outputPath);

    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);

    console.log(`Optimized ${path.basename(inputPath)}:`);
    console.log(`  Original size: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`  Optimized size: ${(optimizedSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`  Reduction: ${reduction}%`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
  }
}

async function optimizeAllImages() {
  const files = fs.readdirSync(HERO_DIR);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
  );

  console.log(`Found ${imageFiles.length} images to optimize`);

  for (const file of imageFiles) {
    const inputPath = path.join(HERO_DIR, file);
    const outputPath = path.join(
      OPTIMIZED_DIR, 
      path.basename(file, path.extname(file)) + '.webp'
    );
    await optimizeImage(inputPath, outputPath);
  }

  console.log('\nOptimization complete!');
  console.log(`Optimized images are in: ${OPTIMIZED_DIR}`);
}

optimizeAllImages(); 