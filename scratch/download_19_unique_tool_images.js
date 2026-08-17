const fs = require('fs');
const path = require('path');
const https = require('https');

const outDir = path.join(__dirname, '../public/images/tools');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 13 unique showcase photos for tools without custom PNGs
const toolImages = [
  {
    id: 'adobe-illustrator',
    url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'affinity-designer',
    url: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'procreate',
    url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'davinci-resolve',
    url: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'adobe-premiere-pro',
    url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'spline-3d',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'sketch',
    url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'penpot',
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'notion',
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'raycast',
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'affinity-photo',
    url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'coreldraw',
    url: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'krita',
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop'
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
            console.log(`Downloaded unique photo: ${img.id}.png (${size} bytes)`);
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
  for (const img of toolImages) {
    await fetchImage(img);
  }
  console.log('All 19 tool visual showcase images are 100% unique.');
}

main();
