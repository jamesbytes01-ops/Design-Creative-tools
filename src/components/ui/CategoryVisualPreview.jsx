export default function CategoryVisualPreview({ categoryId, colorAccent = '#4F46E5' }) {
  const isCyber = categoryId === 'cybersecurity';

  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: '115px',
        borderRadius: '10px',
        background: isCyber
          ? 'linear-gradient(135deg, #064E3B 0%, #047857 100%)'
          : `linear-gradient(135deg, ${colorAccent}12 0%, ${colorAccent}25 100%)`,
        border: `1px solid ${isCyber ? 'rgba(167, 243, 208, 0.3)' : `${colorAccent}25`}`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.25rem',
      }}
    >
      {/* Background Subtle Tech Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${colorAccent}22 1px, transparent 1px)`,
          backgroundSize: '14px 14px',
          opacity: 0.7,
        }}
      />

      {/* 1. GRAPHIC DESIGN: Vector Pen Tool & Color Palette Stage */}
      {categoryId === 'graphic-design' && (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              width: '140px',
              height: '72px',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              boxShadow: '0 6px 18px rgba(79, 70, 229, 0.12)',
              border: '1px solid rgba(79, 70, 229, 0.15)',
              padding: '8px 10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '5px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#4F46E5' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EC4899' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }} />
              </div>
              <span style={{ fontSize: '9px', fontWeight: 700, color: '#4F46E5', letterSpacing: '0.05em' }}>VECTOR ART</span>
            </div>
            {/* Vector Curve */}
            <svg width="120" height="24" viewBox="0 0 120 24" fill="none">
              <path d="M6 18 C 30 2, 80 22, 114 6" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="6" cy="18" r="3" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="2" />
              <circle cx="114" cy="6" r="3" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="2" />
              <rect x="55" y="6" width="6" height="6" fill="#EC4899" rx="1" />
            </svg>
          </div>
        </div>
      )}

      {/* 2. UI/UX DESIGN: Glassmorphic App Component Wireframe */}
      {categoryId === 'ui-ux-design' && (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              width: '145px',
              height: '74px',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              boxShadow: '0 6px 18px rgba(139, 92, 246, 0.12)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '4px' }}>
              <div style={{ width: '28px', height: '6px', borderRadius: '3px', background: '#8B5CF6' }} />
              <div style={{ display: 'flex', gap: '3px' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#CBD5E1' }} />
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#CBD5E1' }} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '6px', flex: 1 }}>
              <div style={{ flex: 1, background: 'rgba(139, 92, 246, 0.08)', borderRadius: '5px', border: '1px solid rgba(139, 92, 246, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '4px', background: '#8B5CF6' }} />
              </div>
              <div style={{ flex: 1.2, background: '#F8FAFC', borderRadius: '5px', padding: '4px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <div style={{ width: '80%', height: '4px', background: '#CBD5E1', borderRadius: '2px' }} />
                <div style={{ width: '100%', height: '4px', background: '#E2E8F0', borderRadius: '2px' }} />
                <div style={{ width: '60%', height: '4px', background: '#8B5CF6', borderRadius: '2px' }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. PHOTO EDITING: Lens Aperture & Adjustment Graph */}
      {categoryId === 'photo-editing' && (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              width: '140px',
              height: '72px',
              backgroundColor: '#0F172A',
              borderRadius: '8px',
              boxShadow: '0 6px 18px rgba(6, 182, 212, 0.2)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              padding: '8px 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#FFFFFF',
            }}
          >
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 12px rgba(6, 182, 212, 0.5)' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '2px solid #FFFFFF' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, marginLeft: '10px' }}>
              <div style={{ fontSize: '8px', fontWeight: 700, color: '#38BDF8', letterSpacing: '0.05em' }}>COLOR GRADE</div>
              <div style={{ height: '4px', width: '100%', background: 'linear-gradient(90deg, #06B6D4, #3B82F6)', borderRadius: '2px' }} />
              <div style={{ height: '4px', width: '70%', background: '#334155', borderRadius: '2px' }} />
            </div>
          </div>
        </div>
      )}

      {/* 4. VIDEO & MOTION: Timeline Keyframes Track */}
      {categoryId === 'video-motion' && (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              width: '140px',
              height: '72px',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              boxShadow: '0 6px 18px rgba(236, 72, 153, 0.15)',
              border: '1px solid rgba(236, 72, 153, 0.25)',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '9px', fontWeight: 700, color: '#EC4899', letterSpacing: '0.05em' }}>TIMELINE VFX</span>
              <span style={{ fontSize: '8px', fontWeight: 700, color: '#94A3B8' }}>60 FPS</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ height: '12px', background: 'rgba(236, 72, 153, 0.12)', borderRadius: '4px', borderLeft: '3px solid #EC4899', display: 'flex', alignItems: 'center', padding: '0 4px', justifyContent: 'space-between' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#EC4899' }} />
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#EC4899' }} />
              </div>
              <div style={{ height: '12px', background: 'rgba(99, 102, 241, 0.12)', borderRadius: '4px', borderLeft: '3px solid #6366F1', display: 'flex', alignItems: 'center', padding: '0 4px' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#6366F1' }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. ILLUSTRATION: Stylus Canvas & Brush Path */}
      {categoryId === 'illustration' && (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              width: '140px',
              height: '72px',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              boxShadow: '0 6px 18px rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '18px', boxShadow: '0 4px 10px rgba(245, 158, 11, 0.3)' }}>
              🎨
            </div>
            <div style={{ flex: 1, marginLeft: '10px', height: '44px', borderRadius: '6px', background: '#FFFBEB', border: '1px dashed #FCD34D', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                <path d="M4 18 C 16 2, 32 22, 44 6" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* 6. 3D & ANIMATION: Isometric Raytraced Cube Mesh */}
      {categoryId === '3d-animation' && (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              width: '140px',
              height: '74px',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              boxShadow: '0 6px 18px rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
            }}
          >
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'linear-gradient(135deg, #10B981 0%, #047857 100%)', transform: 'rotate(15deg)', boxShadow: '0 6px 14px rgba(16, 185, 129, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '18px' }}>
              🧊
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '9px', fontWeight: 800, color: '#10B981', letterSpacing: '0.04em' }}>CYCLES 3D</span>
              <span style={{ fontSize: '8px', color: '#64748B', fontWeight: 600 }}>Raytrace Mesh</span>
            </div>
          </div>
        </div>
      )}

      {/* 7. AI CREATIVE TOOLS: Neural Synthesis Matrix */}
      {categoryId === 'ai-creative-tools' && (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              width: '140px',
              height: '72px',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              boxShadow: '0 6px 18px rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ fontSize: '9px', fontWeight: 700, color: '#6366F1', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>✨ NEURAL AI STUDIO</span>
            </div>
            <div style={{ height: '30px', borderRadius: '6px', background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #EC4899 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '9px', fontWeight: 700, boxShadow: '0 4px 10px rgba(99, 102, 241, 0.25)' }}>
              Prompt to Vector →
            </div>
          </div>
        </div>
      )}

      {/* 8. PRODUCTIVITY & WORKFLOW: Workflow Kanban Board */}
      {categoryId === 'productivity' && (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              width: '140px',
              height: '72px',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              boxShadow: '0 6px 18px rgba(59, 130, 246, 0.15)',
              border: '1px solid rgba(59, 130, 246, 0.25)',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '9px', fontWeight: 700, color: '#3B82F6', letterSpacing: '0.05em' }}>KANBAN BOARD</span>
              <span style={{ fontSize: '8px', color: '#10B981', fontWeight: 700 }}>✓ 100%</span>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ flex: 1, height: '30px', background: '#EFF6FF', borderRadius: '5px', borderLeft: '3px solid #3B82F6' }} />
              <div style={{ flex: 1, height: '30px', background: '#ECFDF5', borderRadius: '5px', borderLeft: '3px solid #10B981' }} />
            </div>
          </div>
        </div>
      )}

      {/* 9. CYBERSECURITY: Webroot Security Badge Stage */}
      {isCyber && (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              width: '145px',
              height: '74px',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(8px)',
              borderRadius: '8px',
              border: '1px solid rgba(167, 243, 208, 0.4)',
              padding: '8px 10px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#FFFFFF',
              boxShadow: '0 6px 18px rgba(5, 150, 105, 0.3)',
            }}
          >
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)' }}>
              🛡️
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '10px', fontWeight: 800, color: '#A7F3D0', letterSpacing: '0.04em' }}>WEBROOT SHIELD</span>
              <span style={{ fontSize: '8px', opacity: 0.9 }}>Active Threat Defense</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
