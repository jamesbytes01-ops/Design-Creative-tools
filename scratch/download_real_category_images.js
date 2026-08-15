const fs = require('fs');
const path = require('path');
const https = require('https');

const outDir = path.join(__dirname, '../public/images/categories/real');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const images = [
  {
    id: 'graphic-design',
    url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'ui-ux-design',
    url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'photo-editing',
    url: 'https://images.unsplash.com/photo-1542744094-3a3121699566?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'video-motion',
    url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'illustration',
    url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '3d-animation',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'ai-creative-tools',
    url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'productivity',
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'cybersecurity',
    url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop'
  }
];

function downloadImage(img) {
  return new Promise((resolve, reject) => {
    const dest = path.join(outDir, `${img.id}.jpg`);
    const file = fs.createWriteStream(dest);

    https.get(img.url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, (redirectResp) => {
          redirectResp.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${img.id}.jpg`);
            resolve();
          });
        });
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${img.id}.jpg`);
          resolve();
        });
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      console.error(`Error downloading ${img.id}:`, err.message);
      resolve();
    });
  });
}

async function main() {
  for (const img of images) {
    await downloadImage(img);
  }
  console.log('All downloads completed!');
}

main();
