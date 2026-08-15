import Image from 'next/image';

export default function ToolVisualPreview({ toolId, toolName, category }) {
  const customImageTools = ['figma', 'canva', 'adobe-photoshop', 'blender', 'framer', 'midjourney'];
  const hasCustomImage = customImageTools.includes(toolId);

  const getBrandGradient = (id) => {
    switch (id) {
      case 'figma': return 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)';
      case 'canva': return 'linear-gradient(135deg, #00C2FF 0%, #7D2AE8 100%)';
      case 'adobe-photoshop': return 'linear-gradient(135deg, #0284C7 0%, #0F172A 100%)';
      case 'blender': return 'linear-gradient(135deg, #EA580C 0%, #18181B 100%)';
      case 'framer': return 'linear-gradient(135deg, #0055FF 0%, #A855F7 100%)';
      case 'midjourney': return 'linear-gradient(135deg, #9333EA 0%, #0F172A 100%)';
      default: return 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)';
    }
  };

  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: '135px',
        borderRadius: '10px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.25rem',
        background: getBrandGradient(toolId),
      }}
    >
      {hasCustomImage ? (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* High-Resolution Showcase Image */}
          <img
            src={`/images/tools/${toolId}.png`}
            alt={`${toolName} Showcase`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.3s ease',
            }}
          />

          {/* Gradient Ambient Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(15, 23, 42, 0.45) 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Software Badge Overlay */}
          <div
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              backgroundColor: 'rgba(15, 23, 42, 0.65)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '9999px',
              padding: '2px 8px',
              fontSize: '10px',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '0.04em',
            }}
          >
            OFFICIAL SUITE
          </div>
        </div>
      ) : (
        /* Fallback for remaining software catalog items */
        <div style={{ position: 'relative', width: '100%', height: '100%', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFFFFF' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.05em', opacity: 0.9 }}>
              {(toolName || 'SOFTWARE').toUpperCase()}
            </span>
            <span style={{ fontSize: '9px', backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
              {category}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '6px', backgroundColor: 'rgba(255, 255, 255, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
              ⚡
            </div>
            <span style={{ fontSize: '11px', fontWeight: 700 }}>PRO CREATIVE STUDIO</span>
          </div>
        </div>
      )}
    </div>
  );
}
