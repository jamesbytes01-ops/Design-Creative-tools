const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../public/images/tools');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const toolVisuals = [
  {
    id: 'adobe-illustrator',
    bg1: '#C2410C',
    bg2: '#7C2D12',
    accent1: '#F59E0B',
    accent2: '#FBBF24',
    title: 'Adobe Illustrator',
    svgContent: `
      <!-- Vector Pen Path & Node Handles -->
      <g transform="translate(400, 200)">
        <circle cx="0" cy="0" r="140" fill="rgba(245, 158, 11, 0.2)" filter="blur(40px)" />
        <path d="M-220 80 Q 0 -140, 220 80" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" fill="none" filter="drop-shadow(0 6px 16px rgba(0,0,0,0.4))" />
        <path d="M-220 80 Q 0 -140, 220 80" stroke="#F59E0B" stroke-width="4" stroke-linecap="round" fill="none" />
        
        <!-- Precision Node Control Handles -->
        <line x1="-100" y1="-80" x2="100" y2="20" stroke="#FBBF24" stroke-width="3" stroke-dasharray="6 6" />
        <rect x="-106" y="-86" width="12" height="12" fill="#FFFFFF" stroke="#C2410C" stroke-width="2" />
        <circle cx="100" cy="20" r="8" fill="#F59E0B" stroke="#FFFFFF" stroke-width="2" />
        <circle cx="0" cy="-30" r="12" fill="#FFFFFF" stroke="#F59E0B" stroke-width="4" />
      </g>
    `
  },
  {
    id: 'affinity-designer',
    bg1: '#0284C7',
    bg2: '#0F172A',
    accent1: '#06B6D4',
    accent2: '#38BDF8',
    title: 'Affinity Designer',
    svgContent: `
      <!-- Dual Vector-Raster Persona Canvas -->
      <g transform="translate(400, 200)">
        <circle cx="0" cy="0" r="150" fill="rgba(6, 182, 212, 0.25)" filter="blur(45px)" />
        
        <!-- Artboard Canvas -->
        <rect x="-240" y="-120" width="480" height="240" rx="16" fill="rgba(255, 255, 255, 0.12)" stroke="rgba(255, 255, 255, 0.35)" stroke-width="2" />
        <path d="M-180 40 C -80 -100, 80 100, 180 -40" stroke="#38BDF8" stroke-width="8" stroke-linecap="round" fill="none" />
        
        <circle cx="-80" cy="-40" r="28" fill="#06B6D4" opacity="0.8" />
        <circle cx="80" cy="20" r="36" fill="#38BDF8" opacity="0.6" />
      </g>
    `
  },
  {
    id: 'procreate',
    bg1: '#831843',
    bg2: '#18181B',
    accent1: '#EC4899',
    accent2: '#F472B6',
    title: 'Procreate',
    svgContent: `
      <!-- Fluid Paint Brush Stroke & Stylus Glow -->
      <g transform="translate(400, 200)">
        <circle cx="0" cy="0" r="160" fill="rgba(236, 72, 153, 0.3)" filter="blur(50px)" />
        
        <path d="M-260 60 C -120 -120, 120 120, 260 -60" stroke="#FFFFFF" stroke-width="24" stroke-linecap="round" fill="none" filter="drop-shadow(0 10px 30px rgba(0,0,0,0.5))" />
        <path d="M-260 60 C -120 -120, 120 120, 260 -60" stroke="#EC4899" stroke-width="14" stroke-linecap="round" fill="none" />
        
        <circle cx="260" cy="-60" r="22" fill="#FFFFFF" filter="drop-shadow(0 0 20px #FFFFFF)" />
      </g>
    `
  },
  {
    id: 'davinci-resolve',
    bg1: '#311042',
    bg2: '#0F172A',
    accent1: '#8B5CF6',
    accent2: '#C084FC',
    title: 'DaVinci Resolve',
    svgContent: `
      <!-- Color Spectrum Wheel & Timeline Tracks -->
      <g transform="translate(400, 200)">
        <circle cx="0" cy="0" r="130" fill="none" stroke="rgba(255, 255, 255, 0.2)" stroke-width="4" stroke-dasharray="12 12" />
        <circle cx="0" cy="0" r="95" fill="rgba(255, 255, 255, 0.12)" stroke="#C084FC" stroke-width="4" filter="drop-shadow(0 0 25px #8B5CF6)" />
        
        <!-- Primary Color Nodes -->
        <circle cx="-50" cy="-30" r="18" fill="#EF4444" opacity="0.9" />
        <circle cx="50" cy="-30" r="18" fill="#10B981" opacity="0.9" />
        <circle cx="0" cy="50" r="18" fill="#3B82F6" opacity="0.9" />
        
        <!-- Center Scope Point -->
        <circle cx="0" cy="-5" r="8" fill="#FFFFFF" />
      </g>
    `
  },
  {
    id: 'adobe-premiere-pro',
    bg1: '#4C0519',
    bg2: '#18181B',
    accent1: '#E11D48',
    accent2: '#FB7185',
    title: 'Adobe Premiere Pro',
    svgContent: `
      <!-- Multi-Track Timeline & Playhead -->
      <g transform="translate(400, 200)">
        <rect x="-240" y="-110" width="480" height="220" rx="16" fill="rgba(255, 255, 255, 0.1)" stroke="rgba(255, 255, 255, 0.3)" stroke-width="2" />
        
        <!-- Track Clips -->
        <rect x="-210" y="-80" width="180" height="42" rx="8" fill="#E11D48" />
        <rect x="-15" y="-80" width="220" height="42" rx="8" fill="#FB7185" opacity="0.85" />
        <rect x="-210" y="-25" width="280" height="42" rx="8" fill="#9F1239" />
        <rect x="80" y="-25" width="120" height="42" rx="8" fill="#E11D48" />
        <rect x="-210" y="30" width="380" height="42" rx="8" fill="#BE123C" opacity="0.9" />
        
        <!-- Red Playhead Line -->
        <line x1="20" y1="-100" x2="20" y2="90" stroke="#FFFFFF" stroke-width="4" filter="drop-shadow(0 0 12px #E11D48)" />
        <polygon points="12,-100 28,-100 20,-88" fill="#FFFFFF" />
      </g>
    `
  },
  {
    id: 'spline-3d',
    bg1: '#064E3B',
    bg2: '#0F172A',
    accent1: '#10B981',
    accent2: '#34D399',
    title: 'Spline 3D',
    svgContent: `
      <!-- 3D Web Canvas & Interactive Sphere -->
      <g transform="translate(400, 200)">
        <circle cx="0" cy="0" r="150" fill="rgba(16, 185, 129, 0.25)" filter="blur(45px)" />
        
        <!-- Wireframe Mesh Sphere -->
        <circle cx="0" cy="0" r="100" fill="rgba(255, 255, 255, 0.15)" stroke="#34D399" stroke-width="3" />
        <ellipse cx="0" cy="0" rx="100" ry="40" fill="none" stroke="rgba(255, 255, 255, 0.6)" stroke-width="2" />
        <ellipse cx="0" cy="0" rx="40" ry="100" fill="none" stroke="rgba(255, 255, 255, 0.6)" stroke-width="2" />
        <circle cx="0" cy="0" r="16" fill="#FFFFFF" filter="drop-shadow(0 0 20px #34D399)" />
      </g>
    `
  },
  {
    id: 'sketch',
    bg1: '#4C1D95',
    bg2: '#0F172A',
    accent1: '#8B5CF6',
    accent2: '#A78BFA',
    title: 'Sketch',
    svgContent: `
      <!-- Vector Diamond Emblem & UI Layers -->
      <g transform="translate(400, 200)">
        <circle cx="0" cy="0" r="140" fill="rgba(139, 92, 246, 0.3)" filter="blur(45px)" />
        
        <g filter="drop-shadow(0 12px 28px rgba(0,0,0,0.4))">
          <polygon points="0,-90 90,-20 0,90 -90,-20" fill="rgba(255,255,255,0.3)" stroke="#FFFFFF" stroke-width="3" />
          <polygon points="0,-90 90,-20 0,0 -90,-20" fill="rgba(255,255,255,0.45)" stroke="#FFFFFF" stroke-width="2" />
          <line x1="0" y1="-90" x2="0" y2="90" stroke="#FFFFFF" stroke-width="2" />
        </g>
      </g>
    `
  },
  {
    id: 'penpot',
    bg1: '#3730A3',
    bg2: '#0F172A',
    accent1: '#6366F1',
    accent2: '#818CF8',
    title: 'Penpot',
    svgContent: `
      <!-- Open Source CSS Grid Layout -->
      <g transform="translate(400, 200)">
        <rect x="-220" y="-110" width="440" height="220" rx="16" fill="rgba(255, 255, 255, 0.12)" stroke="rgba(255, 255, 255, 0.35)" stroke-width="2" />
        
        <!-- CSS Grid Columns -->
        <rect x="-190" y="-80" width="120" height="160" rx="10" fill="rgba(255, 255, 255, 0.2)" stroke="#818CF8" stroke-width="2" />
        <rect x="-50" y="-80" width="240" height="70" rx="10" fill="#6366F1" opacity="0.9" />
        <rect x="-50" y="5" width="110" height="75" rx="10" fill="rgba(255, 255, 255, 0.25)" />
        <rect x="80" y="5" width="110" height="75" rx="10" fill="#818CF8" />
      </g>
    `
  },
  {
    id: 'notion',
    bg1: '#0F172A',
    bg2: '#1E293B',
    accent1: '#3B82F6',
    accent2: '#60A5FA',
    title: 'Notion',
    svgContent: `
      <!-- Connected Block Workspace & Database -->
      <g transform="translate(400, 200)">
        <rect x="-220" y="-110" width="440" height="220" rx="16" fill="rgba(255, 255, 255, 0.1)" stroke="rgba(255, 255, 255, 0.3)" stroke-width="2" />
        
        <!-- Document Blocks -->
        <rect x="-180" y="-70" width="200" height="14" rx="4" fill="#FFFFFF" />
        <rect x="-180" y="-45" width="360" height="10" rx="3" fill="rgba(255,255,255,0.6)" />
        <rect x="-180" y="-25" width="300" height="10" rx="3" fill="rgba(255,255,255,0.6)" />
        
        <!-- Database Card Grid -->
        <rect x="-180" y="5" width="110" height="65" rx="8" fill="#3B82F6" opacity="0.9" />
        <rect x="-55" y="5" width="110" height="65" rx="8" fill="rgba(255,255,255,0.2)" />
        <rect x="70" y="5" width="110" height="65" rx="8" fill="rgba(255,255,255,0.2)" />
      </g>
    `
  },
  {
    id: 'raycast',
    bg1: '#991B1B',
    bg2: '#0F172A',
    accent1: '#EF4444',
    accent2: '#F87171',
    title: 'Raycast',
    svgContent: `
      <!-- Command Bar Launcher & Search Glow -->
      <g transform="translate(400, 200)">
        <circle cx="0" cy="0" r="140" fill="rgba(239, 68, 68, 0.25)" filter="blur(45px)" />
        
        <!-- Command Bar Container -->
        <rect x="-230" y="-55" width="460" height="110" rx="18" fill="rgba(15, 23, 42, 0.85)" stroke="#F87171" stroke-width="2" filter="drop-shadow(0 16px 36px rgba(0,0,0,0.6))" />
        
        <!-- Command Icon & Prompt -->
        <circle cx="-180" cy="0" r="20" fill="#EF4444" />
        <rect x="-140" y="-10" width="180" height="20" rx="6" fill="#FFFFFF" />
        <rect x="110" y="-18" width="80" height="36" rx="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" stroke-width="1" />
      </g>
    `
  },
  {
    id: 'affinity-photo',
    bg1: '#083344',
    bg2: '#0F172A',
    accent1: '#0284C7',
    accent2: '#38BDF8',
    title: 'Affinity Photo 2',
    svgContent: `
      <!-- Pro Camera Lens Viewfinder & Tone Curve -->
      <g transform="translate(400, 200)">
        <circle cx="0" cy="0" r="130" fill="rgba(56, 189, 248, 0.2)" filter="blur(40px)" />
        <circle cx="0" cy="0" r="110" fill="rgba(255, 255, 255, 0.1)" stroke="#38BDF8" stroke-width="4" />
        <circle cx="0" cy="0" r="60" fill="rgba(255, 255, 255, 0.2)" stroke="#FFFFFF" stroke-width="3" />
        <path d="-150 50 Q 0 -60, 150 -40" stroke="#38BDF8" stroke-width="6" stroke-linecap="round" fill="none" />
      </g>
    `
  },
  {
    id: 'coreldraw',
    bg1: '#1E3A8A',
    bg2: '#0F172A',
    accent1: '#3B82F6',
    accent2: '#60A5FA',
    title: 'CorelDRAW',
    svgContent: `
      <!-- Precision Vector Layout & Print Rules -->
      <g transform="translate(400, 200)">
        <rect x="-220" y="-110" width="440" height="220" rx="16" fill="rgba(255, 255, 255, 0.12)" stroke="rgba(255, 255, 255, 0.3)" stroke-width="2" />
        <path d="M-160 -40 L0 -80 L160 -40 L0 80 Z" fill="rgba(59, 130, 246, 0.4)" stroke="#FFFFFF" stroke-width="3" />
        <circle cx="0" cy="-80" r="8" fill="#60A5FA" />
        <circle cx="160" cy="-40" r="8" fill="#60A5FA" />
        <circle cx="0" cy="80" r="8" fill="#60A5FA" />
        <circle cx="-160" cy="-40" r="8" fill="#60A5FA" />
      </g>
    `
  },
  {
    id: 'krita',
    bg1: '#065F46',
    bg2: '#0F172A',
    accent1: '#10B981',
    accent2: '#34D399',
    title: 'Krita',
    svgContent: `
      <!-- Digital Painting Wheel & Brush Ribbon -->
      <g transform="translate(400, 200)">
        <circle cx="0" cy="0" r="140" fill="rgba(16, 185, 129, 0.25)" filter="blur(45px)" />
        <path d="M-220 50 C -100 -100, 100 100, 220 -50" stroke="#FFFFFF" stroke-width="20" stroke-linecap="round" fill="none" />
        <path d="M-220 50 C -100 -100, 100 100, 220 -50" stroke="#34D399" stroke-width="12" stroke-linecap="round" fill="none" />
        <circle cx="220" cy="-50" r="16" fill="#FFFFFF" />
      </g>
    `
  }
];

toolVisuals.forEach((tool) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="800" height="400">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="800" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="${tool.bg1}" />
          <stop offset="100%" stop-color="${tool.bg2}" />
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="url(#bgGrad)" />
      ${tool.svgContent}
    </svg>
  `;
  const filePath = path.join(outDir, `${tool.id}.svg`);
  fs.writeFileSync(filePath, svg.trim());
  console.log(`Created tool visual: ${filePath}`);
});
