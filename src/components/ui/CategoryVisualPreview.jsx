export default function CategoryVisualPreview({ categoryId }) {
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
        border: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
        background: '#0F172A',
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {/* Real High-Resolution Photography & Render Showcase Image */}
        <img
          src={`/images/categories/real/${categoryId}.jpg`}
          alt={`${categoryId} Professional Showcase`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        {/* Ambient Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(15, 23, 42, 0.5) 100%)',
            pointerEvents: 'none',
          }}
        />


      </div>
    </div>
  );
}
