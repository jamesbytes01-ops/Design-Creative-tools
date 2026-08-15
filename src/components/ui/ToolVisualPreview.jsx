export default function ToolVisualPreview({ toolId, toolName, category }) {
  const getBrandGradient = (id) => {
    switch (id) {
      case 'figma': return 'linear-gradient(135deg, rgba(242, 78, 30, 0.12) 0%, rgba(162, 89, 255, 0.2) 100%)';
      case 'canva': return 'linear-gradient(135deg, rgba(0, 194, 255, 0.14) 0%, rgba(125, 42, 232, 0.2) 100%)';
      case 'adobe-photoshop': return 'linear-gradient(135deg, rgba(49, 168, 255, 0.15) 0%, rgba(0, 30, 96, 0.25) 100%)';
      case 'blender': return 'linear-gradient(135deg, rgba(232, 125, 13, 0.15) 0%, rgba(34, 37, 43, 0.25) 100%)';
      case 'framer': return 'linear-gradient(135deg, rgba(0, 85, 255, 0.15) 0%, rgba(168, 85, 247, 0.2) 100%)';
      case 'midjourney': return 'linear-gradient(135deg, rgba(147, 51, 234, 0.18) 0%, rgba(79, 70, 229, 0.25) 100%)';
      default: return 'linear-gradient(135deg, rgba(79, 70, 229, 0.12) 0%, rgba(6, 182, 212, 0.2) 100%)';
    }
  };

  const getBrandAccent = (id) => {
    switch (id) {
      case 'figma': return '#A259FF';
      case 'canva': return '#00C2FF';
      case 'adobe-photoshop': return '#38BDF8';
      case 'blender': return '#F97316';
      case 'framer': return '#0055FF';
      case 'midjourney': return '#C084FC';
      default: return '#4F46E5';
    }
  };

  const accentColor = getBrandAccent(toolId);

  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: '115px',
        borderRadius: '10px',
        background: getBrandGradient(toolId),
        border: `1px solid ${accentColor}25`,
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
          backgroundImage: `radial-gradient(${accentColor}25 1px, transparent 1px)`,
          backgroundSize: '14px 14px',
          opacity: 0.6,
        }}
      />

      {/* Figma Clean Vector Stage */}
      {toolId === 'figma' && (
        <div style={{ position: 'relative', width: '140px', height: '72px', background: '#FFFFFF', borderRadius: '8px', boxShadow: '0 6px 18px rgba(162, 89, 255, 0.15)', border: '1px solid rgba(162, 89, 255, 0.25)', padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '4px' }}>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F24E1E' }} />
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF7262' }} />
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#A259FF' }} />
            </div>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#A259FF', letterSpacing: '0.05em' }}>FIGMA CANVAS</span>
          </div>
          <div style={{ display: 'flex', gap: '6px', flex: 1 }}>
            <div style={{ width: '32px', background: '#F8FAFC', borderRadius: '4px', border: '1px solid #E2E8F0', padding: '3px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div style={{ height: '4px', background: '#CBD5E1', borderRadius: '2px' }} />
              <div style={{ height: '4px', background: '#E2E8F0', borderRadius: '2px' }} />
            </div>
            <div style={{ flex: 1, background: 'rgba(162, 89, 255, 0.08)', borderRadius: '4px', border: '1px dashed #A259FF', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '48px', height: '22px', background: '#FFFFFF', borderRadius: '4px', border: '1px solid #A259FF', boxShadow: '0 2px 6px rgba(162, 89, 255, 0.2)', fontSize: '8px', fontWeight: 700, color: '#F24E1E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Auto-Layout
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Canva Clean Vector Stage */}
      {toolId === 'canva' && (
        <div style={{ position: 'relative', width: '140px', height: '72px', background: '#FFFFFF', borderRadius: '8px', boxShadow: '0 6px 18px rgba(0, 194, 255, 0.15)', border: '1px solid rgba(0, 194, 255, 0.25)', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#00C2FF', letterSpacing: '0.05em' }}>CANVA STUDIO</span>
            <div style={{ padding: '1px 5px', borderRadius: '3px', background: '#00C2FF', color: '#FFF', fontSize: '7px', fontWeight: 700 }}>TEMPLATE</div>
          </div>
          <div style={{ height: '38px', borderRadius: '6px', background: 'linear-gradient(135deg, #7D2AE8 0%, #00C2FF 100%)', padding: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#FFF', boxShadow: '0 4px 10px rgba(0, 194, 255, 0.25)' }}>
            <div style={{ fontSize: '9px', fontWeight: 800 }}>Create Anything</div>
            <div style={{ fontSize: '7px', opacity: 0.85 }}>Social & Marketing</div>
          </div>
        </div>
      )}

      {/* Adobe Photoshop Clean Vector Stage */}
      {toolId === 'adobe-photoshop' && (
        <div style={{ position: 'relative', width: '140px', height: '72px', background: '#0F172A', borderRadius: '8px', boxShadow: '0 6px 18px rgba(56, 189, 248, 0.2)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px', color: '#FFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '3px' }}>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#38BDF8', letterSpacing: '0.05em' }}>PHOTOSHOP Ps</span>
            <span style={{ fontSize: '7px', color: '#94A3B8' }}>32-bit HDR</span>
          </div>
          <div style={{ display: 'flex', gap: '6px', flex: 1 }}>
            <div style={{ flex: 1, background: 'linear-gradient(135deg, #0284C7 0%, #0F172A 100%)', borderRadius: '4px', border: '1px solid #0369A1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
              🖼️
            </div>
            <div style={{ width: '38px', background: '#1E293B', borderRadius: '4px', padding: '3px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div style={{ height: '4px', background: '#38BDF8', borderRadius: '2px' }} />
              <div style={{ height: '4px', background: '#334155', borderRadius: '2px' }} />
              <div style={{ height: '4px', background: '#334155', borderRadius: '2px' }} />
            </div>
          </div>
        </div>
      )}

      {/* Blender Clean Vector Stage */}
      {toolId === 'blender' && (
        <div style={{ position: 'relative', width: '140px', height: '72px', background: '#FFFFFF', borderRadius: '8px', boxShadow: '0 6px 18px rgba(249, 115, 22, 0.15)', border: '1px solid rgba(249, 115, 22, 0.25)', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'linear-gradient(135deg, #EA580C 0%, #CA8A04 100%)', transform: 'rotate(15deg)', boxShadow: '0 4px 12px rgba(234, 88, 12, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '18px' }}>
            🧊
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '9px', fontWeight: 800, color: '#F97316', letterSpacing: '0.04em' }}>BLENDER 3D</span>
            <span style={{ fontSize: '8px', color: '#64748B', fontWeight: 600 }}>Octane Engine</span>
          </div>
        </div>
      )}

      {/* Framer Clean Vector Stage */}
      {toolId === 'framer' && (
        <div style={{ position: 'relative', width: '140px', height: '72px', background: '#FFFFFF', borderRadius: '8px', boxShadow: '0 6px 18px rgba(0, 85, 255, 0.15)', border: '1px solid rgba(0, 85, 255, 0.25)', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '3px' }}>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#0055FF', letterSpacing: '0.05em' }}>FRAMER CANVAS</span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#10B981' }}>● LIVE</span>
          </div>
          <div style={{ flex: 1, background: 'linear-gradient(135deg, #EFF6FF 0%, #EEF2FF 100%)', borderRadius: '4px', border: '1px solid #BFDBFE', padding: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px' }}>
            <div style={{ height: '6px', width: '70%', background: '#0055FF', borderRadius: '3px' }} />
            <div style={{ height: '14px', width: '100%', background: '#FFFFFF', borderRadius: '3px', border: '1px solid #DBEAFE' }} />
          </div>
        </div>
      )}

      {/* Midjourney Clean Vector Stage */}
      {toolId === 'midjourney' && (
        <div style={{ position: 'relative', width: '140px', height: '72px', background: '#0F172A', borderRadius: '8px', boxShadow: '0 6px 18px rgba(192, 132, 252, 0.25)', border: '1px solid rgba(192, 132, 252, 0.3)', padding: '8px', display: 'flex', flexDirection: 'column', gap: '4px', color: '#FFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#C084FC', letterSpacing: '0.05em' }}>MIDJOURNEY v6</span>
            <span style={{ fontSize: '7px', color: '#A855F7' }}>AI PROMPT</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4px', flex: 1 }}>
            <div style={{ background: 'linear-gradient(135deg, #9333EA 0%, #4F46E5 100%)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>✨</div>
            <div style={{ background: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>🎨</div>
          </div>
        </div>
      )}

      {/* Fallback Clean Stage for Remaining Software Catalog */}
      {!['figma', 'canva', 'adobe-photoshop', 'blender', 'framer', 'midjourney'].includes(toolId) && (
        <div style={{ position: 'relative', width: '140px', height: '72px', background: '#FFFFFF', borderRadius: '8px', boxShadow: '0 6px 18px rgba(79, 70, 229, 0.12)', border: '1px solid rgba(79, 70, 229, 0.2)', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '8px', fontWeight: 700, color: accentColor, letterSpacing: '0.05em' }}>{(toolName || 'SOFTWARE').toUpperCase()}</span>
            <span style={{ fontSize: '7px', fontWeight: 600, color: '#64748B' }}>{category}</span>
          </div>
          <div style={{ flex: 1, background: '#F8FAFC', borderRadius: '4px', border: '1px solid #E2E8F0', margin: '4px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
            🖥️
          </div>
        </div>
      )}
    </div>
  );
}
