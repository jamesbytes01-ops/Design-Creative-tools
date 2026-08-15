const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../public/images/categories/new');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const categories = [
  {
    id: 'graphic-design',
    title: 'GRAPHIC DESIGN',
    bg1: '#4F46E5',
    bg2: '#EC4899',
    accent1: '#F59E0B',
    accent2: '#10B981',
    svgContent: `
      <rect width="800" height="400" fill="url(#bgGrad)" />
      <circle cx="150" cy="80" r="140" fill="#EC4899" opacity="0.3" filter="blur(40px)" />
      <circle cx="650" cy="320" r="160" fill="#4F46E5" opacity="0.35" filter="blur(50px)" />
      
      <!-- 3D Vector Canvas Artboard -->
      <g transform="translate(160, 60)">
        <rect x="0" y="0" width="480" height="280" rx="20" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" stroke-width="2" style="backdrop-filter:blur(20px);" />
        
        <!-- Palette Swatches -->
        <rect x="40" y="40" width="80" height="120" rx="12" fill="#4F46E5" filter="drop-shadow(0 10px 20px rgba(0,0,0,0.3))" />
        <rect x="140" y="40" width="80" height="120" rx="12" fill="#EC4899" filter="drop-shadow(0 10px 20px rgba(0,0,0,0.3))" />
        <rect x="240" y="40" width="80" height="120" rx="12" fill="#F59E0B" filter="drop-shadow(0 10px 20px rgba(0,0,0,0.3))" />
        <rect x="340" y="40" width="80" height="120" rx="12" fill="#10B981" filter="drop-shadow(0 10px 20px rgba(0,0,0,0.3))" />
        
        <!-- Bezier Vector Path -->
        <path d="M40 220 Q 240 120, 440 220" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" fill="none" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.4))" />
        <circle cx="240" cy="170" r="14" fill="#EC4899" stroke="#FFFFFF" stroke-width="4" />
      </g>
    `
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX DESIGN',
    bg1: '#7C3AED',
    bg2: '#3B82F6',
    accent1: '#8B5CF6',
    accent2: '#60A5FA',
    svgContent: `
      <rect width="800" height="400" fill="url(#bgGrad)" />
      <circle cx="200" cy="100" r="150" fill="#3B82F6" opacity="0.35" filter="blur(50px)" />
      
      <!-- 3D Glass Dashboard Interface -->
      <g transform="translate(140, 50)">
        <rect x="0" y="0" width="520" height="300" rx="20" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.45)" stroke-width="2" />
        
        <!-- Header Bar -->
        <rect x="20" y="20" width="480" height="36" rx="10" fill="rgba(255,255,255,0.2)" />
        <circle cx="45" cy="38" r="6" fill="#EF4444" />
        <circle cx="65" cy="38" r="6" fill="#F59E0B" />
        <circle cx="85" cy="38" r="6" fill="#10B981" />
        
        <!-- Grid Content Cards -->
        <rect x="20" y="76" width="140" height="204" rx="12" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" />
        <rect x="180" y="76" width="320" height="120" rx="12" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.3)" />
        <rect x="180" y="212" width="150" height="68" rx="10" fill="#8B5CF6" />
        <rect x="350" y="212" width="150" height="68" rx="10" fill="#3B82F6" />
      </g>
    `
  },
  {
    id: 'photo-editing',
    title: 'PHOTO EDITING',
    bg1: '#0284C7',
    bg2: '#06B6D4',
    accent1: '#38BDF8',
    accent2: '#3B82F6',
    svgContent: `
      <rect width="800" height="400" fill="url(#bgGrad)" />
      <circle cx="400" cy="200" r="180" fill="#06B6D4" opacity="0.4" filter="blur(60px)" />
      
      <!-- Camera Lens & Viewfinder Spectrum -->
      <g transform="translate(400, 200)">
        <circle cx="0" cy="0" r="130" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="4" stroke-dasharray="10 10" />
        <circle cx="0" cy="0" r="100" fill="rgba(255,255,255,0.15)" stroke="#FFFFFF" stroke-width="5" filter="drop-shadow(0 12px 30px rgba(0,0,0,0.3))" />
        <circle cx="0" cy="0" r="50" fill="rgba(255,255,255,0.25)" stroke="#FFFFFF" stroke-width="3" />
        <circle cx="20" cy="-20" r="16" fill="#FFFFFF" opacity="0.9" />
        
        <!-- Tone Curve -->
        <path d="-180 60 Q -50 -40, 180 -60" stroke="#38BDF8" stroke-width="6" stroke-linecap="round" fill="none" filter="drop-shadow(0 0 12px #38BDF8)" />
      </g>
    `
  },
  {
    id: 'video-motion',
    title: 'VIDEO & MOTION',
    bg1: '#E11D48',
    bg2: '#8B5CF6',
    accent1: '#FB7185',
    accent2: '#EC4899',
    svgContent: `
      <rect width="800" height="400" fill="url(#bgGrad)" />
      <circle cx="600" cy="150" r="160" fill="#EC4899" opacity="0.35" filter="blur(50px)" />
      
      <!-- Video Timeline Workspace -->
      <g transform="translate(150, 70)">
        <rect x="0" y="0" width="500" height="260" rx="18" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
        
        <!-- Track 1 -->
        <rect x="30" y="30" width="440" height="50" rx="10" fill="rgba(0,0,0,0.2)" />
        <rect x="50" y="36" width="220" height="38" rx="8" fill="#FB7185" />
        
        <!-- Track 2 -->
        <rect x="30" y="95" width="440" height="50" rx="10" fill="rgba(0,0,0,0.2)" />
        <rect x="160" y="101" width="260" height="38" rx="8" fill="#8B5CF6" />
        
        <!-- Track 3 -->
        <rect x="30" y="160" width="440" height="50" rx="10" fill="rgba(0,0,0,0.2)" />
        <rect x="90" y="166" width="180" height="38" rx="8" fill="#EC4899" />
        
        <!-- Playhead Line -->
        <line x1="250" y1="10" x2="250" y2="230" stroke="#FFFFFF" stroke-width="4" filter="drop-shadow(0 0 10px #FFFFFF)" />
        <polygon points="242,10 258,10 250,22" fill="#FFFFFF" />
      </g>
    `
  },
  {
    id: 'illustration',
    title: 'ILLUSTRATION',
    bg1: '#D97706',
    bg2: '#EF4444',
    accent1: '#F59E0B',
    accent2: '#FBBF24',
    svgContent: `
      <rect width="800" height="400" fill="url(#bgGrad)" />
      <circle cx="250" cy="300" r="160" fill="#F59E0B" opacity="0.4" filter="blur(60px)" />
      
      <!-- Liquid Paint Ribbon & Stylus -->
      <g transform="translate(150, 60)">
        <path d="M20 220 C 120 40, 280 240, 460 60" stroke="#FFFFFF" stroke-width="20" stroke-linecap="round" fill="none" filter="drop-shadow(0 10px 25px rgba(0,0,0,0.3))" />
        <path d="M20 220 C 120 40, 280 240, 460 60" stroke="#FBBF24" stroke-width="12" stroke-linecap="round" fill="none" />
        <circle cx="460" cy="60" r="20" fill="#FFFFFF" filter="drop-shadow(0 4px 14px rgba(0,0,0,0.4))" />
      </g>
    `
  },
  {
    id: '3d-animation',
    title: '3D & ANIMATION',
    bg1: '#059669',
    bg2: '#0D9488',
    accent1: '#10B981',
    accent2: '#34D399',
    svgContent: `
      <rect width="800" height="400" fill="url(#bgGrad)" />
      
      <!-- Isometric Viewport Grid -->
      <g opacity="0.2">
        <path d="M0 200 L800 200 M400 0 L400 400 M0 100 L800 100 M0 300 L800 300 M200 0 L200 400 M600 0 L600 400" stroke="#FFFFFF" stroke-width="2" />
      </g>
      
      <!-- 3D Raytraced Render Cube -->
      <g transform="translate(400, 190)">
        <polygon points="0,-90 90,-40 0,10 -90,-40" fill="rgba(255,255,255,0.4)" stroke="#FFFFFF" stroke-width="3" />
        <polygon points="-90,-40 0,10 0,110 -90,60" fill="rgba(255,255,255,0.25)" stroke="#FFFFFF" stroke-width="3" />
        <polygon points="0,10 90,-40 90,60 0,110" fill="rgba(255,255,255,0.15)" stroke="#FFFFFF" stroke-width="3" />
        <circle cx="0" cy="-40" r="16" fill="#34D399" filter="drop-shadow(0 0 15px #34D399)" />
      </g>
    `
  },
  {
    id: 'ai-creative-tools',
    title: 'AI CREATIVE TOOLS',
    bg1: '#4338CA',
    bg2: '#A855F7',
    accent1: '#6366F1',
    accent2: '#C084FC',
    svgContent: `
      <rect width="800" height="400" fill="url(#bgGrad)" />
      <circle cx="400" cy="200" r="170" fill="#A855F7" opacity="0.45" filter="blur(65px)" />
      
      <!-- AI Neural Node Constellation -->
      <g transform="translate(400, 200)">
        <line x1="-180" y1="50" x2="-80" y2="-60" stroke="#C084FC" stroke-width="3" stroke-dasharray="6 6" />
        <line x1="-80" y1="-60" x2="60" y2="70" stroke="#C084FC" stroke-width="3" stroke-dasharray="6 6" />
        <line x1="60" y1="70" x2="170" y2="-40" stroke="#C084FC" stroke-width="3" stroke-dasharray="6 6" />
        
        <circle cx="-180" cy="50" r="18" fill="#FFFFFF" filter="drop-shadow(0 0 15px #FFFFFF)" />
        <circle cx="-80" cy="-60" r="24" fill="#C084FC" stroke="#FFFFFF" stroke-width="4" filter="drop-shadow(0 0 20px #C084FC)" />
        <circle cx="60" cy="70" r="20" fill="#6366F1" stroke="#FFFFFF" stroke-width="4" filter="drop-shadow(0 0 20px #6366F1)" />
        <circle cx="170" cy="-40" r="26" fill="#FFFFFF" filter="drop-shadow(0 0 25px #FFFFFF)" />
      </g>
    `
  },
  {
    id: 'productivity',
    title: 'PRODUCTIVITY',
    bg1: '#2563EB',
    bg2: '#10B981',
    accent1: '#3B82F6',
    accent2: '#34D399',
    svgContent: `
      <rect width="800" height="400" fill="url(#bgGrad)" />
      <circle cx="300" cy="150" r="160" fill="#3B82F6" opacity="0.35" filter="blur(50px)" />
      
      <!-- 3D Kanban Task Board -->
      <g transform="translate(180, 65)">
        <rect x="0" y="0" width="130" height="270" rx="14" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.35)" stroke-width="2" />
        <rect x="150" y="0" width="130" height="270" rx="14" fill="rgba(255,255,255,0.28)" stroke="rgba(255,255,255,0.5)" stroke-width="2" transform="translate(0, -10)" />
        <rect x="300" y="0" width="130" height="270" rx="14" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.35)" stroke-width="2" />
        
        <!-- Cards inside -->
        <rect x="162" y="10" width="106" height="60" rx="8" fill="#FFFFFF" />
        <rect x="162" y="80" width="106" height="80" rx="8" fill="rgba(255,255,255,0.7)" />
      </g>
    `
  },
  {
    id: 'cybersecurity',
    title: 'CYBERSECURITY',
    bg1: '#064E3B',
    bg2: '#059669',
    accent1: '#10B981',
    accent2: '#A7F3D0',
    svgContent: `
      <rect width="800" height="400" fill="url(#bgGrad)" />
      <circle cx="400" cy="200" r="180" fill="#059669" opacity="0.4" filter="blur(60px)" />
      
      <!-- Webroot Radar Shield -->
      <g transform="translate(400, 200)">
        <circle cx="0" cy="0" r="140" fill="none" stroke="rgba(167, 243, 208, 0.3)" stroke-width="3" />
        <circle cx="0" cy="0" r="90" fill="none" stroke="rgba(167, 243, 208, 0.5)" stroke-width="3" />
        
        <path d="M-50 -60 L50 -60 L60 20 L0 80 L-60 20 Z" fill="rgba(255,255,255,0.25)" stroke="#A7F3D0" stroke-width="4" filter="drop-shadow(0 10px 30px rgba(0,0,0,0.4))" />
        <path d="M-25 0 L-5 20 L30 -20" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>
    `
  }
];

categories.forEach((cat) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="800" height="400">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="800" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="${cat.bg1}" />
          <stop offset="100%" stop-color="${cat.bg2}" />
        </linearGradient>
      </defs>
      ${cat.svgContent}
    </svg>
  `;
  const filePath = path.join(outDir, `${cat.id}.svg`);
  fs.writeFileSync(filePath, svg.trim());
  console.log(`Created: ${filePath}`);
});
