export default function CategoryVisualPreview({ categoryId, colorAccent = '#4F46E5' }) {
  const isCyber = categoryId === 'cybersecurity';

  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: '130px',
        borderRadius: '10px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.25rem',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-sm)',
        background: '#FFFFFF',
      }}
    >
      {/* 1. GRAPHIC DESIGN: Vector Artwork & Brand Identity Canvas */}
      {categoryId === 'graphic-design' && (
        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #EEF2FF 0%, #FAF5FF 100%)', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E0E7FF', paddingBottom: '4px' }}>
            <span style={{ fontSize: '9px', fontWeight: 800, color: '#4F46E5', letterSpacing: '0.05em' }}>VECTOR ARTBOARD • 1920x1080</span>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4F46E5' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EC4899' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B' }} />
            </div>
          </div>
          <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#1E1B4B', letterSpacing: '-0.02em' }}>BRAND IDENTITY</span>
              <span style={{ fontSize: '9px', color: '#6366F1', fontWeight: 600 }}>Typography & Bezier Paths</span>
            </div>
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
              <path d="M6 32 C 18 4, 42 36, 54 8" stroke="url(#gGrad)" strokeWidth="4" strokeLinecap="round" />
              <circle cx="18" cy="18" r="4" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="2" />
              <circle cx="42" cy="22" r="4" fill="#FFFFFF" stroke="#EC4899" strokeWidth="2" />
              <defs>
                <linearGradient id="gGrad" x1="0" y1="0" x2="60" y2="40">
                  <stop stopColor="#4F46E5" />
                  <stop offset="1" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      )}

      {/* 2. UI/UX DESIGN: Interactive App Prototype Wireframe */}
      {categoryId === 'ui-ux-design' && (
        <div style={{ width: '100%', height: '100%', background: '#0F172A', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '4px' }}>
            <span style={{ fontSize: '9px', fontWeight: 800, color: '#C084FC', letterSpacing: '0.05em' }}>MOBILE APP PROTOTYPE</span>
            <span style={{ fontSize: '8px', color: '#10B981', background: 'rgba(16, 185, 129, 0.2)', padding: '1px 5px', borderRadius: '4px', fontWeight: 700 }}>LIVE FLOW</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flex: 1 }}>
            <div style={{ flex: 1, background: '#1E293B', borderRadius: '6px', border: '1px solid #334155', padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ height: '6px', width: '60%', background: '#A855F7', borderRadius: '3px' }} />
              <div style={{ height: '14px', background: 'linear-gradient(90deg, #6366F1, #A855F7)', borderRadius: '4px', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Primary Button
              </div>
            </div>
            <span style={{ fontSize: '10px', color: '#A855F7' }}>→</span>
            <div style={{ flex: 1, background: '#1E293B', borderRadius: '6px', border: '1px dashed #A855F7', padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ height: '6px', width: '80%', background: '#38BDF8', borderRadius: '3px' }} />
              <div style={{ height: '14px', background: '#334155', borderRadius: '4px' }} />
            </div>
          </div>
        </div>
      )}

      {/* 3. PHOTO EDITING: Split Screen Color Grading Studio */}
      {categoryId === 'photo-editing' && (
        <div style={{ width: '100%', height: '100%', background: '#1E293B', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '4px' }}>
            <span style={{ fontSize: '9px', fontWeight: 800, color: '#38BDF8', letterSpacing: '0.05em' }}>COLOR GRADING STUDIO</span>
            <span style={{ fontSize: '8px', color: '#94A3B8' }}>BEFORE / AFTER</span>
          </div>
          <div style={{ flex: 1, display: 'flex', gap: '8px', alignItems: 'center', padding: '4px 0' }}>
            <div style={{ flex: 1, height: '100%', background: 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)', borderRadius: '6px', border: '1px solid #0369A1', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <span style={{ fontSize: '16px' }}>📷</span>
              <span style={{ position: 'absolute', bottom: '4px', left: '4px', fontSize: '7px', fontWeight: 800, background: 'rgba(0,0,0,0.6)', padding: '1px 4px', borderRadius: '2px' }}>RAW</span>
            </div>
            <div style={{ width: '40px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div style={{ fontSize: '7px', color: '#38BDF8', fontWeight: 700 }}>EXP +1.2</div>
              <div style={{ height: '3px', background: '#38BDF8', borderRadius: '2px' }} />
              <div style={{ fontSize: '7px', color: '#F59E0B', fontWeight: 700 }}>TEMP 5400K</div>
              <div style={{ height: '3px', background: '#F59E0B', borderRadius: '2px' }} />
            </div>
          </div>
        </div>
      )}

      {/* 4. VIDEO & MOTION: Multitrack Video Timeline Studio */}
      {categoryId === 'video-motion' && (
        <div style={{ width: '100%', height: '100%', background: '#090D16', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #1E293B', paddingBottom: '4px' }}>
            <span style={{ fontSize: '9px', fontWeight: 800, color: '#FB7185', letterSpacing: '0.05em' }}>MULTITRACK TIMELINE</span>
            <span style={{ fontSize: '8px', color: '#FB7185', fontWeight: 700 }}>00:01:24:12</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, justifyContent: 'center' }}>
            <div style={{ height: '12px', background: 'rgba(251, 113, 133, 0.25)', borderLeft: '3px solid #FB7185', borderRadius: '3px', display: 'flex', alignItems: 'center', padding: '0 4px', fontSize: '7px', color: '#FB7185', fontWeight: 700 }}>
              V1 • Motion Graphics Clip
            </div>
            <div style={{ height: '12px', background: 'rgba(168, 85, 247, 0.25)', borderLeft: '3px solid #A855F7', borderRadius: '3px', display: 'flex', alignItems: 'center', padding: '0 4px', fontSize: '7px', color: '#C084FC', fontWeight: 700 }}>
              V2 • Lower Third Titles
            </div>
            <div style={{ height: '10px', background: 'rgba(56, 189, 248, 0.2)', borderLeft: '3px solid #38BDF8', borderRadius: '3px', display: 'flex', alignItems: 'center', padding: '0 4px', fontSize: '7px', color: '#38BDF8' }}>
              A1 • Audio Waveform
            </div>
          </div>
        </div>
      )}

      {/* 5. ILLUSTRATION: Stylus & Digital Drawing Studio */}
      {categoryId === 'illustration' && (
        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #FDE68A', paddingBottom: '4px' }}>
            <span style={{ fontSize: '9px', fontWeight: 800, color: '#D97706', letterSpacing: '0.05em' }}>DIGITAL DRAWING CANVAS</span>
            <span style={{ fontSize: '8px', color: '#D97706', fontWeight: 700 }}>STYLUS 100%</span>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '22px' }}>✏️</span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#78350F' }}>Brush Stroke Engine</span>
                <span style={{ fontSize: '8px', color: '#D97706', fontWeight: 600 }}>Pressure Sensitive</span>
              </div>
            </div>
            <svg width="50" height="30" viewBox="0 0 50 30" fill="none">
              <path d="M4 22 C 14 4, 32 26, 46 8" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      )}

      {/* 6. 3D & ANIMATION: Raytrace Shading & Viewport */}
      {categoryId === '3d-animation' && (
        <div style={{ width: '100%', height: '100%', background: '#18181B', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #27272A', paddingBottom: '4px' }}>
            <span style={{ fontSize: '9px', fontWeight: 800, color: '#34D399', letterSpacing: '0.05em' }}>3D RAYTRACE VIEWPORT</span>
            <span style={{ fontSize: '8px', color: '#34D399', fontWeight: 700 }}>OCTANE RENDER</span>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', transform: 'rotate(15deg)', boxShadow: '0 6px 16px rgba(16, 185, 129, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                🧊
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#34D399' }}>Metallic Mesh Shader</span>
                <span style={{ fontSize: '8px', color: '#A1A1AA' }}>128 Samples • GI Lighting</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. AI CREATIVE TOOLS: Generative Prompt & Synthesis */}
      {categoryId === 'ai-creative-tools' && (
        <div style={{ width: '100%', height: '100%', background: '#0F172A', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #1E293B', paddingBottom: '4px' }}>
            <span style={{ fontSize: '9px', fontWeight: 800, color: '#C084FC', letterSpacing: '0.05em' }}>GENERATIVE AI STUDIO</span>
            <span style={{ fontSize: '8px', color: '#C084FC', fontWeight: 700 }}>NEURAL V6.0</span>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px' }}>
            <div style={{ background: '#1E293B', borderRadius: '4px', padding: '4px 6px', fontSize: '8px', color: '#E2E8F0', fontFamily: 'monospace' }}>
              /imagine prompt: futuristic 3D cyberpunk...
            </div>
            <div style={{ height: '14px', background: 'linear-gradient(90deg, #9333EA, #4F46E5, #EC4899)', borderRadius: '4px', fontSize: '8px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
              ✨ Generating AI Artwork (95%)
            </div>
          </div>
        </div>
      )}

      {/* 8. PRODUCTIVITY: Creative Workflow & Asset Board */}
      {categoryId === 'productivity' && (
        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #BAE6FD', paddingBottom: '4px' }}>
            <span style={{ fontSize: '9px', fontWeight: 800, color: '#0284C7', letterSpacing: '0.05em' }}>WORKFLOW & ASSET BOARD</span>
            <span style={{ fontSize: '8px', color: '#10B981', fontWeight: 800 }}>✓ 100% HANDOFF</span>
          </div>
          <div style={{ display: 'flex', gap: '6px', flex: 1, alignItems: 'center', padding: '4px 0' }}>
            <div style={{ flex: 1, background: '#FFFFFF', borderRadius: '4px', borderLeft: '3px solid #0284C7', padding: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '8px', fontWeight: 800, color: '#0369A1' }}>#design-system</span>
              <div style={{ height: '3px', background: '#38BDF8', borderRadius: '2px' }} />
            </div>
            <div style={{ flex: 1, background: '#FFFFFF', borderRadius: '4px', borderLeft: '3px solid #10B981', padding: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '8px', fontWeight: 800, color: '#047857' }}>#hero-launch</span>
              <div style={{ height: '3px', background: '#34D399', borderRadius: '2px' }} />
            </div>
          </div>
        </div>
      )}

      {/* 9. CYBERSECURITY: Webroot Real-Time Defense Dashboard */}
      {isCyber && (
        <div style={{ width: '100%', height: '100%', background: '#064E3B', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #047857', paddingBottom: '4px' }}>
            <span style={{ fontSize: '9px', fontWeight: 800, color: '#A7F3D0', letterSpacing: '0.05em' }}>WEBROOT SECURITY CONSOLE</span>
            <span style={{ fontSize: '8px', color: '#A7F3D0', fontWeight: 800 }}>● PROTECTED</span>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px' }}>🛡️</span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#A7F3D0' }}>Real-Time Shield Defense</span>
                <span style={{ fontSize: '8px', opacity: 0.9 }}>Identity & Endpoint Active</span>
              </div>
            </div>
            <div style={{ padding: '3px 8px', borderRadius: '4px', background: 'rgba(167, 243, 208, 0.2)', color: '#A7F3D0', fontSize: '8px', fontWeight: 800 }}>
              0 THREATS
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
