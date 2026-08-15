import Link from 'next/link';

export default function BrandLogo({ size = 'medium', className = '' }) {
  const isSmall = size === 'small';

  return (
    <Link
      href="/"
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.625rem',
        textDecoration: 'none',
        color: 'var(--text-primary)',
        fontWeight: 600,
        fontSize: isSmall ? '1rem' : '1.125rem',
        letterSpacing: '-0.02em',
      }}
    >
      {/* Modern Gradient Layers Emblem */}
      <div
        aria-hidden="true"
        style={{
          width: isSmall ? '2rem' : '2.35rem',
          height: isSmall ? '2rem' : '2.35rem',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(79, 70, 229, 0.28)',
          flexShrink: 0,
        }}
      >
        <svg
          width={isSmall ? '18' : '22'}
          height={isSmall ? '18' : '22'}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top Layer */}
          <path
            d="M12 2L2 7.2L12 12.4L22 7.2L12 2Z"
            fill="#FFFFFF"
            fillOpacity="0.95"
          />
          {/* Middle Layer */}
          <path
            d="M2 12L12 17.2L22 12"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.8"
          />
          {/* Bottom Layer */}
          <path
            d="M2 16.8L12 22L22 16.8"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.55"
          />
        </svg>
      </div>

      {/* Logo Typography */}
      <div style={{ lineHeight: 1.15 }}>
        Design{' '}
        <span
          style={{
            background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          & Creative
        </span>{' '}
        Tools
      </div>
    </Link>
  );
}
