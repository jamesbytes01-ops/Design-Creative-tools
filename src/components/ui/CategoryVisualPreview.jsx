export default function CategoryVisualPreview({ categoryId, colorAccent = '#4F46E5' }) {
  const isCyber = categoryId === 'cybersecurity';

  const getCategoryTheme = (id) => {
    switch (id) {
      case 'graphic-design':
        return {
          bg: 'linear-gradient(135deg, rgba(79, 70, 229, 0.08) 0%, rgba(236, 72, 153, 0.12) 100%)',
          border: 'rgba(79, 70, 229, 0.2)',
          accent: '#4F46E5',
          secondaryAccent: '#EC4899',
        };
      case 'ui-ux-design':
        return {
          bg: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(99, 102, 241, 0.14) 100%)',
          border: 'rgba(139, 92, 246, 0.2)',
          accent: '#8B5CF6',
          secondaryAccent: '#6366F1',
        };
      case 'photo-editing':
        return {
          bg: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(59, 130, 246, 0.14) 100%)',
          border: 'rgba(6, 182, 212, 0.2)',
          accent: '#06B6D4',
          secondaryAccent: '#3B82F6',
        };
      case 'video-motion':
        return {
          bg: 'linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(139, 92, 246, 0.14) 100%)',
          border: 'rgba(236, 72, 153, 0.2)',
          accent: '#EC4899',
          secondaryAccent: '#8B5CF6',
        };
      case 'illustration':
        return {
          bg: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(239, 68, 68, 0.12) 100%)',
          border: 'rgba(245, 158, 11, 0.2)',
          accent: '#F59E0B',
          secondaryAccent: '#EF4444',
        };
      case '3d-animation':
        return {
          bg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.14) 100%)',
          border: 'rgba(16, 185, 129, 0.2)',
          accent: '#10B981',
          secondaryAccent: '#059669',
        };
      case 'ai-creative-tools':
        return {
          bg: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.14) 100%)',
          border: 'rgba(99, 102, 241, 0.2)',
          accent: '#6366F1',
          secondaryAccent: '#A855F7',
        };
      case 'productivity':
        return {
          bg: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(16, 185, 129, 0.12) 100%)',
          border: 'rgba(59, 130, 246, 0.2)',
          accent: '#3B82F6',
          secondaryAccent: '#10B981',
        };
      case 'cybersecurity':
        return {
          bg: 'linear-gradient(135deg, rgba(5, 150, 105, 0.12) 0%, rgba(6, 78, 59, 0.22) 100%)',
          border: 'rgba(167, 243, 208, 0.3)',
          accent: '#059669',
          secondaryAccent: '#10B981',
        };
      default:
        return {
          bg: `linear-gradient(135deg, ${colorAccent}10 0%, ${colorAccent}25 100%)`,
          border: `${colorAccent}25`,
          accent: colorAccent,
          secondaryAccent: '#6366F1',
        };
    }
  };

  const theme = getCategoryTheme(categoryId);

  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: '115px',
        borderRadius: '10px',
        background: theme.bg,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.border,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.25rem',
      }}
    >
      {/* Soft Ambient Background Mesh */}
      <div
        style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.accent}20 0%, transparent 70%)`,
          top: '-20px',
          right: '-20px',
          pointerEvents: 'none',
        }}
      />

      {/* 1. Graphic Design: Glass Palette & Vector Curve */}
      {categoryId === 'graphic-design' && (
        <div style={{ position: 'relative', width: '120px', height: '66px', background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.9)', boxShadow: '0 8px 24px rgba(79, 70, 229, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '5px' }}>
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#4F46E5', boxShadow: '0 2px 6px rgba(79, 70, 229, 0.3)' }} />
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#EC4899', boxShadow: '0 2px 6px rgba(236, 72, 153, 0.3)' }} />
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#F59E0B', boxShadow: '0 2px 6px rgba(245, 158, 11, 0.3)' }} />
            </div>
            <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
              <path d="M4 22 C 12 4, 28 26, 36 8" stroke="url(#grad1)" strokeWidth="3.5" strokeLinecap="round" />
              <defs>
                <linearGradient id="grad1" x1="0" y1="0" x2="40" y2="30">
                  <stop stopColor="#4F46E5" />
                  <stop offset="1" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      )}

      {/* 2. UI/UX Design: Stacked Glass Cards & Cursor */}
      {categoryId === 'ui-ux-design' && (
        <div style={{ position: 'relative', width: '125px', height: '66px' }}>
          <div style={{ position: 'absolute', top: '6px', left: '0px', width: '105px', height: '54px', background: 'rgba(255, 255, 255, 0.45)', backdropFilter: 'blur(8px)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.6)' }} />
          <div style={{ position: 'absolute', top: '0px', left: '15px', width: '105px', height: '58px', background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(12px)', borderRadius: '8px', border: '1px solid #FFFFFF', boxShadow: '0 8px 24px rgba(139, 92, 246, 0.12)', padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ height: '5px', width: '40%', background: '#8B5CF6', borderRadius: '3px' }} />
            <div style={{ display: 'flex', gap: '4px', flex: 1 }}>
              <div style={{ flex: 1, background: 'rgba(139, 92, 246, 0.12)', borderRadius: '4px', border: '1px solid rgba(139, 92, 246, 0.3)' }} />
              <div style={{ flex: 1, background: '#F8FAFC', borderRadius: '4px' }} />
            </div>
          </div>
        </div>
      )}

      {/* 3. Photo Editing: Glowing Lens Aperture */}
      {categoryId === 'photo-editing' && (
        <div style={{ position: 'relative', width: '120px', height: '66px', background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.9)', boxShadow: '0 8px 24px rgba(6, 182, 212, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)', boxShadow: '0 0 16px rgba(6, 182, 212, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #FFFFFF' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px stroke #FFFFFF', background: 'rgba(255, 255, 255, 0.25)' }} />
          </div>
        </div>
      )}

      {/* 4. Video & Motion: Glass Play Button & Motion Wave */}
      {categoryId === 'video-motion' && (
        <div style={{ position: 'relative', width: '125px', height: '66px', background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.9)', boxShadow: '0 8px 24px rgba(236, 72, 153, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '8px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)', boxShadow: '0 4px 12px rgba(236, 72, 153, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '12px', paddingLeft: '2px' }}>
            ▶
          </div>
          <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
            <path d="M2 12 Q 15 2, 30 12 T 58 12" stroke="url(#vidGrad)" strokeWidth="3" strokeLinecap="round" />
            <defs>
              <linearGradient id="vidGrad" x1="0" y1="0" x2="60" y2="0">
                <stop stopColor="#EC4899" />
                <stop offset="1" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}

      {/* 5. Illustration: Golden Stylus & Ink Path */}
      {categoryId === 'illustration' && (
        <div style={{ position: 'relative', width: '120px', height: '66px', background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.9)', boxShadow: '0 8px 24px rgba(245, 158, 11, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <div style={{ fontSize: '24px' }}>✏️</div>
          <svg width="50" height="26" viewBox="0 0 50 26" fill="none">
            <path d="M4 20 C 14 4, 30 24, 46 6" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        </div>
      )}

      {/* 6. 3D & Animation: Frosted Glass Isometric Cube */}
      {categoryId === '3d-animation' && (
        <div style={{ position: 'relative', width: '120px', height: '66px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', transform: 'rotate(15deg)', boxShadow: '0 8px 24px rgba(16, 185, 129, 0.35)', border: '2px solid rgba(255, 255, 255, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '20px' }}>
            🧊
          </div>
        </div>
      )}

      {/* 7. AI Creative Tools: Luminous Glass Star Spark */}
      {categoryId === 'ai-creative-tools' && (
        <div style={{ position: 'relative', width: '120px', height: '66px', background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.9)', boxShadow: '0 8px 24px rgba(99, 102, 241, 0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)', boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '18px' }}>
            ✨
          </div>
          <span style={{ fontSize: '10px', fontWeight: 800, color: '#6366F1', letterSpacing: '0.04em' }}>AI STUDIO</span>
        </div>
      )}

      {/* 8. Productivity & Workflow: Glass Checkmark Badge */}
      {categoryId === 'productivity' && (
        <div style={{ position: 'relative', width: '120px', height: '66px', background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.9)', boxShadow: '0 8px 24px rgba(59, 130, 246, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)', boxShadow: '0 4px 12px rgba(59, 130, 246, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '16px', fontWeight: 800 }}>
            ✓
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div style={{ height: '4px', width: '40px', background: '#3B82F6', borderRadius: '2px' }} />
            <div style={{ height: '4px', width: '25px', background: '#10B981', borderRadius: '2px' }} />
          </div>
        </div>
      )}

      {/* 9. Cybersecurity: Webroot Emerald Shield */}
      {isCyber && (
        <div style={{ position: 'relative', width: '130px', height: '68px', background: 'linear-gradient(135deg, #064E3B 0%, #047857 100%)', borderRadius: '10px', border: '1px solid rgba(167, 243, 208, 0.4)', boxShadow: '0 8px 24px rgba(5, 150, 105, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#FFF' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
            🛡️
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#A7F3D0', letterSpacing: '0.04em' }}>WEBROOT</span>
            <span style={{ fontSize: '8px', opacity: 0.9 }}>Shield Defense</span>
          </div>
        </div>
      )}
    </div>
  );
}
