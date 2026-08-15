export default function CategoryVisualPreview({ categoryId, colorAccent = '#4F46E5' }) {
  const customImageCategories = [
    'graphic-design',
    'ui-ux-design',
    'photo-editing',
    'video-motion',
    'illustration',
    '3d-animation',
    'ai-creative-tools'
  ];

  const hasCustomImage = customImageCategories.includes(categoryId);
  const isCyber = categoryId === 'cybersecurity';

  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: '120px',
        borderRadius: '10px',
        background: isCyber
          ? 'linear-gradient(135deg, #064E3B 0%, #047857 100%)'
          : `linear-gradient(135deg, ${colorAccent}20 0%, ${colorAccent}40 100%)`,
        border: `1px solid ${isCyber ? 'var(--webroot-border)' : `${colorAccent}30`}`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.25rem',
      }}
    >
      {hasCustomImage ? (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src={`/images/categories/${categoryId}.png`}
            alt={`${categoryId} Banner`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          {/* Ambient Overlay Gradient */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(15, 23, 42, 0.4) 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>
      ) : isCyber ? (
        <div style={{ position: 'relative', width: '100%', height: '100%', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(8px)', padding: '8px 14px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
            <span style={{ fontSize: '20px' }}>🛡️</span>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#A7F3D0', letterSpacing: '0.04em' }}>WEBROOT SECURITY</div>
              <div style={{ fontSize: '9px', opacity: 0.9 }}>Enterprise Threat Defense</div>
            </div>
          </div>
        </div>
      ) : (
        /* Productivity & Fallback 3D Visual Box */
        <div style={{ position: 'relative', width: '100%', height: '100%', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(8px)', padding: '8px 14px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
            <span style={{ fontSize: '20px' }}>⚡</span>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.04em' }}>WORKFLOW & ASSETS</div>
              <div style={{ fontSize: '9px', opacity: 0.9 }}>Productivity Engine</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
