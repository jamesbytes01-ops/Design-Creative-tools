export default function ToolVisualPreview({ toolId, toolName, category }) {
  const getBrandGradient = (id) => {
    switch (id) {
      case 'figma': return 'linear-gradient(135deg, rgba(242, 78, 30, 0.12) 0%, rgba(162, 89, 255, 0.18) 100%)';
      case 'canva': return 'linear-gradient(135deg, rgba(0, 194, 255, 0.14) 0%, rgba(125, 42, 232, 0.18) 100%)';
      case 'adobe-photoshop': return 'linear-gradient(135deg, rgba(49, 168, 255, 0.15) 0%, rgba(0, 30, 96, 0.25) 100%)';
      case 'blender': return 'linear-gradient(135deg, rgba(232, 125, 13, 0.15) 0%, rgba(34, 37, 43, 0.25) 100%)';
      case 'framer': return 'linear-gradient(135deg, rgba(0, 85, 255, 0.15) 0%, rgba(168, 85, 247, 0.18) 100%)';
      case 'affinity-designer': return 'linear-gradient(135deg, rgba(35, 166, 213, 0.15) 0%, rgba(225, 33, 114, 0.18) 100%)';
      case 'adobe-illustrator': return 'linear-gradient(135deg, rgba(255, 154, 0, 0.15) 0%, rgba(51, 0, 0, 0.22) 100%)';
      case 'procreate': return 'linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(99, 102, 241, 0.18) 100%)';
      case 'midjourney': return 'linear-gradient(135deg, rgba(147, 51, 234, 0.18) 0%, rgba(79, 70, 229, 0.25) 100%)';
      default: return 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(168, 85, 247, 0.14) 100%)';
    }
  };

  const getBrandBorder = (id) => {
    switch (id) {
      case 'figma': return 'rgba(162, 89, 255, 0.25)';
      case 'canva': return 'rgba(0, 194, 255, 0.3)';
      case 'adobe-photoshop': return 'rgba(49, 168, 255, 0.3)';
      case 'blender': return 'rgba(232, 125, 13, 0.3)';
      case 'framer': return 'rgba(0, 85, 255, 0.3)';
      case 'midjourney': return 'rgba(147, 51, 234, 0.3)';
      default: return 'rgba(99, 102, 241, 0.25)';
    }
  };

  const bgGradient = getBrandGradient(toolId);
  const borderColor = getBrandBorder(toolId);

  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: '125px',
        borderRadius: '10px',
        background: bgGradient,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: borderColor,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.25rem',
      }}
    >
      {/* Background Micro Grid */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* Figma Mini App Preview */}
      {toolId === 'figma' && (
        <div style={{ position: 'relative', width: '90%', height: '85px', background: '#FFFFFF', borderRadius: '8px', boxShadow: '0 8px 20px rgba(0,0,0,0.08)', padding: '6px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '4px' }}>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F24E1E' }} />
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF7262' }} />
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#A259FF' }} />
            </div>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#A259FF' }}>FIGMA CANVAS</span>
          </div>
          <div style={{ display: 'flex', gap: '6px', flex: 1 }}>
            <div style={{ width: '32px', background: '#F8FAFC', borderRadius: '4px', border: '1px solid #E2E8F0', padding: '3px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div style={{ height: '4px', background: '#CBD5E1', borderRadius: '2px' }} />
              <div style={{ height: '4px', background: '#E2E8F0', borderRadius: '2px' }} />
            </div>
            <div style={{ flex: 1, background: 'rgba(162, 89, 255, 0.06)', borderRadius: '4px', border: '1px dashed #A259FF', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '40px', height: '24px', background: '#FFFFFF', borderRadius: '4px', border: '1px solid #A259FF', boxShadow: '0 2px 6px rgba(162, 89, 255, 0.2)', fontSize: '8px', fontWeight: 700, color: '#F24E1E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Frame 1
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Canva Mini App Preview */}
      {toolId === 'canva' && (
        <div style={{ position: 'relative', width: '90%', height: '85px', background: '#FFFFFF', borderRadius: '8px', boxShadow: '0 8px 20px rgba(0,0,0,0.08)', padding: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#00C2FF' }}>CANVA DESIGN STUDIO</span>
            <div style={{ padding: '1px 4px', borderRadius: '3px', background: '#00C2FF', color: '#FFF', fontSize: '7px', fontWeight: 700 }}>TEMPLATE</div>
          </div>
          <div style={{ height: '50px', borderRadius: '6px', background: 'linear-gradient(135deg, #7D2AE8 0%, #00C2FF 100%)', padding: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#FFF' }}>
            <div style={{ fontSize: '9px', fontWeight: 800 }}>Create Anything</div>
            <div style={{ fontSize: '7px', opacity: 0.8 }}>Social Media & Graphics</div>
          </div>
        </div>
      )}

      {/* Adobe Photoshop Mini App Preview */}
      {toolId === 'adobe-photoshop' && (
        <div style={{ position: 'relative', width: '90%', height: '85px', background: '#1E293B', borderRadius: '8px', boxShadow: '0 8px 20px rgba(0,0,0,0.18)', padding: '6px', display: 'flex', flexDirection: 'column', gap: '5px', color: '#FFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '3px' }}>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#38BDF8' }}>Ps PHOTOSHOP WORKSPACE</span>
            <span style={{ fontSize: '7px', color: '#94A3B8' }}>RGB / 16-bit</span>
          </div>
          <div style={{ display: 'flex', gap: '6px', flex: 1 }}>
            <div style={{ flex: 1, background: 'linear-gradient(135deg, #0284C7 0%, #0F172A 100%)', borderRadius: '4px', border: '1px solid #0369A1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
              🖼️
            </div>
            <div style={{ width: '38px', background: '#0F172A', borderRadius: '4px', padding: '3px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div style={{ height: '5px', background: '#38BDF8', borderRadius: '2px' }} />
              <div style={{ height: '5px', background: '#334155', borderRadius: '2px' }} />
              <div style={{ height: '5px', background: '#334155', borderRadius: '2px' }} />
            </div>
          </div>
        </div>
      )}

      {/* Blender 3D Mini App Preview */}
      {toolId === 'blender' && (
        <div style={{ position: 'relative', width: '90%', height: '85px', background: '#27272A', borderRadius: '8px', boxShadow: '0 8px 20px rgba(0,0,0,0.2)', padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px', color: '#FFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #3F3F46', paddingBottom: '3px' }}>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#F97316' }}>BLENDER 3D VIEWPORT</span>
            <span style={{ fontSize: '7px', color: '#A1A1AA' }}>Cycles Render</span>
          </div>
          <div style={{ flex: 1, background: '#18181B', borderRadius: '4px', border: '1px solid #3F3F46', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '6px', background: 'linear-gradient(135deg, #EA580C 0%, #CA8A04 100%)', transform: 'rotate(25deg)', boxShadow: '0 4px 12px rgba(234, 88, 12, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
              🧊
            </div>
            <div style={{ fontSize: '8px', color: '#F97316', fontWeight: 700, display: 'flex', flexDirection: 'column' }}>
              <span>MESH</span>
              <span>LIGHTS</span>
            </div>
          </div>
        </div>
      )}

      {/* Framer Mini App Preview */}
      {toolId === 'framer' && (
        <div style={{ position: 'relative', width: '90%', height: '85px', background: '#FFFFFF', borderRadius: '8px', boxShadow: '0 8px 20px rgba(0,0,0,0.08)', padding: '6px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '3px' }}>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#0055FF' }}>FRAMER SITE BUILDER</span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#10B981' }}>● LIVE</span>
          </div>
          <div style={{ flex: 1, background: 'linear-gradient(135deg, #EFF6FF 0%, #EEF2FF 100%)', borderRadius: '4px', border: '1px solid #BFDBFE', padding: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px' }}>
            <div style={{ height: '6px', width: '70%', background: '#0055FF', borderRadius: '3px' }} />
            <div style={{ height: '14px', width: '100%', background: '#FFFFFF', borderRadius: '3px', border: '1px solid #DBEAFE' }} />
          </div>
        </div>
      )}

      {/* Midjourney Mini AI Preview */}
      {toolId === 'midjourney' && (
        <div style={{ position: 'relative', width: '90%', height: '85px', background: '#0F172A', borderRadius: '8px', boxShadow: '0 8px 20px rgba(0,0,0,0.25)', padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px', color: '#FFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#C084FC' }}>MIDJOURNEY AI GENERATOR</span>
            <span style={{ fontSize: '7px', color: '#A855F7' }}>v6.0</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4px', flex: 1 }}>
            <div style={{ background: 'linear-gradient(135deg, #9333EA 0%, #4F46E5 100%)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✨</div>
            <div style={{ background: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>🎨</div>
          </div>
        </div>
      )}

      {/* Fallback for other software tools */}
      {!['figma', 'canva', 'adobe-photoshop', 'blender', 'framer', 'midjourney'].includes(toolId) && (
        <div style={{ position: 'relative', width: '90%', height: '85px', background: '#FFFFFF', borderRadius: '8px', boxShadow: '0 8px 20px rgba(0,0,0,0.08)', padding: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '8px', fontWeight: 700, color: 'var(--primary-600)' }}>{(toolName || 'SOFTWARE').toUpperCase()} STUDIO</span>
            <span style={{ fontSize: '7px', fontWeight: 600, color: 'var(--text-muted)' }}>{category}</span>
          </div>
          <div style={{ flex: 1, background: 'var(--bg-secondary)', borderRadius: '4px', border: '1px solid var(--border-light)', margin: '4px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
            🖥️
          </div>
        </div>
      )}
    </div>
  );
}
