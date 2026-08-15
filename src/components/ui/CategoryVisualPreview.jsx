export default function CategoryVisualPreview({ categoryId, colorAccent = '#4F46E5' }) {
  const getCategoryConfig = (id) => {
    switch (id) {
      case 'graphic-design':
        return {
          gradient: 'linear-gradient(135deg, #1E1B4B 0%, #311042 50%, #431407 100%)',
          border: 'rgba(99, 102, 241, 0.35)',
          badgeText: 'VECTOR STUDIO',
          badgeColor: '#A5B4FC',
          glow: 'rgba(236, 72, 153, 0.4)',
          icon: '🎨',
          accent: '#EC4899',
        };
      case 'ui-ux-design':
        return {
          gradient: 'linear-gradient(135deg, #1E1035 0%, #2E1065 50%, #0F172A 100%)',
          border: 'rgba(168, 85, 247, 0.35)',
          badgeText: 'INTERFACE MATRIX',
          badgeColor: '#C084FC',
          glow: 'rgba(168, 85, 247, 0.4)',
          icon: '📱',
          accent: '#A855F7',
        };
      case 'photo-editing':
        return {
          gradient: 'linear-gradient(135deg, #083344 0%, #0C4A6E 50%, #0F172A 100%)',
          border: 'rgba(56, 189, 248, 0.35)',
          badgeText: 'COLOR RETOUCHING',
          badgeColor: '#38BDF8',
          glow: 'rgba(56, 189, 248, 0.4)',
          icon: '📷',
          accent: '#38BDF8',
        };
      case 'video-motion':
        return {
          gradient: 'linear-gradient(135deg, #4C0519 0%, #831843 50%, #1E1035 100%)',
          border: 'rgba(251, 113, 133, 0.35)',
          badgeText: 'TIMELINE ENGINE',
          badgeColor: '#FB7185',
          glow: 'rgba(251, 113, 133, 0.4)',
          icon: '🎬',
          accent: '#FB7185',
        };
      case 'illustration':
        return {
          gradient: 'linear-gradient(135deg, #451A03 0%, #78350F 50%, #1E1B4B 100%)',
          border: 'rgba(251, 191, 36, 0.35)',
          badgeText: 'STYLUS CANVAS',
          badgeColor: '#FBBF24',
          glow: 'rgba(251, 191, 36, 0.4)',
          icon: '✏️',
          accent: '#FBBF24',
        };
      case '3d-animation':
        return {
          gradient: 'linear-gradient(135deg, #064E3B 0%, #022C22 50%, #0F172A 100%)',
          border: 'rgba(52, 211, 153, 0.35)',
          badgeText: 'RAYTRACE 3D',
          badgeColor: '#34D399',
          glow: 'rgba(52, 211, 153, 0.4)',
          icon: '🧊',
          accent: '#34D399',
        };
      case 'ai-creative-tools':
        return {
          gradient: 'linear-gradient(135deg, #311042 0%, #4C1D95 50%, #1E1B4B 100%)',
          border: 'rgba(192, 132, 252, 0.35)',
          badgeText: 'NEURAL AI SYNTHESIS',
          badgeColor: '#E9D5FF',
          glow: 'rgba(192, 132, 252, 0.45)',
          icon: '✨',
          accent: '#C084FC',
        };
      case 'productivity':
        return {
          gradient: 'linear-gradient(135deg, #172554 0%, #1E3A8A 50%, #022C22 100%)',
          border: 'rgba(96, 165, 250, 0.35)',
          badgeText: 'WORKFLOW ENGINE',
          badgeColor: '#93C5FD',
          glow: 'rgba(96, 165, 250, 0.4)',
          icon: '⚡',
          accent: '#60A5FA',
        };
      case 'cybersecurity':
        return {
          gradient: 'linear-gradient(135deg, #064E3B 0%, #047857 50%, #022C22 100%)',
          border: 'rgba(167, 243, 208, 0.45)',
          badgeText: 'WEBROOT SHIELD',
          badgeColor: '#A7F3D0',
          glow: 'rgba(167, 243, 208, 0.5)',
          icon: '🛡️',
          accent: '#A7F3D0',
        };
      default:
        return {
          gradient: 'linear-gradient(135deg, #1E1B4B 0%, #311042 100%)',
          border: 'rgba(165, 180, 252, 0.3)',
          badgeText: 'CREATIVE DISCIPLINE',
          badgeColor: '#A5B4FC',
          glow: 'rgba(165, 180, 252, 0.4)',
          icon: '✨',
          accent: '#A5B4FC',
        };
    }
  };

  const config = getCategoryConfig(categoryId);

  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: '115px',
        borderRadius: '10px',
        background: config.gradient,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: config.border,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1rem',
        marginBottom: '1.25rem',
        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 4px 16px rgba(0, 0, 0, 0.12)',
      }}
    >
      {/* Background Ambient Glow Orb */}
      <div
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-10px',
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          background: config.glow,
          filter: 'blur(28px)',
          pointerEvents: 'none',
        }}
      />

      {/* Micro Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
          pointerEvents: 'none',
        }}
      />

      {/* Left Area: Glassmorphic Capsule Tag & Subtitle */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '9999px',
            padding: '3px 10px',
            fontSize: '9px',
            fontWeight: 800,
            color: config.badgeColor,
            letterSpacing: '0.06em',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: config.badgeColor, display: 'inline-block', boxShadow: `0 0 8px ${config.badgeColor}` }} />
          {config.badgeText}
        </div>

        <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.75)', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>PRO WORKFLOW</span>
          <span style={{ opacity: 0.5 }}>•</span>
          <span style={{ color: config.badgeColor }}>SUITE</span>
        </div>
      </div>

      {/* Right Area: Luminous 3D Glass Emblem */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '14px',
            background: 'rgba(255, 255, 255, 0.14)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: `0 8px 24px rgba(0, 0, 0, 0.3), 0 0 20px ${config.glow}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
          }}
        >
          {config.icon}
        </div>
      </div>
    </div>
  );
}
