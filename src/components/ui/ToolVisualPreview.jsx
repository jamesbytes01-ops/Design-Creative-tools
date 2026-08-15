import { Palette, Layout, Image as ImageIcon, Video, PenTool, Box, Sparkles, Zap, Shield, Wand2, Compass, Layers } from 'lucide-react';

export default function ToolVisualPreview({ toolId, toolName, category }) {
  // Only tools with dedicated unique 8K showcase images
  const primaryCustomImageTools = ['figma', 'canva', 'adobe-photoshop', 'blender', 'framer', 'midjourney'];
  const hasPrimaryImage = primaryCustomImageTools.includes(toolId);

  const getBespokeToolTheme = (id, catName) => {
    switch (id) {
      case 'affinity-designer':
        return {
          bg: 'linear-gradient(135deg, #0284C7 0%, #0F172A 50%, #06B6D4 100%)',
          badgeBg: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
          shadow: 'rgba(6, 182, 212, 0.45)',
          label: 'VECTOR & RASTER STUDIO',
          Icon: PenTool,
        };
      case 'adobe-illustrator':
        return {
          bg: 'linear-gradient(135deg, #C2410C 0%, #18181B 50%, #F59E0B 100%)',
          badgeBg: 'linear-gradient(135deg, #EA580C 0%, #F59E0B 100%)',
          shadow: 'rgba(245, 158, 11, 0.45)',
          label: 'VECTOR GRAPHICS SUITE',
          Icon: Palette,
        };
      case 'procreate':
        return {
          bg: 'linear-gradient(135deg, #831843 0%, #18181B 50%, #EC4899 100%)',
          badgeBg: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
          shadow: 'rgba(236, 72, 153, 0.45)',
          label: 'DIGITAL PAINTING & ILLUSTRATION',
          Icon: Wand2,
        };
      case 'davinci-resolve':
        return {
          bg: 'linear-gradient(135deg, #311042 0%, #0F172A 50%, #8B5CF6 100%)',
          badgeBg: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
          shadow: 'rgba(139, 92, 246, 0.45)',
          label: 'HOLLYWOOD COLOR & VFX STUDIO',
          Icon: Video,
        };
      case 'adobe-premiere-pro':
        return {
          bg: 'linear-gradient(135deg, #4C0519 0%, #18181B 50%, #E11D48 100%)',
          badgeBg: 'linear-gradient(135deg, #E11D48 0%, #FB7185 100%)',
          shadow: 'rgba(225, 29, 72, 0.45)',
          label: 'PRO VIDEO EDITING TIMELINE',
          Icon: Video,
        };
      case 'spline-3d':
        return {
          bg: 'linear-gradient(135deg, #064E3B 0%, #0F172A 50%, #10B981 100%)',
          badgeBg: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
          shadow: 'rgba(16, 185, 129, 0.45)',
          label: 'WEB 3D INTERACTIVE CANVAS',
          Icon: Box,
        };
      case 'sketch':
      case 'penpot':
        return {
          bg: 'linear-gradient(135deg, #7C3AED 0%, #0F172A 50%, #6366F1 100%)',
          badgeBg: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)',
          shadow: 'rgba(99, 102, 241, 0.45)',
          label: 'UI SYSTEM & PROTOTYPING',
          Icon: Layout,
        };
      case 'notion':
      case 'raycast':
        return {
          bg: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #3B82F6 100%)',
          badgeBg: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
          shadow: 'rgba(59, 130, 246, 0.45)',
          label: 'CONNECTED WORKSPACE SUITE',
          Icon: Zap,
        };
      case 'affinity-photo':
        return {
          bg: 'linear-gradient(135deg, #083344 0%, #0F172A 50%, #38BDF8 100%)',
          badgeBg: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
          shadow: 'rgba(56, 189, 248, 0.45)',
          label: 'PRO PHOTO RETOUCHING SUITE',
          Icon: ImageIcon,
        };
      default:
        return {
          bg: 'linear-gradient(135deg, #1E1B4B 0%, #0F172A 50%, #7C3AED 100%)',
          badgeBg: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
          shadow: 'rgba(99, 102, 241, 0.45)',
          label: 'CREATIVE SOFTWARE SUITE',
          Icon: Layers,
        };
    }
  };

  const theme = getBespokeToolTheme(toolId, category);
  const IconComponent = theme.Icon;

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
        background: theme.bg,
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
      }}
    >
      {hasPrimaryImage ? (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* High-Resolution Dedicated Showcase Image */}
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

          {/* Ambient Overlay */}
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
              fontSize: '9px',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '0.05em',
            }}
          >
            OFFICIAL SUITE
          </div>
        </div>
      ) : (
        /* Bespoke 3D Glassmorphic Software Showcase Banner for Secondary Tools */
        <div style={{ position: 'relative', width: '100%', height: '100%', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFFFFF' }}>
          {/* Background Ambient Glow Orb */}
          <div
            style={{
              position: 'absolute',
              top: '-30px',
              right: '-10px',
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.22) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Top Row: Tool Name & Specialty Badge */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
            <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.06em', color: '#FFFFFF', textShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>
              {(toolName || 'SOFTWARE').toUpperCase()}
            </span>
            <span
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.18)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '9999px',
                padding: '2px 8px',
                fontSize: '9px',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '0.05em',
              }}
            >
              PRO SUITE
            </span>
          </div>

          {/* Bottom Row: 3D Glassmorphic Emblem & Descriptor */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', zIndex: 2 }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.22)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.45)',
                boxShadow: `0 6px 16px ${theme.shadow}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
              }}
            >
              <IconComponent size={18} strokeWidth={2.4} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '10px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.04em' }}>
                {theme.label}
              </span>
              <span style={{ fontSize: '9px', opacity: 0.85, fontWeight: 600 }}>
                {category || 'Creative Studio'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
