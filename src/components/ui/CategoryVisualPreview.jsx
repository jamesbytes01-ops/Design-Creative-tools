export default function CategoryVisualPreview({ categoryId, colorAccent = '#4F46E5' }) {
  const isCyber = categoryId === 'cybersecurity';

  return (
    <div
      style={{
        width: '100%',
        height: '110px',
        borderRadius: 'var(--radius-md)',
        background: isCyber
          ? 'linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(6, 78, 59, 0.25) 100%)'
          : `linear-gradient(135deg, ${colorAccent}15 0%, ${colorAccent}28 100%)`,
        border: `1px solid ${isCyber ? 'var(--webroot-border)' : `${colorAccent}30`}`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.25rem',
        transition: 'transform var(--transition-normal), border-color var(--transition-fast)',
      }}
      aria-hidden="true"
    >
      {/* Background Subtle Grid Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${colorAccent}25 1px, transparent 1px)`,
          backgroundSize: '12px 12px',
          opacity: 0.6,
        }}
      />

      {/* Category Specific Visual Illustrations */}
      {categoryId === 'graphic-design' && (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Vector Art Canvas */}
          <div style={{ width: '130px', height: '70px', background: '#FFFFFF', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#4F46E5' }} />
              <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#EC4899' }} />
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#F59E0B' }} />
            </div>
            <div style={{ height: '8px', borderRadius: '4px', background: 'linear-gradient(90deg, #4F46E5, #7C3AED, #EC4899)' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', fontWeight: 700, color: '#4F46E5' }}>
              <span>VECTOR</span>
              <span>100%</span>
            </div>
          </div>
        </div>
      )}

      {categoryId === 'ui-ux-design' && (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Miniature App Screen Wireframe */}
          <div style={{ width: '140px', height: '72px', background: '#FFFFFF', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', pb: '4px' }}>
              <div style={{ width: '24px', height: '6px', borderRadius: '3px', background: '#8B5CF6' }} />
              <div style={{ display: 'flex', gap: '3px' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#CBD5E1' }} />
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#CBD5E1' }} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ flex: 1, height: '36px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '4px', border: '1px stroke rgba(139, 92, 246, 0.3)' }} />
              <div style={{ flex: 1, height: '36px', background: '#F8FAFC', borderRadius: '4px' }} />
            </div>
          </div>
        </div>
      )}

      {categoryId === 'photo-editing' && (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Photo Canvas & Adjustments */}
          <div style={{ width: '135px', height: '70px', background: '#FFFFFF', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', padding: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '50px', height: '56px', borderRadius: '6px', background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '18px' }}>
              📸
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ height: '4px', width: '80%', background: '#06B6D4', borderRadius: '2px' }} />
              <div style={{ height: '4px', width: '100%', background: '#E2E8F0', borderRadius: '2px' }} />
              <div style={{ height: '4px', width: '60%', background: '#3B82F6', borderRadius: '2px' }} />
            </div>
          </div>
        </div>
      )}

      {categoryId === 'video-motion' && (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Video Timeline Preview */}
          <div style={{ width: '140px', height: '70px', background: '#FFFFFF', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', padding: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EC4899', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '8px' }}>▶</div>
              <div style={{ fontSize: '9px', fontWeight: 600, color: '#EC4899' }}>00:12:04</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div style={{ height: '10px', background: 'rgba(236, 72, 153, 0.18)', borderRadius: '3px', borderLeft: '3px solid #EC4899' }} />
              <div style={{ height: '10px', background: 'rgba(99, 102, 241, 0.18)', borderRadius: '3px', borderLeft: '3px solid #6366F1' }} />
            </div>
          </div>
        </div>
      )}

      {categoryId === 'illustration' && (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Artwork Stylus Canvas */}
          <div style={{ width: '135px', height: '70px', background: '#FFFFFF', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '24px' }}>🎨</div>
            <div style={{ width: '65px', height: '45px', borderRadius: '6px', background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)', border: '1px solid #FCD34D', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="36" height="24" viewBox="0 0 36 24" fill="none">
                <path d="M4 18 C 10 4, 20 20, 32 6" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {categoryId === '3d-animation' && (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Isometric 3D Mesh Render */}
          <div style={{ width: '135px', height: '72px', background: '#FFFFFF', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', transform: 'rotate(12deg)', boxShadow: '0 6px 16px rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '20px' }}>
              🧊
            </div>
            <div style={{ fontSize: '10px', fontWeight: 700, color: '#10B981', display: 'flex', flexDirection: 'column' }}>
              <span>CYCLES</span>
              <span>RENDER</span>
            </div>
          </div>
        </div>
      )}

      {categoryId === 'ai-creative-tools' && (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* AI Generation Canvas */}
          <div style={{ width: '140px', height: '70px', background: '#FFFFFF', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', padding: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '9px', fontWeight: 700, color: '#6366F1' }}>
              <span>✨ GENERATIVE AI</span>
            </div>
            <div style={{ height: '32px', borderRadius: '6px', background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #EC4899 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '10px', fontWeight: 600 }}>
              Prompt to Render →
            </div>
          </div>
        </div>
      )}

      {categoryId === 'productivity' && (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Workflow Task Board */}
          <div style={{ width: '135px', height: '70px', background: '#FFFFFF', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '9px', fontWeight: 700, color: '#3B82F6' }}>WORKFLOW BOARD</span>
              <span style={{ fontSize: '9px', color: '#10B981', fontWeight: 700 }}>✓ 100%</span>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div style={{ flex: 1, height: '32px', background: '#EFF6FF', borderRadius: '4px', borderLeft: '3px solid #3B82F6' }} />
              <div style={{ flex: 1, height: '32px', background: '#ECFDF5', borderRadius: '4px', borderLeft: '3px solid #10B981' }} />
            </div>
          </div>
        </div>
      )}

      {isCyber && (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Webroot Security Shield Preview */}
          <div style={{ width: '145px', height: '72px', background: 'linear-gradient(135deg, #064E3B 0%, #047857 100%)', borderRadius: '8px', boxShadow: '0 6px 16px rgba(5, 150, 105, 0.3)', padding: '8px 10px', display: 'flex', alignItems: 'center', gap: '10px', color: '#FFF' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
              🛡️
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#A7F3D0' }}>WEBROOT SHIELD</span>
              <span style={{ fontSize: '8px', opacity: 0.9 }}>Real-Time Defense</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
