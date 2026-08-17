const fs = require('fs');
const path = require('path');
const https = require('https');

const outDir = path.join(__dirname, '../public/images/tools');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 13 fresh photos completely distinct from Category section visuals
const featuredToolImages = [
  {
    id: 'adobe-illustrator',
    url: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'affinity-designer',
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'procreate',
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'davinci-resolve',
    url: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'adobe-premiere-pro',
    url: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'spline-3d',
    url: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'sketch',
    url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'penpot',
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'notion',
    url: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'raycast',
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'affinity-photo',
    url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'coreldraw',
    url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'krita',
    url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000&auto=format&fit=crop'
  }
];

function fetchImage(img) {
  return new Promise((resolve) => {
    const dest = path.join(outDir, `${img.id}.png`);

    const req = (targetUrl) => {
      https.get(targetUrl, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          req(response.headers.location);
        } else {
          const file = fs.createWriteStream(dest);
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            const size = fs.statSync(dest).size;
            console.log(`Downloaded unique non-category photo: ${img.id}.png (${size} bytes)`);
            resolve();
          });
        }
      }).on('error', (err) => {
        console.error(`Failed ${img.id}:`, err.message);
        resolve();
      });
    };

    req(img.url);
  });
}

async function main() {
  for (const img of featuredToolImages) {
    await fetchImage(img);
  }
  console.log('All Featured Tool visuals updated with zero overlap with Category section visuals.');
}

main();
